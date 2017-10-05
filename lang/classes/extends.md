# Classes 继承

```js
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    // super() 调用父类的 constructor
    // 调用 super 之后才能使用 this
    super(x, y)
    this.color = color
  }

  toString() {
    // 使用父类的方法
    return super.toString() + ' in ' + this.color
  }
}

const cp = new ColorPoint(25, 8, 'green')
cp.toString() // '(25, 8) in green'
console.log(cp instanceof ColorPoint) // true
console.log(cp instanceof Point) // true
```

两条继承链：

- ColorPoint -> Point，以实现 static method 的继承
- ColorPoint.prototype -> Point.prototype

子类 constructor 可以省略，默认为

```js
constructor() {
  super()
}
```

super 为关键字

- 在 constructor 内，super() 调用父类的 constructor
- 在 method 内，super.method() 调用父类的 method
- 在 static method 内，super.method() 调用父类的 static method

当子类的方法覆盖了父类的方法时，this.method() 访问的是子类自己的方法，super.method() 可以访问父类的方法。
