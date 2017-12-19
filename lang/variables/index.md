# 变量

变量声明语句:

- [var](var.md)
- [const 和 let](const-let.md)

## 未声明赋值

在非严格模式下，变量如果没有声明赋值（undeclared assignments），则创建全局对象的一个属性：

```js
a = 1
window.a // 1
```

严格模式下，变量要先声明才能使用。


## 参考

- <http://exploringjs.com/es6/ch_variables.html>
- <http://stackoverflow.com/questions/4862193/difference-between-variable-declaration-syntaxes-in-javascript-including-global>
