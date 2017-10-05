---
permalink: /webapi/raf/
alias: raf
---

# requestAnimationFrame

```js
/**
 * 添加
 *
 * @param {Function} callback，一个实参 performance.now()
 * @return {Integer}
 */

window.requestAnimationFrame(callback)


/**
 * 删除
 *
 * @param {Integer} requestID
 */

window.cancelAnimationFrame(requestID)
```

60fps，每秒 60 帧，大约 17ms 一帧（1000 / 60）。


## 文章

- <https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-7>
