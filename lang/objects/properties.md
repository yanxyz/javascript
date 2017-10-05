# JavaScript 对象属性

访问对象属性有两种方式

```js
var obj = {
  a: 1
}

obj.a
obj['a']
```

点号只适用于键名是 String 并且符合标识符命名规则。

方括号适用于所有的情况，方括号内可以是表达式，计算结果为键名。


其它话题

- [Accessor Propeties](accessors.md)
- [Property Descriptors](property-descriptors.md)
- [遍历对象属性](property-enumeration.md)
