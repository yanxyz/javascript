# timer

## setTimeout

```js
setTimeout(callback, [delay], [param...])
setTimeout(code, delay)

clearTimout(timeoutID)
```

Window 和 Worker 均可用。

setTimeout 返回一个整数，为 timeout id。

setTimeout 是在全局环境中调用 callback，注意 this 问题。

## setInterval

```js
setInterval(callback, delay, [param...])
setInterval(code, delay)

clearInterval(intervalID)
```

setInterval 每隔一段时间重复调用 callback，用法跟 setTimeout 类似。

