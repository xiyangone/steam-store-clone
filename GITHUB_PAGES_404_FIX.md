# GitHub Pages 图片 404 修复说明

## 问题现象

线上 GitHub Pages 页面可以打开，但控制台里大量图片请求返回 `404`，例如：

- `ow-1.jpg`
- `ow-hero.jpg`
- `cs2-1.jpg`
- `ck3-1.jpg`
- `deal-torchlight.jpg`

这些文件实际上都存在于：

- `public/steam/home/`

## 根因

图片地址在 [src/mocks/steam-home.ts](Z:/1/src/mocks/steam-home.ts) 中被写成了固定绝对路径：

```ts
const asset = (name: string) => `/steam/home/${name}`;
```

本地开发环境下站点根路径是 `/`，所以这个写法看起来正常。

但 GitHub Pages 项目站点不是部署在根路径，而是部署在：

```text
/steam-store-clone/
```

因此线上正确地址应该是：

```text
/steam-store-clone/steam/home/xxx.jpg
```

而不是：

```text
/steam/home/xxx.jpg
```

## 修复方式

将资源路径改为基于 Vite 的 `BASE_URL` 生成：

```ts
const asset = (name: string) => `${import.meta.env.BASE_URL}steam/home/${name}`;
```

这样在不同环境下都会自动适配：

- 本地开发：`/steam/home/...`
- GitHub Pages：`/steam-store-clone/steam/home/...`

## 回归保护

新增测试文件：

- [src/mocks/steam-home.test.ts](Z:/1/src/mocks/steam-home.test.ts)

测试会模拟：

```text
BASE_URL=/steam-store-clone/
```

并验证首页 mock 数据中的资源地址会正确带上站点前缀，避免以后再次出现同类 404。
