# String.prototype.split

分割 string, 返回一个数组。

`.split ( separator, limit )`

两个参数都是可选的。

separator 可以是 String 或 Object。若 separator 是 undefined, 返回 `[string]`。

```js
'abc'.split() // ["abc"]
''.split()    // [""]
```

limit 限制结果数组的长度，在操作过程中当达到 limit 时返回结果数组。若 limit 为 0 则返回空数组。

```js
var str = 'abc'
str.split('b')     // ["a", "c"]
str.split('b', 1)  // ["a"]
str.split('b', 0)  // []
```

### separator 为 String

```js
var str = 'abc'
str.split('a')   // ["", "bc"]
str.split('b')   // ["a", "c"]
str.split('c')   // ["ab", ""]
str.split('abc') // ["", ""]
```

怎么理解呢？

```js
'abbc'.split('b') // ["a", "", "c"]

// 图解：ab|b|c
// slice(0, 1)
// slice(2, 2)
// slice(3)
// 注意 slice(start, end)，不包含 index end
```

若 separator 为空字符串

```js
'abc'.split('')  // ["a", "b", "c"]
''.split('')     // [] 结果数组不包含 separator
```

### separator 为 Object

Object 有 @@split 方法，比如 RegExp。

```js
var str = 'a  bc'
str.split(/\s/)   // ["a", "", "bc"]
str.split(/\s*/)  // ["a", "b", "c"]
str.split(/\s+/)  // ["a", "bc"]
```

当 RegExp 有捕获，则结果数组中包含捕获。把 separator 放到捕获中，这样就可以看清 separator

```js
'a  bc'.split(/(\s*)/)  // ["a", "  ", "b", "", "c"]
'abc'.split(/(abc)/) // ["", "abc", ""]
```

separator 为其它时，自动转为 String。

```js
'null'.split(null) // ['', '']
'123'.split(1) // ['', '23']
```
