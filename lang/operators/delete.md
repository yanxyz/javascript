# delete operator

delete operator 用于删除对象属性，只可以删除 own configurable property

```js
var o = { x: 1 }
delete o.x // true
o.x // undefined
```

看起来简单，实际有不少坑。

## 返回值

delete 在不能删除对象属性时返回 false，其它情况返回 true 或者抛出错误。返回 true，不代表删除成功。

```js
var f = function () {}
delete f.length // true
f.length // 0
```

删除不存在的属性返回 true

```js
var o = { x: 1 }
delete o.y // true
```

## 删除标识符

delete 变量、函数、函数参数，在非严格模式下返回 false, 严格模式下将抛出 SyntaxError。

在顶级域内以 `var` 声明的变量，同时也是全局对象的一个属性，但是不能用 delete 删除。

```js
var b = 2
window.b // 2
delete b // false
```

在全局作用域里声明的函数，同时是全局对象的一个属性，但是不能用 delete 删除。

```js
function add(x, y) {
  return x + y
}

typeof window.add // "function"
```

delete 可以删除 eval 声明的变量。

## 删除数组元素

delete 删除数组元素，数组 length 不变

```js
var arr = ['a', 'b', 'c']
delete arr[2]
arr.length // 3
arr[2] // undefined
```

## 参考

- <http://stackoverflow.com/questions/1596782/how-to-unset-a-javascript-variable>
- <http://perfectionkills.com/understanding-delete/>

