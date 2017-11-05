# iterables 和 iterators

iterable protocol 和 iterator protocol

```
interface Iterable {
    [Symbol.iterator]() : Iterator;
}
interface Iterator {
    next() : IteratorResult;
}
interface IteratorResult {
    value: any;
    done: boolean;
}
```

iterable（可迭代对象）是有 Symbol.iterator 方法的对象。下面对象都是 iterable

- strings, arrays, maps, sets, arguments
- DOM NodeList
- jQuery, 自 ver 3.0 开始

iterable

- 用 for...of 遍历
- spread 操作符 `...iterable`
- 用作 Array.from, Promise.all, Map, Set 等的参数

```js
var elems = document.querySelectorAll('a')
typeof elems[Symbol.iterator] // "function"
// 转为数组
[...elems]
Array.from(elems)
```

iterator 遍历序列。iterator 的 next 方法没有参数，返回一个对象，包含两个属性

- value, 序列当前元素
- done, 布尔值，表示是否到达序列的结尾

怎么让自定义对象实现 iterable protocol? 自己实现或者用[生成器](generators)。
