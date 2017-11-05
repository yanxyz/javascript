# eval

eval 是一个全局函数

```js
eval(codeString)
```

eval 不会转换参数类型

- 如果参数不是 string, 则直接返回这个参数
- 如果参数是 string，则解析为表达式并计算表达式，返回计算结果。

eval 既然是函数，可以直接调用或者间接调用：

```js
(function () {
  // 直接调用
  console.log(eval('2 + 3')) // 5
  // 间接调用
  var indirectEval = eval
  console.log(indirectEval('2 + 3')) // 5
})()
```

ES5(IE>8)，当间接调用时，在全局作用域内运行 codeString，不能访问本地变量

```js
(function () {
  var i = 1
  console.log(eval('++i'))  // 直接调用，结果为 2
  var geval = eval
  console.log(geval('++i')) // 间接调用，结果抛出 ReferenceError
})()
```

## 严格模式

一，eval 不能用作标识符。

二，在 eval 内声明的变量不能在 eval 外面使用。

```js
(function () {
  'use strict'
  eval('var i = 1')
  console.log(i) // ReferenceError
})()
```

间接调用没有该限制，不过由于是在全局作用域内运行 codeString，声明的变量是全局变量

```js
(function () {
  'use strict'
  var geval = eval
  geval('var i = 1')
  console.log(i) // 1
})()
```

