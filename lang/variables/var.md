# var

以 `var` 声明的变量

声明提前（hosited）

```js
function func() {
  // 声明提前，不会出现 ReferenceError；初始化不会提前
  console.log(tmp) // undefined
  var tmp = 123
  console.log(tmp) // 123
}

// 相当于
function func() {
  var tmp
  console.log(tmp) // undefined
  tmp = 123
  console.log(tmp) // 123
}
```

没有块作用域（块语句没有作用域）

```js
function func() {
  if (true) {
    var tmp = 123
  }
  console.log(tmp) // 123
}
```

在同一作用域内可以重复声明。

在顶级域内以 `var` 声明的变量，同时也是全局对象的一个属性。

```js
var b = 2
window.b // 2
```
