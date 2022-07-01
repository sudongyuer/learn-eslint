# 限制节点模块的导入和eqeqeq

> 此篇为实战篇

## 背景

-  通常项目中只能使用一个工具函数库，比如lodash 或者 underscore，但是如果一个项目两个都在使用 必定会造成代码的冗余问题
- 项目中不允许使用`==`，而是应该使用`===`

## Coding

需要lint的code

```js
import lodash from 'lodash'

let arr = ['a', 'b', 'c']
const index=lodash.findIndex(arr,'a')
console.log(index)
function checkEven(number){
  if(number%2==0){
    return true
  }
  return false
}

checkEven(4)

```

`.eslintrc.json`

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "noInlineConfig": false,
    "rules": {
        "no-restricted-imports":[2,"lodash"],//👈
        "eqeqeq":["error","always"]//👈
    }
}

```

效果：

![image-20220626183746470](https://tva1.sinaimg.cn/large/e6c9d24egy1h3ltx7lsdxj20nw0j6400.jpg)
