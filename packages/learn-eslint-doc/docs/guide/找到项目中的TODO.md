# 找到项目中的 TODO

> 这篇同样是实战篇，结合上一篇编写自己的自定义规则，让我们继续练习一个小案例

## 目标

- 找到项目中的 TODO 注释
- 为什么要找 TODO 注释呢，相信大家日常开发肯定经常写 TODO 吧，有时候写着写着就忘了哪些还没实现，让我们利用 ESlint 写个小自定义规则来找到它吧～

## Coding

- 先编写一个代码 TODO 的代码等待测验

![image-20220627232655155](https://tva1.sinaimg.cn/large/e6c9d24egy1h3o8iceavxj21ao0u00w4.jpg)

- 在 rules 文件夹编写我们的自定义规则
  - 中间用到了 context 的一些 API，大家感兴趣可以自行去 eslint 官网查看一下，它有很多丰富的 API 可以供开发者使用
  - 比如`context.getSourceCode()`就是拿到当前 ESlint 正在解析的源文件
  - `sourCode.getAllComments()`就是获取当前源文件下的所有注释
  - 后边的大家看代码也能看懂了

![image-20220627232828259](https://tva1.sinaimg.cn/large/e6c9d24egy1h3n7y26bhmj20uk0u0n22.jpg)

- 接下来在 `.eslintrc.json`中启动自定义规则，规则名就是我们在 rules 文件夹下的文件名

## 运行及效果

- 同样使用 --rules 在命令行加载自定义规则，然后我们看看效果

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3n81nomk9j20sm18wjvc.jpg" alt="image-20220627233200273" style="zoom:50%;" />

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3n83udxjjj20vt0u0q7h.jpg" alt="image-20220627233406282" style="zoom:50%;" />
