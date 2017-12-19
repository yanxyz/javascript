# Promise

## Promise constructor

```js
new Promise(executor)
```

`Promise` 必须以 new 调用，即只能当作 constructor。
必须提供一个参数 `executor`，并且它必须是函数。

constructor 跟普通函数运行机制不大一样，见[constructors](../objects/prototypes.md)。在运行 Promise constructor 时

1. 创建一个 promise object, 在 constructor 内 this 指向它。
2. 运行 constructor 的代码, 这里运行 executor。
3. 返回 this，即创建的 promise object。 它的初始状态是 pending。如果 executor 运行出错，它的状态是 rejected。

executor 有两个可选的函数参数

```
executor: (resolve, reject) => any
```

这两个函数用于改变 promise 的状态。
如果不调用它们，promise 的状态始终是 pending, promise.then() 添加的回调也就不会运行。

- `resolve(value)`, value 是任意类型，见 [resolve 过程](#resolve)。
- `reject(reason)`, reason 是任意类型，不过和 throw 一样建议使用 Error 对象，以方便调试。

```js
const p1 = new Promise((resolve, reject) => {
  // 同步
  resolve(1)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 异步
    resolve(2)
  }, 0)
})

console.log(p1) // Promise {<resolved>: 1}
console.log(p2) // Promise {<pending>}
```

resolve/reject 可以多次调用，不过 promise 的状态只能改变一次，
所以第一次调用有效，后续调用忽略

```js
const p1 = new Promise((resolve, reject) => {
  reject(new Error('Oops'))
  console.log('promise is rejected')
  resolve(1)
})
console.log(p1)
```

- [The Promise Constructor](https://tc39.github.io/ecma262/#sec-promise-constructor)

## Instance methods

### `.then()`

为 promise 添加回调

```js
promise2 = promise1.then(onFulfilled, onRejected)
```

promise1.then() 有两个可选的函数参数，它们是为 promise1 添加的回调。
.then() 返回新的 promise。

如果 promise1 状态为 pending。 promise2 的状态也为 pending。
等 promise1 的状态改变之后再异步执行异步相应的回调，即

- promise1 的状态变成 fulfilled，则调用 onFulfilled
- promise1 的状态变成 rejected，则调用 onRejected

如果 promise1 的状态不是 pending，则执行（异步）相应的回调。

回调执行完后，它的返回值用于 resolve promise2。
如果回调没有 return 语句，返回值视为 undefined。


- 回调报错，reject promise2
- 返回值是 promise2，

两个回调参数是可选的，并且如果不是函数则忽略。
如果没有对应的回调，promise2 使用 promise1 的状态。

### `.catch()`

相当于

```js
.then(null, onRejected)
```

### `.finally()`

```js
promise2 = promise1.finally(onFinally)
```

- onFinally，回调函数，没有参数
- 返回一个新的 promise

onFinally 的返回值不用于 resolve promise2，promise2 采用 promise1 的状态。
不过如果 onFinally 报错或者返回一个 rejected promise，promise2 被 reject。


```js
function f(url) {
  showLoadingSpinner()
  fetch(url)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error)
    .finally(() => hideLoadingSpinner())
}
```

改用 async/await

```js
async function f(url) {
  showLoadingSpinner()
  try {
    const text = await fetch(url).then(res => res.text())
    console.log(text)
  } catch (err) {
    console.error(err)
  } finally {
    hideLoadingSpinner()
  }
}
```

- [Promise.prototype.finally - Google Developers](https://developers.google.com/web/updates/2017/10/promise-finally)
- [Promise.prototype.finally - tc39](https://github.com/tc39/proposal-promise-finally/#readme)
- [Promise.prototype.finally shim](https://github.com/es-shims/Promise.prototype.finally)

## Static methods

### `Promise.resolve()`

一个可选参数

- 没有参数时，按 undefined 处理
- 参数是一个 promise 时返回这个 promise
- 参数是其它值，创建一个 promise 并以参数 resolve 它

### `Promise.reject()`

一个可选参数

- 没有参数时，按 undefined 处理
- 创建一个 promise 并以参数 reject 它

### `Promise.all()`

- 一个必选参数，并且必须是数组。数组元素可以是任意类型。
- 返回一个 promise

如果其中一个 rejected, 则 Promise.all rejected，不再等待其它 promises 完成。
意思是，未完成的 promises 仍然在运行，只是 Promise.all 不再追踪它们。

- [break promise.all on catch - Stack Overflow](https://stackoverflow.com/questions/38158667/break-promise-all-on-catch)
- [Why does JavaScript's `Promise.all` not run all promises in failure conditions? - Stack Overflow](https://stackoverflow.com/questions/42304394/)

并行执行

```js
Promise.all([ajax('foo.json'), ajax('bar.json')])
  .then([foo, bar] => {})
```

### `Promise.race()`

API 和 Promise.all() 类似。不同的是返回的 promise 的状态取决于第一个完成的 promise。

timeout

```js
Promise.race([ajax('foo.json'), timeout(5000)])
```

## resolve

promise 的 resolve 过程 `[[Resolve]](promise, x)`
比如，`resolve(value)` `then()` 等

一，x 和 promise 是同一个对象，导致 .then() 循环，报错

```js
var p = Promise.resolve()
  .then(() => {
    // 返回 then 创建的 promise
    // TypeError: Chaining cycle detected
    return p
  })
```

二，x 是一个 promise，使用它的状态

```js
var p = Promise.resolve()
  .then(() => {
    return Promise.resolve('b')
  })
```

三，x 是一个 object 或 function

- x 没有 then 方法，以 x fulfill promise；
- x 有 then 方法（此时 x 称为 thenable），异步调用这个方法，跟上文提到的 [executor](#promise-constructor) 类似，此方法有两个函数参数

```js
x.then(resolve, reject)
```

四，x 不是 object 或 function，以 x fulfill promise


## 资料

- [Promises/A+](https://github.com/promises-aplus/promises-spec)
- [Promises/A+ 译文](https://segmentfault.com/a/1190000002452115)
