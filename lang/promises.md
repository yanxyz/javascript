# Promises


## API


### Promise constructor

```js
new Promise(executor)
```

- [The Promise Constructor](https://tc39.github.io/ecma262/#sec-promise-constructor)

`Promise` 必须以 new 调用，即只能当作 constructor。

参数 executor 是一个函数。`Promise` 先运行 executor，之后返回一个 pending promise。如果 executor 运行出错，则返回一个 rejected promise。大概逻辑如下：

```js
function P(fn) {
  try {
    fn(value => _resolve(this, value), reason => _reject(this, reason))
  } catch (err) {
    _reject(this, err)
  }
}
var p = new P() // constructor 返回 instance
```

executor 有两个参数，都是函数

```js
function(resolve, reject) {}
```

这两个函数用于改变 promise 的状态，否则 promise 的状态始终是 pending, `.then()` 添加的回调也就不会运行。

### 实例方法

`.then()` 为 promise 添加回调

```js
.then(onFullfilled, onRejected)
```

根据 promise 的状态运行相应的回调，之后返回一个新的 promise。

`.catch()` 相当于

```js
.then(null, onRejected)
```

### 静态方法

`Promise.resolve()`

`Promise.reject()`

`Promise.all()`




## Errors

http://2ality.com/2016/04/unhandled-rejections.html

https://www.bennadel.com/blog/3228-always-throw-errors-in-order-to-get-a-stack-trace-in-promise-chains.htm

### unhandledrejection/rejectionhandled events

<http://caniuse.com/#feat=unhandledrejection>


## 资料

IE 不支持 Promise，可以用 [es6-promise](https://github.com/stefanpenner/es6-promise) 添加支持。

- [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)

Promise 规范为 Promises/A+，有[多种实现](https://github.com/promises-aplus/promises-spec/blob/master/implementations.md)。

[浏览器的实现](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
