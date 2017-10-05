# Property Descriptors

data property descriptors

- value
- writable，默认值为 false，不能修改 value
- enumerable，默认值为 false
- configurable ，默认值为 false，这个属性不能 delete，不能修改它的 descriptors

accessor property descriptors

- get，function
- set, function
- enumerable
- configurable

相关 methods

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
