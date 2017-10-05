# Classes

class 跟 function 相近

- class 声明
- class 表达式

## class declaration

```js
class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width
  }
}

const square = new Rectangle(10, 10)
console.log(square.area)
```

class body `{}` 跟 object literals 非常像，不同的是

- 只能放函数成员，如 constructor, methods, accessors
- 成员之间不能用 `,`，可以用 `;`
- class body 使用严格模式

class 跟 function 类似

```
typeof Rectangle  // 'function'
```

区别：

- class 必须用 new 调用
- class 声明没有提前。这是因为 `class SubClass extends SuperClass`, `extends` 后面可以是表达式，而表达式必须在原地解析。

## class expression

匿名 class 表达式

```js
const Rectangle = class {}
```

## class memebers

class 成员有 constructor, methods, accessors

### constructor

constructor 只能是普通函数，不能是 generator 等。

constructor 可以省略，默认为 `constructor() {}`

### method

method 不能用作 constructor function

## 接下来

- [static 关键字](static.md)
- [extends 关键字](extends.md)
