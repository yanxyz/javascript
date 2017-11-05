# flags

flag | prop       |
-----| ----       |
'g'  | global     |
'i'  | ignoreCase |
'm'  | multiline  |
'y'  | sticky     |
'u'  | unicode    |
's'  | dotAll     |

`.flags` 属性返回所用的 flags

## sticky

与 'g' 类似，不同的是每次匹配从 lastIndex 开始。

## unicode

[unicode](../unicode.md)

## dotAll

`.` 匹配任意字符，包含 line terminators。

- [Specification](https://github.com/tc39/proposal-regexp-dotall-flag)
