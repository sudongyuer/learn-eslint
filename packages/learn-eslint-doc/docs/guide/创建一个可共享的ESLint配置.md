# 创建一个可共享的ESLint配置

> eslintrc文件中的配置是项目的重要组成部分，因此，您可能希望与其他项目或人员共享它。可共享的配置允许你在npm上发布你的配置设置，并让其他人下载并在他们的ESLint项目中使用它。

## 目标

- 创建一个可共享配置，让其他项目直接使用eslint共享的配置

## Coding

- 初始化项目，⚠️注意项目名必须是`eslint-config-xxx`这样的形式，没有为神马，这是ESLint共享配置文件的约定

![image-20220702174126292](https://tva1.sinaimg.cn/large/e6c9d24egy1h3sq0gylghj21m20u041y.jpg)

- 新建index.js在里面创建你想导出的配置

![image-20220702175822796](https://tva1.sinaimg.cn/large/e6c9d24egy1h3sqi2f6plj22560s4435.jpg)

- 在其他项目引入当前可共享配置

![image-20220702175914987](https://tva1.sinaimg.cn/large/e6c9d24egy1h3sqiyzq4pj21180regpf.jpg)

在`.eslintrc`配置`extends` 使用自定义的共享配置即可 ⚠️注意这里继承的名称只需要写eslint-config-xxx 这里的xxx部分即可

![image-20220702180022479](https://tva1.sinaimg.cn/large/e6c9d24egy1h3sqk58p4aj21560p4abx.jpg)

## 效果

共享的配置在另一个项目生效了

![image-20220702180231976](https://tva1.sinaimg.cn/large/e6c9d24egy1h3sqmdpxlxj20v60fejsg.jpg)