# 数据类型

JavaScript 有 6 个原始类型和 1 个引用类型。

原始类型


| 类型      | 真值              | 假值                     |
| --------- | ---------------- | ------------------------ |
| Undefined |                  | undefined                |
| Null      |                  | null                     |
| Boolean   | true             | false             |
| Number    | 例如 1，Infinity  | 0, +0, -0, NaN    |
| String    | 例如 "hello"      | 空字符串 ""  '',   |
| Symbol    | 都是真值          |                   |

Undefined 和 Null 类型都是只有一个值。变量如果没有初始化，它的值是 undefined。

引用类型 Object, 例如 objects, functions, arrays 等。它们都是真值，即使是空的

```js
!![] // true
Boolean({}) // true
```

- [类型转换](conversion.md)
- [类型判断](is.md)
- [Wrapper objects](wrapper.md)

## 资料

- [JavaScript data types and data structures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
