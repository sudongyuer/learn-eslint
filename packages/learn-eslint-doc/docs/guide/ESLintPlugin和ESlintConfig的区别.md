# ESLint Plugin 和 ESLint Config 的区别

## 为什么有 ESLint Plugin 和 ESLint Config

- 当我们写下了很多 ESlint 配置后，如何共享呢？

![image-20220628224557451](https://tva1.sinaimg.cn/large/e6c9d24egy1h3occ28yj8j20ss15cadi.jpg)

- 这时候我们就需要使用 ESlint Config 来共享我们的配置，ESlint Config 就仅仅是一个 JavaScript 对象然后包含了一些配置信息，仅此而已
- 当我们需要共享一些自定义规则，这时候就需要 ESLint plugin 来帮忙了，一个插件基本上是一个自定义的集合规则，你可以导入和使用。

## 举个栗子

### ESLint Config

![image-20220628232630171](https://tva1.sinaimg.cn/large/e6c9d24egy1h3odi8onkhj20xk0o2abm.jpg)

- `eslint:recommended`就是一个 ESLint 的配置文件
- 当上面的代码加载后，首先会知道项目代码运行的环境为 browser
- 其次就是从`eslint:recommended`加载所有的共享规则
- 然后在 rules 中写的规则去增加或者重写 eslint:recommended 中的共享规则

### ESLint Plugin

![image-20220628233216295](https://tva1.sinaimg.cn/large/e6c9d24egy1h3oe9mjtepj20wa0j8dh3.jpg)

- 包含自定义规则
- 可能包含配置文件
- 上图从`node_modules`导入`react` plugin
- 从插件导出的规则中指定自定义规则并使用