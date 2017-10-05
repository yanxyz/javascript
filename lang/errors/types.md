# Errors

## Error constructor

```js
try {
  throw new Error('Oops')
} catch (err) {
  console.error(err)
}
```

throw 应该抛出 error object 而不是 strings。

Error 是一般错误，还有 ReferenceError，SyntaxError，TypeError 等特定类型错误。

## SyntaxError

ES 新语法，浏览器若不支持会抛出 SyntaxError，有些 try 可以捕获，有些不可以。

IE 不支持箭头函数，解析源码失败，try 不能捕获这个 SyntaxError

```js
try {
  var noop = () => {}
} catch (err) {
  console.error(err)
}
console.log('arrow function')
```

IE 不支持下面 RegExp 语法，不过 try 可以捕获这个 SyntaxError

```js
try {
  new RegExp(/ab+c/, 'g')
} catch (err) {
  console.error(err)
}
console.log('RegExp constructor')
```
