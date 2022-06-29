# 如何安装并使用ESLintConfig

## 目标

- 安装`eslint-config-airbnb-base`配置
- 在项目中继承`eslint-config-airbnb-base`配置

## Coding

- 执行命令安装 `pnpm add eslint-config-airbnb-base` 同样如果需要`peerdependencies`也是需要安装
- 然后在`.eslintrc`配置extends

![image-20220629134828063](https://tva1.sinaimg.cn/large/e6c9d24ely1h3p2f4apstj20go0fd755.jpg)

- 然后执行命令就可以看见airbnb-base的规则以及生效啦～

## 覆盖extends配置包中的规则

- 只需要在`.esintrc`的rules中重写规则就可以覆盖掉`extends`包中的规则

![image-20220629135104874](https://tva1.sinaimg.cn/large/e6c9d24ely1h3p2hu4ekcj20er0cgdgg.jpg)