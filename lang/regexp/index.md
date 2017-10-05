# 正则表达式

## 创建

RegExp literal，`/pattern/flags`

```js
var re = '/o/g'
```

### RegExp constructor

`new RegExp(pattern, flags?)`

`pattern` 为 String，此时除了正则表达式的转义外，还要进行字符串转义，比如匹配 `\\`

```js
var literal = /\\/
var obj = new RegExp('\\\\')
```

`pattern` 也可以是一个 RegExp object，创建该对象的克隆

```js
var re = /ab+c/i
new RegExp(re)       // /ab+c/i
new RegExp(re, 'iu') // /ab+c/iu, ES5 抛出 SyntaxError
```

当正则表达式要用到变量时，比如匹配搜索词，RegExp 字面量无法做到，只能用 RegExp constructor。这时要注意转义

- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp/blob/master/index.js)



## flags

flag | prop       | 说明
-----| ----       | ---
'g'  | global     |
'i'  | ignoreCase |
'm'  | multiline  |
'y'  | sticky     | 与 'g' 类似，不同的是每次匹配从 lastIndex 开始。
'u'  | unicode    | [unicode](../unicode.md)

`.flags` 属性返回所用的 flags

## 方法

RegExp object 两个方法 test(), exec()

`regex.test(str)`

测试字符串是否匹配 pattern。若匹配则返回 true，不然返回 false。

`regex.exec(str)`

匹配字符串。如果有匹配，返回一个数组 `[match, p1, p2, ...]`（和 [replace 方法](../strings/replace.md) 回调函数的参数类似）；如果没有匹配，返回 null。

当 regex 使用了 `g` 时，每次匹配会修改 regex 的 lastIndex 属性，下次查询从 lastIndex 开始。

## 参考

- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Regular Expressions in a post-ES6 world](https://ponyfoo.com/articles/regular-expressions-post-es6)
