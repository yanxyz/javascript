# plus

## 一元操作符

一元操作符 `+`， 将 oprand 转为 number。

```js
+true // 1
+new Date(1) // 1
```

## 二元操作符

二元操作符 `+`，有两种意思：拼接字符串或者数字加法。

- 当两个 oprands 都是 string 或 number，结果显而易见。
- 当两个 oprands 的类型不一样时会转换类型，先将两个操作数 ToPrimitive（没有提供 hint）转为原始值 primValue，
  - 如果两个 primValue 都是 string 或 number，结果显而易见。
  - 如果其中一个 primValue 是 string，则将另一个 primValue 转为 string，然后拼接两个 string。
  - 如果两个 primValue 都不是 string，则将两者转为 number，然后两者相加。

想一想下面这些表达式的值是多少？

```js
'1' + 1
1 + 1
true + false
null + null
null + undefined
```

[`ToPrimitive()`](../data-types/conversion.md#ToPrimitive), Date objects 优先尝试 `.toString()`，其它 objects 优先尝试 `.valueOf()`

```js
var d = new Date(1)
d + d
d + 1
d - 1
```

Arrays

```js
[] + 1
[1] + 1
[1, 2] + 1
```
