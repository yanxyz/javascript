# JavaScript Destructuring

解构（destructuring）以 patterns 的方式从 objects 和 arrays 中提取数据。解构赋值

```js
pattern = value
```

如果 `value` 是原始类型将转为 object（[ToObject](types.md#toobject) ）。当 `value`是 undefined，null 时，抛出 TypeError 异常。

```js
const { length } = 'abc' // length = 3
const { foo } = undefined // TypeError: Cannot match against 'undefined' or 'null'.
```

undefined，null 不像 strings 可以包装为对象，没有数据可以提取。

解构赋值跟一般赋值没有什么不同，不局限于给变量赋值，也可以给对象属性，数组元素等赋值。

```js
const obj = {}
[obj.prop] = []
```

## Object pattern

Object pattern `{ prop1: var1, prop2: var2 }`，如果变量和属性同名，可以简写为 `{ prop1, prop2 }`。

```js
const obj = { first: 'Ivan', last: 'Yan' }
const { first, last } = obj
// first = "Ivan"; last = "Yan"
```

由于 `{}` 视为语句块，注意

```js
{ a, b } = obj   // SyntaxError
({ a, b }) = obj // SyntaxError
({ a, b } = obj) // ok
const { a, b } = obj // ok
```

在 Node.js 模块中常常只提取需要的值

```js
const { sum, mean } = '_'
```

object pattern 支持计算属性，可以提取 symbol keys

```js
const { [Symbol.iterator]: func } = []
typeof func // 'function'
```

## Array pattern

Array pattern `[var1, var2]`, 赋值表达式 `[var1, var2] = iterable`

```js
const [x] = [1, 2, 3]
// x = 1
```

可以省略跳过一些元素

```js
const [, y] = 'abc'
// y = 'b'
```

[剩余操作符 rest operator](operators/spread-rest.md) `...`

```js
const [x, ...y] = 'abc'
// x = 'a'; y = ['b', 'c']
```

剩余操作符的操作数可以是 array pattern

```js
const [x, ...[y, z]] = 'abc'
// x = 'a'; y = 'b'; z = 'c'
```

## Nested pattern

嵌套 pattern 可以将深层数据提取出来，不过相对复杂一些，容易出错

```js
const obj = {
  a: [{ foo: 123, bar: 'abc' }]
}
const { a: [{ foo }] } = obj // foo = 123
```

## 默认值

pattern 可以指定默认值。当 pattern 没有匹配时将使用默认值。

```js
// object pattern
const { a = 3, b } = {} // a = 3; b = undefined

// array pattern
const [x = 3, y] = [] // x = 3; y = undefined
```

当 pattern 匹配 `undefined`，也将使用默认值

```js
const [x = 3] = [undefined] // x = 3
const { a = 3 } = { a: undefined } // a = 3
```

默认值可以是表达式，只在需要时计算

```js
function log(x) { console.log(x); return 0 }
const [a = log('hello')] = [] // a = 0
// 'hello'
const [b = log('hello')] = [3] // b = 3
```

默认值可以引用 pattern 当中的变量，注意变量声明先后顺序

```js
var [x = 3, y = x] = [] // x = 3; y = 3
var [x = y, y = 3] = [] // ReferenceError: y is not defined
```

默认值可以是 pattern

```js
const [{ prop: x } = { prop: 3 }] = [] // x = ?
```

1. `{ prop: x }` 匹配 undefined, 于是使用默认值 `{ prop: 3 }`
2. 接着解构 `({ prop: x } = { prop: 3 })`，结果 `x = 3`

## empty pattern

[ESLint no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern)

空 pattern 不创建变量

```js
var [] = 'abc'
```

它们多半是误写

```js
var { a: {} } = {}
var { a = {} } = {}
```

## 应用

交换值

```js
let x = 1, y = 2; // 注意分号
[x, y] = [y, x]
console.log(x, y)
```

因为 array pattern 以 `[` 开始，在省略分号时要小心。

`exec()`

```js
const [, year, month, day] = /^(\d{4})-(\d{2})-(\d{2})$/
  .exec('2017-01-31') || []
console.log(year, month, day) // 2017 01 31
```

## 参考

- <http://exploringjs.com/es6/ch_destructuring.html>
