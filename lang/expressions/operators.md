# 操作符

[操作符优先级](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


- [算术操作符](arithmetic.md)
- [比较](comparisons.md)

## 逗号操作符

从左到右计算 operands，返回最后一个 operands 的值。

最常见的地方是 for loop

```js
var arr = ['a', 'b', 'c']
for (var i = 0, len = arr.length; i < len; i++) {
  console.log(i)
}
```
