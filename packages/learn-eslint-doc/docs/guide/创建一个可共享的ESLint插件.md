# 创建一个可共享的 ESLint 插件

> 继续上一讲，这一讲我们来实现一个自己的 ESLint 插件，并在其他项目中运用它

## 目标

- 安装`npm i -g yo`
- 安装`npm i -g generator-eslint`
- 运行`yo eslint:plugin`
- 编写自定义规则
- 在其他项目安装当前插件，并配置自定义规则

## Coding

- 想要快速创建 eslint-plugin 项目我们得使用它的脚手架
- 因此我们需要安装文档安装脚手架所需的依赖
- 文档在这里 👉 https://www.npmjs.com/package/generator-eslint

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pjv81bplj20u00upwhs.jpg" alt="image-20220629235208153" style="zoom: 50%;" />

- 安装好依赖后创建一个文件夹，目录名就叫自己的插件名字就好，这里我是用的是 monorepo 管理，所以直接在 packages 创建`eslint-plugin-sudongyeur`这个文件夹

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pjzb2f20j21dp0u00ur.jpg" alt="image-20220629235603320" style="zoom:50%;" />

- 然后进入`eslint-plugin-sudongyuer`文件夹目录执行下面的命令

- 执行 `yo eslint:plugin`初始化项目，进入命令行交互界面

- 完成以下的交互，注意我们这里要创建自定义规则，所以选择 Yes ⚠️这里有个注意事项 我们的 eslint 插件包都需要是`eslint-plugin-xxx`以`eslint-plugin 开头`，这里使用脚手架它会帮我们自动处理的，不用担心

  ![image-20220629235801061](https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk1cfwfaj20t204swfc.jpg)

- 初始化后，可以看见如下的目录结构

  ![image-20220629235957965](https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk3dgf42j20f40auaah.jpg)

- 然后我们只需要在 rules 中书协我们的自定义规则就行啦，这里我就用我们之前小节写的`find-todo`，如果你还不知道如何书写自定义规则，请参考这篇文章 https://sudongyuer.github.io/learn-eslint/guide/%E6%89%BE%E5%88%B0%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84TODO.html

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk56qedqj20wj0u042q.jpg" alt="image-20220630000142329" style="zoom:33%;" />

- 这就是我们写好自定义规则的目录结构

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk71w4vmj218t0u07a5.jpg" alt="image-20220630000329933" style="zoom:50%;" />

- 这样就算我们边写好了自己的自定义插件
- 接下来去其他项目安装并使用，我们去到 eslint-setup 这个项目中去使用一下我们的插件

​	这里我由于使用的 pnpm 所以直接使用 workspace 就可以直接将`eslint-plugin-sudongyeur`这个软链接进入当前项目，方便调试，正	常的话我们应该是将自己写好的插件发布包到 npm，然后在项目去中安装它

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3pk89mu05j21350u0435.jpg" alt="image-20220630000440000" style="zoom:50%;" />

- 现在到`eslintrc`中`plugins`添加我们的插件并在`rules`开启我们的自定义规则

![image-20220630001234351](https://tva1.sinaimg.cn/large/e6c9d24ely1h3pkghkii5j215f0u0wj9.jpg)

## 效果

当我们在当前项目中使用`//TODO`注释的时候，就会被我们的自定义插件提示

![image-20220630002456134](https://tva1.sinaimg.cn/large/e6c9d24ely1h3pktcopymj216e0u0gpp.jpg)