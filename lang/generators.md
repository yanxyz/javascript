# JavaScript 生成器

generator function

```js
function* genFunc() {
  console.log('hello')
  yield 'a'
}
```

`funciton` 关键字后面有一个 `*`，它的前后可以有空格，怎么写由代码规范规定。[ESLint rule generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing)。

generator function 不能用作构造器，即不可以使用 `new` 操作符。

调用 generator function，不会执行函数体，返回一个 generator 对象。generator 同时实现了 iterable protocol 和 the iterator protocol。

- generator 是 iterable，因为它有 Symbol.iterator 方法
- generator 也是 iterator，因为它有 next 方法。
- generator 的 iterator 是它自己。

```js
var genObj = genFunc()
typeof genObj[Symbol.iterator] // 'function'
typeof genObj.next // 'function'
genObj[Symbol.iterator]() === genObj // true
```

generator 有三个方法：`next()`, `return()`, `throw()`。

## next()

generator 每次调用 `next()`，generator function 运行到下一个 `yield` 暂停。

`yeild` 是一元操作符，只能用在 generator function 内（contextual keyword）。

`.next(arg) => { value, done }`

- 一个可选参数，这个参数将作为当前暂停的 `yield` 表达式的值；
- 返回一个对象
  - `value` 是下一个 `yield` 的操作数。
  - `done`，布尔值，表示是否迭代是否接受

```js
function* genFunc() { // A
  const input = yield 'hi' // B
  console.log(input)
  return 'bye'
}

const genObj = genFunc()
genObj.next('a') // 第一次调用
genObj.next('b') // 第二次调用
genObj.next('c') // 第三次调用

// Output:
// b
```

第一次调用 `next()`

- 暂停在 A 处，此处没有 `yield`，于是忽略 `next()` 的参数。
- 运行到 B 处遇到 `yield`，暂停，返回 `{value: 'hi', done: false}`，其中 `value` 值为这个 `yield` 的操作数（没有则视为 `undefined`）。

第二次调用 `next()`

- 暂停在 B 处，此处有 `yield`，这个 `yield` 表达式的值为 `next()` 的参数（没有则视为 `undefined`）。于是 `'b'` 赋值给 `input`。
- 继续运行遇到 `return`, 返回 `{value: 'bye', done: true}`，其中 `value` 值为返回值（没有则视为 `undefined`），`done: true` 表示迭代结束。

第三次调用 `next()`，迭代已经结束，返回 `{value: undefined, done: true}`。后面再调用 `next()`，同样如此。

可以看到 `next()`

- 第一次调用因为没有 yield，参数被忽略，它的作用只是启动 generator。
- 是不对称的，参数给当前 yield，而返回的是下一个 yield 的操作数。

## yield*

`yield* iterable`，将流程转到 iterable, 这个表达式的值是 iterable done value。

`yield` 后面的 `*`，它的前后可以有空格，怎么写由代码规范规定。[ESLint yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing)。

```js
function* g1() {
  yield 'abc'
}

function* g2() {
  yield* 'abc'
}

console.log([...g1()]) // ['abc']
console.log([...g2()]) // ['a', 'b', 'c']
```

## .return()

`return(x)` 在当前暂停的位置终止 generator（在当前 yield 处 `return x`），返回 `{value: x, done: true}`。

```js
function* genFunc() { // A
  yield 'hi'  // B
  console.log('terminated')
  yield 'bye' // C
}

const genObj = genFunc()
console.log(genObj.next()) // 启动 generator, 运行到 B 处暂停
console.log(genObj.return(1)) // 在 B 处 return
// {value: 1, done: true}
```

现在 generator 已完成，继续调用会如何？

```js
console.log(genObj.next('next'))
// {value: undefined, done: true}
console.log(genObj.return('return'))
// {value: "return", done: true}
```

不启动 generator 也可以使用

```js
const genObj2 = genFunc()
console.log(genObj2.return(2)) // 在 A 处 return
// {value: 2, done: true}
```

[`finally` 会暂停 `try` 内的 `return`](exceptions/try.md)，因此 `finally` 可以阻止 `return()` 终止 generator。

```js
function* genFunc() { // A
  try {
    yield 'hi'  // B
  } finally {
    yield 'haha' // C
  }
}

const genObj = genFunc()
console.log(genObj.next()) // 启动 generator, 运行到 B 处暂停
console.log(genObj.return('result')) // 在 B 处 return，进入 finally, 到 C 处暂停
// {value: "haha", done: false}
console.log(genObj.next()) //
// {value: "result", done: done}
```

## .throw()

`throw()` 在当前暂停的位置抛出异常。

```js
function* genFunc() { // A
  try {
    yield // B
  } catch (error) {
    console.log('Caught: ' + error)
  }
}

const genObj = genFunc()
console.log(genObj.next()) // 启动 generator, 运行到 B 处暂停
console.log(genObj.throw(new Error('Problem!'))) // 在 B 处抛出异常
// {value: undefined, done: true}
```

不启动 generator 也可以使用

```js
const genObj2 = genFunc()
console.log(genObj2.throw(new Error('Problem!'))) // 在 A 处抛出异常
// Uncaught Error: Problem!
```

## 参考

- <http://exploringjs.com/es6/ch_generators.html>

