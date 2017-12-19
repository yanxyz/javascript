# 正则表达式 patterns

基本用法见 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## Captures

```js
const pattern = /(\d{4})-(\d{2})-(\d{2})/
pattern.exec('2017-07-10')
```

### Named captures

`(?<name>)`

```js
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
pattern.exec('2017-07-10')
```

Named backreferences

```js
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
pattern.exec('2017-07-10')
```

String.prototype.replace

```js
const pattern = /(?<first>a)(?<second>b)/
'ab'.replace(pattern, '$<second>$<first>') // 'ba'
'ab'.replace(pattern, (m, p1, p2, o, s, {first, second}) => fst + snd)) // 'ba'
```

[chromestatus](https://www.chromestatus.com/features/5653365786673152)

## Lookarounds assertions

lookahead assertions

https://github.com/tc39/proposal-regexp-lookbehind


## 资料

- [Regular Expressions in a post-ES6 world](https://ponyfoo.com/articles/regular-expressions-post-es6)
- [Upcoming Regular Expression Features](https://developers.google.com/web/updates/2017/07/upcoming-regexp-features)
