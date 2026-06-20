# 数独 Sudoku

Electron 桌面数独游戏，纯 HTML/CSS/JS 实现。

## 功能

- 🎯 **4 级难度**：简单 / 中级 / 高级 / 专家
- 📝 **笔记模式**：空格暂存候选数字，N 键切换
- ❌ **错误计数**：按难度允许 3-5 次错误
- ⌨️ **全键盘操作**：方向键移动，1-9 填数，N 键笔记，Delete/Backspace 清除
- 🎉 **完成弹窗** + 游戏失败提示

## 安装运行

```bash
# 1. 克隆仓库
git clone https://github.com/DeRiza/Sudoku.git
cd Sudoku

# 2. 安装依赖
npm install

# 3. 启动
npm start
```

## 打包为 macOS 应用

```bash
npm run build
```

生成的 DMG 位于 `dist/` 目录。

## 技术栈

- Electron 28
- 原生 HTML / CSS / JavaScript
- 无前端框架，零运行时依赖
