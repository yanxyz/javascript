# 闭包

JavaScript 使用词法作用域，作用域由源码的位置决定，而不是由运行时的位置决定（动态作用域）。

```js
var value = 1 // A

function foo() {
  console.log(value)
}

function bar() {
  var value = 2 // B
  foo()
}

bar()
```

闭包名字来源于，函数的词法作用域**包住**了自由变量（不是函数的参数或内部变量）。

在实践中，因为闭包，内部函数在外部函数之外调用时，仍然可以访问外部函数内部的变量。内部函数在外部函数之外调用有多种方式

- 外部函数返回内部函数
- 内部函数赋值给外部函数之外的变量，比如全局变量

```js
function makeAdder(x) {
  // 通过闭包访问 x
  return function (y) {
    return x + y
  }
}

// 创建两个闭包
var add5 = makeAdder(5)
var add10 = makeAdder(10)

console.log(add5(2))  // 7
console.log(add10(2)) // 12
```

JavaScript 没有访问修饰符，可以借助闭包保护私有数据

```js
var makeCounter = function() {
  var _count = 0 // 私有数据，外界不能直接访问
  function changeBy(val) {
    _count += val
  }
  // 下面三个函数共享 `_count`
  return {
    increment: function() {
      changeBy(1)
    },
    decrement: function() {
      changeBy(-1)
    },
    get value() {
      return _count
    }
  }
}

var counter1 = makeCounter()
counter1.increment()
console.log(counter1.value) // 1

var counter2 = makeCounter()
console.log(counter2.value) // 0
```

在循环语句当中留意闭包

```js
var arr = []
for (var i = 0; i < 3; i++) {
  arr.push(function () {
    return i
  })
}
console.log(arr[0]()) // A
```

arr 中所有的函数实际共享 `i`，返回值一样。当运行到 A 行时 `i` 为 `3`，所以打印结果为 `3`。解决思路是不让这些函数共享 `i`

方法一

```js
var arr = []
for (var i = 0; i < 3; i++) {
  (function () {
    var j = i
    arr.push(function () {
      return j
    })
  })()
}
console.log(arr[0]()) // ?
```

方法二

```js
var arr = []
for (let i = 0; i < 3; i++) {
  arr.push(function () {
    return i
  })
}
console.log(arr[0]()) // A
```

使用 `let` 声明变量 `i`，每次循环重新绑定，函数不会共享 `i`。

## 参考

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures>
