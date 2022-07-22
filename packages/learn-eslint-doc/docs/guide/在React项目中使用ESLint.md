# 在 React 项目中使用 ESLint

> 经过之前的实战，我们对 ESLint 的理解应该是比较深入了，接下来我们就应该在实际的框架级应用中去使用 ESLint 来为我们的应用保驾护航了🚢～

## 目标

- 初始化 React 项目
- 初始化 ESLint
- 在 React 项目中运行 ESLint

## Coding

- 使用`pnpm dlx create-react-app ./react-project` 创建 React 项目

![image-20220701000815553](https://tva1.sinaimg.cn/large/e6c9d24egy1h3qpybcyh7j213a0hy0uf.jpg)

- 创建好项目后，进入项目根目录，运行`eslint --init`进入命令行界面初始化 ESLint

![image-20220630233825420](https://tva1.sinaimg.cn/large/e6c9d24egy1h3qp3bcfltj20xg0dqacz.jpg)

- 在项目添加 lint 的 script 并运行`pnpm run lint`

![image-20220701001449392](https://tva1.sinaimg.cn/large/e6c9d24egy1h3qq55bwksj20ru0jkgo9.jpg)

## 效果

运行 lint 脚本后的效果

![image-20220701002252640](https://tva1.sinaimg.cn/large/e6c9d24egy1h3qqditw9mj215i0q6grq.jpg)

如何修复上面的错误呢，我们需要在`.eslintrc`中配置一些参数来修复它们

![image-20220701002459095](https://tva1.sinaimg.cn/large/e6c9d24egy1h3qqfpwa6dj20yn0u0785.jpg)

再次运行 lint，可以看见没有任何`lint`错误信息了

![image-20220701002547095](https://tva1.sinaimg.cn/large/e6c9d24egy1h3qqgjpavuj21660by74y.jpg)
