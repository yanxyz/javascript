# JavaScript static 关键字

static 关键字为 class 声明静态方法，静态方法在 class 上而不是在 instance 上调用，比如 `Math.max()`。

在静态方法内 this 为 class; 在 constructor, method 内 this 为 instance，此时如何引用 class？

```js
class C {
  constructor() {
    console.log(this.constructor.s())
  }

  static s() {
    return 'hello'
  }
}

new C() // "hello"
```

如何为 class 添加静态属性？
