# 0

0, +0, -0 三者[严格相等](../equality.md)。那么如何区分 +0 和 -0？

```js
Object.is(+0, -0)

function isNegativeZero(n) {
  return n === 0 && (1 / n < 0)
}
isNegativeZero(-0)
```
