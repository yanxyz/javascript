# Comparisons

[相等判断](../equality.md)

## 不等判断

`<`, `<=`, `>`, `>=` 都是使用 [Abstract Relational Comparison](https://tc39.github.io/ecma262/#sec-abstract-relational-comparison)，先转换两边 oparands 的类型 ToPrimitive(arg, hint Number)，然后比较。

下面表达式都是 false

```js
'B' > 'a'
'23' > '3'

null <= undefined
```
