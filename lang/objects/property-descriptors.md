# Property Descriptors

## data property descriptors

```js
var obj = {}
Object.defineProperty(obj, 'a', { value: 1 })
Object.getOwnPropertyDescriptor(obj, 'a')
// {value: 1, writable: false, enumerable: false, configurable: false}
```

- value
- writable，默认值为 false，这时属性为只读
- enumerable，默认值为 false，[遍历对象属性](enumeration.md)
- configurable ，默认值为 false，这时
  - 不能修改属性的 descriptors，再次调用 `Object.defineProperty()` 报错
  - 不能被删除（[delete operator](../operators/delete.md))，在严格模式下报错

## accessor property descriptors

- get，function
- set, function
- enumerable
- configurable

## 相关 methods

- Object.defineProperty()
- Object.defineProperties()
- Object.getOwnPropertyDescriptor
- Object.getOwnPropertyDescriptors

```js
var a = { t: 't' }
console.log(Object.getOwnPropertyDescriptor(a, 't'))

var b = {}
Object.defineProperty(b, 't', { value: 't' })
console.log(Object.getOwnPropertyDescriptor(b, 't'))
```

一旦将 configurable 设为 false，将不能再修改 descriptors。built-in objects 的 properties 通常是 Non-configurable。

```js
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))
```

其它 methods

- Object.preventExtensions()，不能添加属性
- Object.isExtensible()
- Object.seal()，不能添加/删除属性，设置已有属性 configurable: false
- Object.isSealed()
- Object.freeze()，不能添加/删除/修改属性，设置已有属性 configurable: false，writable: false
- Object.isFrozen()

## 示例

- <https://github.com/nodejs/node/blob/master/lib/internal/errors.js#L27>

## 资料

- [define-properties](https://github.com/ljharb/define-properties)
