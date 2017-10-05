# 数组

JavaScript 数组

- 只有索引数组，没有关联数组。
- 数组元素可以是任意类型。
- 数组是对象，可以添加属性和方法。

## 创建数组

```js
var a = [] // literal
var b = new Array() // constructor
```

Array constructor，有两种签名。只有一个数字参数时，表示数组长度，而不是数组元素。这比较容易导致错误，Array.of 消除了这种歧义，它的参数始终表示数组元素。

```js
new Array(10)       // length = 10
new Array(10, 100)  // length = 2
Array.of(10)        // length = 2
```

## length

数组 length 在增删元素时自动改变

```js
var a = ['hello']
a[99] = 'world'
console.log(a.length) // 100
```

length 也可写，效果是增删数组元素，不推荐这么做。

```js
a.length = 1
console.log(a)  // ['hello']
```

## 数组是对象

数组是对象，可以添加属性和方法。

```js
var a = []
a[-1] = -1
a['a'] = 'a'
console.log(a)
```

## 继续

- [遍历数组](loop.md)
- [Array-like object](array-like.md)
- [增删数组元素](push.md)
