# Keyboard Events

接口为 KeyboardEvent，有下面 events

- keydown，按下键
- keyup，松开键
- keypress

## Attributes

```js
{
  ctrlKey: false,
  shiftKey: false,
  altKey: false,
  metaKey: false,
  code: '',
  key: '',
}
```

modifier keys

key      | Windows | macOS
-------- | ------- | ---------
ctrlKey  | Ctrl    | Control ⌃
shiftKey | Shift   | Shift ⇧
altKey   | Alt     | Option ⌥
metaKey  | ⊞       | Command ⌘

code, 物理按键名字，不考虑 keyboard layout, locale, modifier keys，即不管按键输出的字符是什么。

key，与 code 相反，表示按键输出的字符。

还有 keyCode, charCode, which 等非标准属性，用得最多的是 keyCode。
jQuery 把它们标准化为 which。

keyCode

- <http://keycode.info/> [source](https://github.com/wesbos/keycodes)
- <https://github.com/kabirbaidhya/keycode-js>

## 问题

测试

- [Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html)

### code, key, keyCode 用哪个？

用标准属性 code 和 key

- [What’s New with KeyboardEvents? Keys and Codes! - Google Developers](https://developers.google.com/web/updates/2016/04/keyboardevent-keys-codes)

快捷键通常用 code

- [VSCode Keybindings](https://github.com/Microsoft/vscode/wiki/Keybindings)

[dead key](https://en.wikipedia.org/wiki/Dead_key) 是一种特别的 modifier key，用来输入注音字符。假设 dead key 是 '\`'（不同的 input layout，dead key 不一样），法语字母 à 这样输入：先按下 \`，松开后再按下 A。这跟 shift 等 modifier key 不一样，shift 是和其它键同时按下。为何叫这个名字？在过去，当按下 dead key 时没有反馈，这个 key 像 dead 一样。

### Keyboard 三个 events 的发生顺序

细分为

- 短按，只按一下。
- 长按，按住一会儿再松开。 keydown, keypress 重复发生，最后是 keyup。

不出预料会存在兼容性问题。

## 资料

- [Spec](https://w3c.github.io/uievents/#events-keyboardevents)
