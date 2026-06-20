const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 520,
    height: 750,
    resizable: true,
    minWidth: 520,
    minHeight: 700,
    title: '数独',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  // 拦截关闭事件，先让渲染进程保存
  mainWindow.on('close', function(e) {
    if (mainWindow && !mainWindow.isDestroyed()) {
      e.preventDefault();  // 阻止立即关闭
      mainWindow.webContents.send('save-before-quit');
      // 渲染进程保存完毕后会发 'save-complete'，那时才真正退出
    }
  });
}

// 渲染进程确认保存完毕后，真正退出
ipcMain.on('save-complete', function() {
  if (mainWindow) {
    mainWindow.destroy();  // 真正关闭窗口
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', function() {
  app.quit();
});
