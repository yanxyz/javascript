# 算术操作符

## 递增递减

[Postfix Increment Operator](https://tc39.github.io/ecma262/#sec-postfix-increment-operator)

递增

- 前递增（prefix increment）， `++` 在 operand 前面，operand 加 1 后返回新值
- 后递增（postfix increment），`++` 在 operand 后面，operand 加 1 后返回旧值

递减 `--` 同理。

想一想下面表达式的值

```js
var x = 3
console.log(++x)  // ?
console.log(x++)  // ?

x = 3
var y = ++x+x
console.log(y)  // ?

x = 3
var z = x+++x
console.log(z)  // ?
```

[注意它们的优先级](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)。下面是脑筋急转弯（给自己和同伴挖坑）

```js
var x = 3
console.log(x+++x---++x)  // ?
```

## Exponentiation

指数操作符 `**`

```js
3 ** 2 // 9
Math.pow(3, 2)
```

指数操作符是右结合

```js
2 ** 3 ** 2 // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64
```

base(左操作数) 前面不能使用一元操作符，`++` 和 `--` 除外。

```js
-2 ** 3 // Error
```

`-` 是用于 `2` 还是 `2 ** 3` 的结果？使用括号消除这个歧义。

```js
(-2) ** 3
-(2 ** 3)
```

## 测试

```js
"1" - - "1" // ?
```

