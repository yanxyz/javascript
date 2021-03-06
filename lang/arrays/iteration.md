# 遍历数组

## for 循环语句

for 虽然不如其它方法 cool，不过速度最快，可以使用 break, continue 等。

forwards，从前向后

```js
for (var i = 0; i < arr.length; ++i) {
  var item = arr[i]
}

// 每次循环不访问 length, 速度更快一些
for (var i = 0, len = arr.length; i < len; ++i) {
  var item = arr[i]
}
```

backwards，从后向前

```js
// 如果是 --i 会怎样？
for (var i = arr.length; i-- > 0;) {
  var item = arr[i]
}
```

[javascript - Why is iterating through an array backwards faster then forwards - Stack Overflow](https://stackoverflow.com/questions/8689573/)

## iterable

数组是 iterable, 可以使用

- for...of
- values(), keys(), entries()

```js
var arr = ['a', 'b', 'c']

// for...of 中 array 默认使用 .values()
for (const item of arr) {
  console.log(item)
}

for (const [index, value] of arr.entries()) {
  if (index > 1) break
  console.log(index + ': ' + value)
}
```

## forEach() 等方法

forEach() 不能 break，可以用 every(), some() 变通

reduce() 和 reduceRight() 相对不容易掌握，另外它们不指定 thisArg


## for...in

for...in 用于遍历对象属性，包含继承属性。

```js
var arr = ['a', 'b', 'c']
arr.foo = true
Array.prototype.bar = true
for (var key in arr) {
  console.log(key + ': ' + arr[key])
}
```

不要用 for...in 遍历数组元素。

## FAQ

### 如果是稀疏数组会怎样？

```js
var arr = ['a', 'b', 'c']
arr[25] = 'z'
console.log(arr.length)
```

遍历数组，通常不考虑稀疏数组

### 在遍历过程中修改数组会怎样？

每次循环都是实时的。
