# 配置 ESLint

ESLint 旨在为您的用例灵活和可配置。您可以关闭每个规则并仅在基本语法验证的情况下运行，或者混合并匹配捆绑的规则和您的自定义规则以满足您的项目需求。配置 ESLint 有两种主要方法：

1. **配置注释**- 使用 JavaScript 注释将配置信息直接嵌入到文件中。
2. **配置文件**- 使用 JavaScript、JSON 或 YAML 文件来指定整个目录及其所有子目录的配置信息。这可以是文件的形式，也可以是[`.eslintrc.*`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-file-formats)文件`eslintConfig`中的字段，ESLint 都会自动查找和读取这两种形式，也可以在[命令行](https://eslint.org/docs/latest/user-guide/command-line-interface)[`package.json`](https://docs.npmjs.com/files/package.json)中指定配置文件。

以下是您可以在 ESLint 中配置的一些选项：

- [**环境**](https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments)- 您的脚本设计用于运行的环境。每个环境都带有一组特定的预定义全局变量。
- [**全局**](https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-globals)变量 - 您的脚本在执行期间访问的其他全局变量。
- [**规则**](https://eslint.org/docs/latest/user-guide/configuring/rules)- 启用哪些规则以及在什么错误级别。
- [**插件**](https://eslint.org/docs/latest/user-guide/configuring/plugins)- 第三方插件为 ESLint 定义了额外的规则、环境、配置等。

所有这些选项都让您可以细粒度地控制 ESLint 如何处理您的代码。