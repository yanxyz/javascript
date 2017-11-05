# Errors

## Error constructor

```js
try {
  throw new Error('Oops')
} catch (err) {
  console.error(err)
}
```

Error 是一般错误，还有 ReferenceError，SyntaxError，TypeError 等特定类型错误。

## SyntaxError

ES 新语法，浏览器若不支持会抛出 SyntaxError，有些 try 可以捕获，有些不可以。

[test](SyntaxError.html)
