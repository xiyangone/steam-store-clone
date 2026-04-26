# Steam Store Clone

基于 `React 19 + Vite 6 + TypeScript` 的 Steam 中文商店首页复刻项目，当前重点是首页视觉、内容密度、交互结构和本地静态资源还原。

## 当前范围

- 复刻 Steam 中文首页主路径 `/`
- 统一把暂未实现的跳转落到 `/pending-link`
- 首页排行榜区已对齐到当前官网 5 个榜单：
  - `人气蹿升的新品`
  - `热销商品`
  - `热门即将推出`
  - `优惠`
  - `人气蹿升的免费游戏`
- 首页所需图片、视频、图标、字体与本地静态资源已落到 `public/steam/home/`

## 技术栈

- `React 19`
- `Vite 6`
- `TypeScript`
- `Vitest`
- `Playwright`

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：

```text
http://localhost:5173/
```

## 可用命令

```bash
npm run dev
npm run build
npm run test
npm run test:e2e
npx vitest run --coverage
```

## 覆盖率

本仓库已经启用 `vitest` 的 `v8` 覆盖率，并在 `vite.config.ts` 中将阈值设置为：

- `statements: 100`
- `branches: 100`
- `functions: 100`
- `lines: 100`

查看覆盖率方式：

1. 运行 `npx vitest run --coverage`
2. 终端会直接输出百分比汇总
3. HTML 报告在 `coverage/index.html`

本次验收结果：

```text
Statements: 100%
Branches: 100%
Functions: 100%
Lines: 100%
```

## 验证结果

本次已通过：

```bash
npx vitest run --coverage
npm run build
npx playwright test tests/e2e/home.spec.ts
```

## 目录说明

```text
src/app/                          应用入口与 pending-link 路由
src/features/steam-home/          首页页面、组件、样式与测试
src/mocks/steam-home.ts           首页静态数据源
tests/e2e/home.spec.ts            首页端到端测试
public/steam/home/                本地静态资源
```

## 部署说明

项目已兼容 GitHub Pages 的 `base` 路径处理，`vite.config.ts` 会根据 `GITHUB_REPOSITORY` 自动计算资源前缀。
