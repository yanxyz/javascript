# spread 和 rest 操作符

spread 和 rest operator 都是 `...`，如何区分？

## spread operator

spread 操作符 `...iterable`

```js
var chars = [...'abc']
```

有些函数的参数的数量不限，这时 `apply()` 一定程度上可以模拟 spread 操作符

```js
var arr = [1, 5, 3]
Math.max.apply(null, arr) // 5
Math.max(...arr) // 5
Math.max(7, ...arr, 11) // 11
```

`apply()` 不能用于 constructor

```js
new Date(...[2011, 11, 24])
```

## rest operator

rest operator 用在 destructuring array pattern 中收集数据，显然只能放在 pattern 最后。

```js
var [x, ...y] = ['a', 'b', 'c']

function f(x, ...y) {
  console.log(y)
}
f('a', 'b', 'c')
```

## 资料

- <http://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator>

