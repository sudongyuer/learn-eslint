# Getting Started with ESlint

> ESLint 是一个 ECMAScript/JavaScript 的代码检查工具，用来检查并尽可能的修复您代码中不符合规范的地方。在多人协作中它能使我们编写的代码更加一致，并减少一些错误。

- ESLint 使用 Espree 进行 JavaScript 解析
- ESLint 使用 AST 来解析用户编写的代码
- ESLint 是完全可扩展的，每个规则都是一个插件并且您可以在运行时添加更多规则

## 安装及使用

> 先决条件：[Node.js](https://nodejs.org/en/) (`^12.22.0`、 `^14.17.0` or `>=16.0.0`) 使用 SSL 支持构建。（如果您使用的是官方的 Node.js 发行版，SSL 总是内置的。)

- 随便创建一个项目

- 在项目中使用包管理工具安装 ESlint

```shell
npm install eslint --save-dev

# or

yarn add eslint --dev

# or

pnpm add eslint --save-dev
```

- 通过 eslint 的命令行工具初始化 ESLint 配置文件

```shell
npm init @eslint/config

# or

yarn create @eslint/config

# or

pnpm create @eslint/config

```

注意：`npm init @eslint/config` 时假设您已经有一个 `package.json` 文件。如果没有，请确保事先运行 `npm init` 或`yarn init`。

- 然后您可以在任何文件或者目录运行 ESlint，如下所示：

```shell
npx eslint yourfile.js

# or

yarn run eslint yourfile.js
```

还可以在全局而不是本地安装 ESLint （使用 `npm install eslint --global`)。但是，不建议这样做，而且在这两种情况下，您使用的任何插件或可共享配置都必须在本地安装。

## 配置

在运行 `npm init @eslint/config` 之后，您将有一个`.eslintrc.{ js，yml，json }`文件。在其中，您将看到一些如下配置的规则：

```json
{
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

在 ESLint 中，名称 `“semi”` 和 `“quotes”` 是规则的名称。第一个值是规则的错误级别，可以是下列值之一：

- `off` or `0` - 关闭规则
- `warn` or `1` - 开启规则并作为警告信息（不影响代码运行）
- `error` or `2` - 开启规则并作为报错信息（影响代码运行）

这三个错误级别允许您对 ESLint 应用的规则进行细粒度控制（有关更多配置选项和详细信息，请参阅 [configuration docs](https://eslint.org/docs/latest/user-guide/configuring/)）。

您的`.eslintrc.{ js，yml，json }`配置文件还将包含以下行：

```json
{
  "extends": "eslint:recommended"
}
```

因为有了这一行，规则页面上标记为“（推荐）”的所有规则都将被打开。您也可以通过在 npmjs.com 上搜索“eslint-config”引用其他人创建的配置。除非从共享配置进行扩展，或者在配置中显式打开规则，否则 ESLint 将不会对代码进行格式化（lint）。

## 实战小练习

- 修改`.eslintrc`配置

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

- 写下如下代码

![image-20220625075725917](https://tva1.sinaimg.cn/large/e6c9d24egy1h3k5smscgdj20yw0qwgo6.jpg)

- 运行`eslint js`命令就会看见如下的 ESlint 报错信息

![image-20220625075902988](https://tva1.sinaimg.cn/large/e6c9d24egy1h3k5ub461aj20m405wq3m.jpg)

- 运行`eslint js --fix`修复错误信息

![image-20220625075959745](https://tva1.sinaimg.cn/large/e6c9d24egy1h3k5vamqsxj20o60yqwj4.jpg)
