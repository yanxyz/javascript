# 数字

JavaScript 只有一个数字类型 number，不区分 integer 和 float。所有的数字都按 IEEE 754 double 标准实现。注意小数计算会有问题：

```js
0.1 + 0.2 === 0.3 // false
```

- [literals](literals.md)
- [NaN](nan.md)
- Infinity 无穷大，-Infinity 负无穷大（这里 "-" ）
- 2e64
- Math.PI

### 0

0, +0, -0 三者严格相等，[见这里](../equality.md)。如何区分 +0 和 -0？

```js
Object.is(+0, -0)

function isNegativeZero(n) {
  return n === 0 && (1 / n < 0)
}
isNegativeZero(-0)
```

### Infinity

```js
1 / 0 // Infinity
1 / -0 // -Infinity
0 / 0 // NaN
```

- Number.POSITIVE_INFINITY
- Number.NEGATIVE_INFINITY
- Number.isFinite()


