# Async Functions

Async functions 跟普通函数类似，创建方式

- async 函数声明
- async 函数表达式
- `AsyncFunction` constructor，不过它不是全局函数，[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)

```js
// async function declaration
async function f1() {
  await 'hello world'
}
typeof f1 // 'function'

// async function expession
var f2 = async function () {}
var f3 = async () => {}
```

在 async functions 内可以使用 await。async functions 返回一个 promise。详细的运行机制见下文。

## await

await 只能用在 async functions 内。

await 是一元操作符，优先级跟 typeof 一样，[操作符优先级](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)。await 的 oprand，如果不是 promise, 则在背后通过 `Promise.resolve()` 将它转为 promise。

await 表达式的值是 promise 的 resolved value。

```js
(async () => {
  console.log(typeof 1 + 1)
  console.log(await 1 + 1)
})()
```

## 运行

Async function 在运行过程中，当遇到 await 表达式时，则暂停运行，并且不阻塞脚本的运行。当 await 表达式有结果了，它继续运行 await 表达式之后的代码。最后返回一个 resolved promise，resolved value 是 return 语句的值（没有 return 语句便是 undefined）。

Async function 的内部代码若有错（或者是冒泡上来的错误），如果不捕获错误，则 async functions 返回一个 rejected promise。

想一想下面例子的输出结果

```js
async function f() {
  console.log('a')
  return 'done!'
}
console.log(f())
console.log('script end')
```

```js
async function f() {
  console.log('a')
  await console.log('b')
  console.log('c')
  return 'done!'
}
console.log(f())
console.log('script end')
```

```js
async function f() {
  console.log('a')
  await console.log('b')
  console.log('c')
  return 'done!'
}
setTimeout(() => console.log('timeout'))
console.log(f())
console.log('script end')
```

```js
async function f() {
  console.log('a')
  await console.log('b')
  console.log('c')
  return 'done!'
}
setTimeout(() => console.log('timeout'))
console.log(f())
console.log('script end')
```

```js
function t() {
  throw new Error('Oops')
}

async function f() {
  console.log('a')
  await t()
  console.log('c')
  return 'done!'
}
console.log(f())
console.log('script end')
```

## 拓展

Async functions 实现串行（series）比较自然

```js
async function f() {
  const arr = [1, 2, 3]
  const ret = []
  for (const item of arr) {
    ret.push(await (item * 2))
  }
  console.log(ret)
  return ret
}
console.log(f())
console.log('script end')
```

并行（parallel）

```js

```


## 资料

- [Async functions - making promises friendly](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions)
