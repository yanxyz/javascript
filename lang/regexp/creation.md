# 创建 RegExp object

有两种方式

- RegExp literals
- RegExp constructor

## RegExp literals

`/pattern/flags`

```js
var re = '/o/g'
```

[flags](flags.md)

## RegExp constructor

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
