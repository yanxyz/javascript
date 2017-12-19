# Accessors

Object 除了 data properties 外，还有一种是 accessor properties，包含 getters 和 setters。

```js
const user = {
  // getter
  get name() {
    return this._name
  },

  // setter
  set name(value) {
    this._name = value
  }
}

user.name = 'Yan'
console.log(user.name)
```

Accessors 跟 functions 一样是 callable，看着跟 functions 也类似，不过是用关键字 get 和 set 声明。

Accessors 通常用一个私有属性作为 backend store。JavaScript 没有 private 修饰符，上例 `_name` 用 `_` 表示这是一个私有属性，这是一种命名惯例，不是真正的私有属性。

Accessors 也可以用 Object.defineProperty() 指定

```js
Object.defineProperty(user, 'name', {
  // 注意这里使用 object shorthand literal get 不是关键字，是函数的名字，
  get() {
    return this._name
  },

  // get: function () {
  //   return this._name
  // },

  set(value) {
    this._name = value
  }
})
```

- [Property getters and setters](http://javascript.info/property-accessors)

