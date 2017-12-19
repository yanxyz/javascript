# Maps 和 Sets

ES6 引入四种新的数据结构：Map, WeakMap, Set, WeakSet。

## Map

`new Map(iterable)`

- `iterable.entries() => [key, value]`

```js
const map = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c']
])
```

object 的 keys 为 String 或 Symbol，map 的 keys 可以是任意类型。keys 唯一，采用 [SameValueZero](equality.md#samevaluezero) 判断相等。

map 默认的遍历方式是 `entries()`

```js
map[Symbol.iterator] === map.entries // true
for (const [key, value] of map) {
  console.log(key, value)
}
// 只遍历 keys
for (const key of map.keys()) {
  console.log(key)
}
```

`Map.prototype.forEach((value, key, map) => {}, thisArg)` 注意第一个参数为 value，这是为了和 Array.prototype.forEach 一致。

```js
map.forEach((value, key) => {
  console.log(key, value)
})
```

过滤

```js
const filteredMap = new Map(
    [...map] // 将 map 转为数组 [[k1, v1], [k2, v2], ...]
    .filter(([key, value]) => key < 3)
)
```

## WeakMap

WeakMap 是特殊的 Map, 不会阻止回收它的 keys，有下面限制

- key 必须是 object
- 不能迭代，只有这几个方法 get, set, has, delete

WeakMap 这些特点比较适合做 cache。

## Set

`new Set(iterable)`

- `iterable.values() => value`

```js
new Set(['foo', 'bar']) // {"foo", "bar"}
new Set('foo', 'bar') // {"f", "o"}，Set 只有一个参数，这种情况多半是上面的误写
```

Set 集合的元素唯一，采用 [SameValueZero](equality.md#samevaluezero) 判断相等。

数组去重

```js
const arr = [1, 1, 2]
const uniq = [...new Set(arr)]
```

### 集合运算

思路是将两个集合转为数组，对数组操作，然后创建新集合。

```js
const a = new Set([1,2,3]);
const b = new Set([4,3,2]);
```

并集 Union (a ∪ b)

```js
new Set([...a, ...b])
```

交集 Intersection (a ∩ b)

```js
new Set([...a].filter(x => b.has(x)))
```

差集 Difference (a - b)，属于 a 但不属于 b

```js
new Set([...a].filter(x => !b.has(x)))
```

## WeakSet

WeakSet 是特殊的 Set, 不会阻止回收它的元素，因此它的限制跟 WeakMap 类似

- 元素必须是 object
- 不能迭代，只有这几个方法 add, has, delete

## 参考

- <http://exploringjs.com/es6/ch_maps-sets.html>
