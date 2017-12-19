# try...catch...finally

`try` 必须使用 `{}`，至少有一个 `catch` 或 `finally` 子句。

不支持条件 `catch`。

```js
try {
  throw new Error('Oops')
} catch (err) {
  // err 只存在于 catch 块
  console.error(err)
}
```

## finally

`finally` 子句始终运行，通常用于清理。

JavaScript 会暂停 `try` 和 `catch` 块中的流程控制语句直到 `finally` 块结束。

```js
var v = function () {
  try {
    return 1 // 暂停返回直到 `finally` 块结束
  } finally {
    console.log('suspended')
  }
}
console.log(v()) // 1
```

当 `finally` 块使用了 `return`, `throw`, `break` 或 `continue`，`try` 和 `catch` 块的流程控制语句被覆盖。应当避免这么做。

```js
var v = function () {
  try {
    return 1
  } finally {
    return 2
  }
}
console.log(v()) // 1
```

[ESLint no-unsafe-finally rule](http://eslint.org/docs/rules/no-unsafe-finally)

## 嵌套 try

内层如果没有 catch 异常（包含 catch 块抛出的异常），外层将 catch 这个异常。

```js
try {
  try {
    throw new Error('Oops')
  } finally {
    console.log('finally')
  }
} catch (err) {
  console.error(err)
}
```
