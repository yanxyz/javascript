# JavaScript this

this 是关键字，不是变量，不能给 this 赋值。

## this 的值

JavaScript 引擎在执行函数（包含 methods, classes）等时，会创建执行环境，this 绑定到这个执行环境。
也就是说，this 是动态绑定的，同一个函数，调用环境不一样，它的 this 可能就不一样。

### 全局环境

全局环境中 this 为 [global object](global.md)。

### 函数

函数内 this，非严格模式下为 global object，严格模式下为 undefined。

箭头函数没有 this, 它内部的 this 是它外部的 this。

### 方法

在 object method 内 this 为 method 的 object。问题常出现在这里。

第一个问题：方法的内部函数的 this 不是 method 的 object，而是它自己的，见上面“函数”。

```js
'use strict'

var o = {
  m: function () {
    // this 为 o
    function f() {
      // 严格模式下 this 为 undefined
    }
  }
}
```

第二个问题，方法以函数的方式调用，this 不再是 method 的 object，而是函数的 this。

下例计算两个 sets 的交集

```js
const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
[...a].filter(b.has)
```

```js
var $ = document.querySelector
$('.test') // TypeError: Illegal invocation
```

方法调用 `o.f()`, 用到了两个操作符 `.` 和 `()`。如果把方法提出来，然后像函数一样调用：

```js
var m = o.m
m()

setTimeout(o.m, 10)

btn.onclick = o.m
```

#### 参考

<http://speakingjs.com/es5/ch17.html>

- Pitfall: Losing this When Extracting a Method
- Pitfall: Functions Inside Methods Shadow this

### 构造函数

在 constructor 中，this 为 instance。

## 指定 this

一些函数可以指定 this

- call, apply, bind
- 数组的几个方法：forEach, map, filter, some, every 等

browser event handler 默认将 this 绑定到 event.currentTarget。

library API 也可能指定 this，比如 jQuery。
