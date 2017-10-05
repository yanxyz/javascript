# 创建函数

创建函数有下面方式

- 函数声明语句 function declaration statement
- 函数表达式 function expression
- Function constructor

## 函数声明

```js
function f() {

}
```

与 var 变量声明类似

一，函数声明会提升（hostied）到作用域的开始位置。常常将辅助函数 helpers 放到文件末尾。

```js
console.log(add(1, 2)) // 3

function add(x, y) {
  return x + y
}
```

二，在全局作用域里声明的函数同时是全局对象的一个属性

```js
function add(x, y) {
  return x + y
}

typeof window.add // "function"
```

[参数](parameters.md)

函数如果没有 return 语句，则返回默认值：construcor 为 this, 其它函数为 undefined。


### return

return 陷阱

```js
function f() {
  return
    'a'
}
f() // undefined
```

返回值必须跟 return 同行。

## 函数表达式

函数表达式和函数声明在外观上一样，由词法上下文决定是哪种。函数表达式常用作子表达式或者函数参数。

函数表达式不会提升。

函数表达式可以省略名字，即匿名函数。下例将一个匿名函数赋值给一个变量。

```js
var t = function () {

}
```

如果不省略名字，名字只能在函数内部使用

```js
var t = function f() {
  return typeof f
}
typeof f // "undefined"
t() // "function"
```

### IIFE

即时调用函数 IIFE (immediately invoked function expression, pronounced “iffy”)

```js
;(function () {
  console.log('hello')
})()
```

## Function constructor

`new Function(arg1, arg2, ..., argN, functionBody)`

`functionBody` 为 String，该参数必选，其它参数可选。

在全局作用域内创建函数，不会创建闭包

```js
var x = 10

function createFunction() {
  var x = 20
  return new Function('return x;') // 引用全局 `x`
}

createFunction()() // 10
```

