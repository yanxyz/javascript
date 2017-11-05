

[CSS Object Model (CSSOM) Specification](https://drafts.csswg.org/cssom/)

### element.style

```js
element.style.display = 'none'
```

### document.styleSheets

```js
var sheets = document.styleSheets // StyleSheetList
var sheet = sheets[0] // CSSStyleSheet
var rules = sheet.cssRules // CSSRuleList
var rule = sheet.cssRules[0] // CSSStyleRule, CSSMediaRule...
var style = rule.style // CSSStyleDeclaration
```


### window.getComputedStyle()

window.getComputedStyle() => CSSStyleDeclaration
