# 函数参数

函数参数细分为：

- 形参（formal parameters 或 parameter），在定义函数时指定的参数。
- 实参（actual parameters 或 argument），在调用函数时传入的参数。函数内有一个特殊的变量 [`arguments`](arguments.md) ，它是一个 类数组，元素为函数实参。

ES6 支持默认参数值，剩余参数等。形参和实参的对应可以视为[解构赋值](../destructuring.md)：

```js
[param1, param2] = [arg1, arg2]
```

示例

```js
function f(a, b=0) {
  // [a, b = 0] = [1, 2]
  console.log(a, b)
}
f(1, 2)
```

## 默认参数值

默认参数值，除了在[解构赋值](../destructuring.md)一文提到的特点外，还有下面特点

- 不包含在 [`arguments` 变量](arguments.md)中。
- 不能访问函数内的变量。

```js
function log({ x = 0, y = 0 } = {}) {
  // [{ x = 0, y = 0 } = {}] = [{ x: 1 }]
  // 为 pattern `{ x = 0, y = 0 }` 提供默认值 `{}`，否则无参调用 `log()` 报错
  console.log(x, y)
}

log({ x: 1 })
log()
```

pattern 匹配为 undefined 时也会使用默认值，这是为了可以委托参数

```js
function multiply(x = 1, y = 1) {
  return x * y
}
function square(x) {
  // multiply(undefined, undefined)
  return multiply(x, x)
}
console.log(square())
```

## Rest parameters

剩余参数，显然要放在参数列表的最后一个。

```js
function f(x, ...args) {
  // [x, ...args] = ['a', 'b', 'c']
  // x = 'a'; args = ['b', 'c']
  console.log({args, arguments})
}
f('a', 'b', 'c')
```

## Required parameters

ES 目前没有实现 required parameters，可以用默认参数模拟

```js
function mandatory() {
    throw new Error('Missing parameter')
}
function foo(mustBeProvided = mandatory()) {
    return mustBeProvided;
}
foo()
```

hack 的味道太重，我觉得还是由语言自身实现比较好。

## 参数按值传递

参数复制一个副本，将副本传递给函数。

原始类型和引用类型（对象）的复制机制不一样，对象复制的是索引。

```js
var obj = { city: 'Beijing' }
var func = function(data) {
  data = { city: 'Shanghai' } // 参数重新赋值
  return data
}

console.log(func(obj)) // { city: 'Shanghai' }
console.log(obj) // { city: 'Beijing' }
```

## 参考

- <http://exploringjs.com/es6/ch_parameter-handling.html>
