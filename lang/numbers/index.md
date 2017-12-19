# 数字

JavaScript 只有一个数字类型 number，不区分 integer 和 float。
所有的数字都按 IEEE 754 double 标准实现。注意小数计算会有问题：

```js
0.1 + 0.2 === 0.3 // false
```

- [literals](literals.md)
- [0](zero.md)
- [NaN](nan.md)
- [Infinity](infinity.md)
- 2e64
- Math.PI

## API

Number 的 API 不多。

- [将其它类型转为 Number](conversion.md)
