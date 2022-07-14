# 在自定义插件中添加 rules

> 接着上一节，我们编写了自定义插件，但是我们使用插件中的自定义规则时，需要手动在`.eslintrc`rules 属性中指定开启自定义属性，那么我们如何启用自定义插件中的属性呢

Before：

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3q8914rhfj20gy0ftq49.jpg" alt="image-20220630133720070"  />

期望：只需要在 plugins 属性指定要导入的自定义插件，自定义规则自动启用

![image-20220630133754360](https://tva1.sinaimg.cn/large/e6c9d24ely1h3q892uxpdj20gu0cit9j.jpg)

## Coding

- 在插件`index.js`中添加 configs 的自定义规则导出即可

![image-20220630134331077](https://tva1.sinaimg.cn/large/e6c9d24ely1h3q7w9umkhj20gm0homyj.jpg)

- 在使用插件的地方`extends`插件中定义好的配置，这样我们就可以不用自定在 rules 中书写自定义插件的规则了

![image-20220630134722950](https://tva1.sinaimg.cn/large/e6c9d24ely1h3q80akkzfj20s20e20u4.jpg)

## 效果 

![image-20220630134834063](https://tva1.sinaimg.cn/large/e6c9d24ely1h3q81k9vqaj20rb0rjjum.jpg)
