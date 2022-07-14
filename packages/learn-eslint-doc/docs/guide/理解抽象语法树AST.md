# 理解抽象语法树

## 什么是 AST

先看看下面两幅图，我猜你心中肯定有了一定的答案了

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3m0ps2df8j20oe06wa9z.jpg" alt="image-20220626223249552" style="zoom: 50%;" />

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3m0no0ikxj211g0qijsf.jpg" alt="image-20220626223045345" style="zoom:50%;" />

- ***Abstract Syntax Tree***抽象语法树（通常被简写成 AST）实际上只是一个解析树 (***parse tree***) 的一个精简版本。在编译器设计的语境中，"AST" 和 "语法树"(syntax tree) 是可以互换的。
- 什么是解析树呢？我们知道一棵解析树是包含代码所有语法信息的树型结构，它是代码的直接翻译。所以解析树，也被成为具象语法树（Concret Syntax Tree, 简称 CST）; 而抽象语法树，忽略了一些解析树包含的一些语法信息，剥离掉一些不重要的细节，所以它看起并不像解析树那么事无巨细，这也是 AST 名字中抽象一词的由来。
- 用大白话来说就是用一个对象来表示 JavaScript 代码
- 可以使用一些现成的解析器去查看一下生成的 AST 代码，比如 Esprima， 它是一个 ECMAScript 解析器。可以在 [https://astexplorer.net/](https://link.zhihu.com/?target=https%3A//astexplorer.net/) 上，输入代码，选择合适的解析器，查看生成的代码。
- AST 没什么 ，就是用 JavaScript 的对象来描述 code

## 哪些工具在使用 AST

- Webpack
- Linters
- Babel
- Minifiers
- Syntax Highlighters

## ESlint 如何使用 AST 的

- ESLint 使用 ESPree JavaScript 解析器来解析代码
- ESpree 解析器转换 JavaScript 代码为 AST
- 下图就是 ESLint 使用 ESpree 解析 JavaScript 代码为 AST 的展示
- ![image-20220626235914449](https://tva1.sinaimg.cn/large/e6c9d24egy1h3m37qkbw5j21dl0u0jue.jpg)

## 为什么要了解 AST

- 了解了 AST 就大概知道了 ESlint 的工作原理
- 了解了 AST 之后我们就可以编写属于自己的 ESlint 规则和编写 ESlint 插件啦～
