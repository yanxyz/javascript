# JavaScript scope

JavaScript scope 跟 **Execution Context** 相关。

## Execution Context

在每次调用函数时 interpreter 先创建一个 Execution Context，并将它放到 Execution Stack 最上面。然后执行函数代码。

在创建 Execution Context 时

- 初始化 scope chain
- 创建 variable object
  - 创建 arguments object
  - 扫描函数声明，添加到 variable object，若名字已存在则覆盖。
  - 扫描变量声明，添加到 variable object，若名字已存在，var 声明略过。let 和 const 不大一样，重复声明报错（TODO：let 和 const 是否添加到 variable object？）。
- 决定 this 的值

了解了上面知识，想一想下例的结果

```js
function bar() {
  return foo
  foo = 10
  function foo() {}
  var foo = 11
}
typeof bar() // ?
```

函数每次调用都创建一个 Execution Context。对于递归函数，资源占用大，容易导致 "Out of Stack Space" 错误。

```js
(function foo(i) {
  if (i === 3) {
    return
  }
  else {
    foo(++i)
  }
}(0));
```

![](/uploads/javascript/ec.gif)

## 资料

- [What is the Execution Context & Stack in JavaScript? ](http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/)

