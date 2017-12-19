# 遍历对象属性

对象属性有这些方面

- type: String, Symbol
- ownership: Own, Inherited
- enumerability: Enumerable, Nonenumerable

method | Symbol | Nonenumerable | Inherited
------ | ------ | ------------- | ----------
`Object.keys()` <br> `Object.values()` <br> `Object.entries()`  | - | - | -
`.hasOwnProperty()` | Y | Y | -
`.propertyIsEnumerable()` | Y | Y | -
`Object.getOwnPropertyNames()`    | - | Y | -
`Object.getOwnPropertySymbols()`  | Y | Y | -
`Object.getOwnPropertyDescriptor()`  | Y | Y | -
`Object.getOwnPropertyDescriptors()` | Y | Y | -
`Reflect.ownKeys()` | Y | Y | -
`for...in`    | - | - | Y
`in` operator | Y | Y | Y

名字中包含 `Own` 的方法只处理自身属性。

`.propertyIsEnumerable()` 判断属性是否可以枚举

- 对于自身 nonenumerable 属性自然返回 false。
- 对于原型链上的属性，不考虑，返回 false。

## 参考

- [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)

