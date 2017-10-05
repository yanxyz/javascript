# arguments

`arguments` 是函数内一个特殊的变量，它是一个类数组，元素为函数实参。

[为什么不是数组？](https://www.zhihu.com/question/50803453/answer/122786182)。

```js
function f() {
  console.log(arguments)
  console.log(arguments[1]) // 'b'
}
f('a', 'b', 'c')
```

参数列表数组

```js
function f() {
  const args = Array.prototype.slice.call(arguments)
  console.log(args)
}

function f() {
  const args = Array.from(arguments)
  console.log(args)
}

function f(...args) {
  console.log(args)
}

f('a', 'b', 'c')
```

## strict mode

`arguments` 不可以用作标识符。

`arguments` 是参数列表的副本。修改 `arguments` 的元素不会修改参数；反之，修改参数不会修改 `arguments` 的元素。

```js
function f(x) {
  arguments[0] = 2
  console.log(x) // 2
  x = 3
  console.log(arguments[0]) // 3
}

function f2(x, y) {
  'use strict'
  arguments[0] = 2
  console.log(x) // 1
  x = 3
  console.log(arguments[0]) // 2
}

f(1)
f2(1)
```

不支持 `arguments.callee`, 抛出 TypeError。

不支持 `arguments.caller`, 抛出 TypeError。
