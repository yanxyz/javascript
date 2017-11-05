# Wrapper objects

Boolean，Number, String 函数，以 new 调用时（此时它们是构造函数）生成对应的包装对象。

```js
var s = 'abc'
typeof s // "string"
s instanceof String // false


var s = new String('abc')
typeof s // "object"
s instanceof String // true
```


```js
var bool = new Boolean()
typeof bool // "object"

// if 语句期望一个 Boolean 值，JavaScript 引擎在这里自动转换类型
// Boolean(bool) 返回 true
if (bool) console.log('Hi') // "Hi",

// 因为 new Boolean() 的参数是 undefined, 所以 bool 对应的原始值是 false
// 二元运算符 +， bool 先转为原始值 false, 因为是和数字相加，所以再转为数字 0。
bool + 1 // 1

// 和字符串相加，则转为字符串。
"I'm " + bool // "I'm false"
```

这也是为什么它们作为原始值却可以如对象那样拥有属性和方法，JavaScript 引擎在背后自动装箱卸箱。实际应用中应当避免这种用法。

当直接调用它们时（此时它们是普通函数），是显式转换类型。

```js
var bool = Boolean()
typeof bool // "boolean"
if (bool) console.log('Hi') // 不打印
```

Symbol 不能以 new 调用，不能直接生成它的包装对象，使用 Object() 可以将它转为它的包装对象。

undefined, null 没有包装对象, 它们没有属性和方法：

```js
null.toString() // TypeError
```
