# 变量

变量声明语句:

- [var](var.md)
- [const 和 let](const-let.md)

## 未声明赋值

在非严格模式下，变量如果没有声明赋值（undeclared assignments），则创建全局对象的一个属性：

```js
a = 1
window.a // 1
delete a // true
```

严格模式下，变量要先声明才能使用。

## loop

const 的问题


在讲到闭包时，常常列举下面例子

```js
var arr = []
for (var i = 0; i < 3; i++) {
  arr.push(() => i)
}
arr.map(x => x()) // ？
```

let, const 在每次循环时重新绑定

```js
var arr = []
for (let i = 0; i < 3; i++) {
  arr.push(() => i)
}
arr.map(x => x()) // ？
```


## 参考

- <http://exploringjs.com/es6/ch_variables.html>
- <http://stackoverflow.com/questions/4862193/difference-between-variable-declaration-syntaxes-in-javascript-including-global>
