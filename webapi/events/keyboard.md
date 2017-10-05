# Keyboard Events

接口为 KeyboardEvent，有下面 events

- keydown
- keyup

props

- ctrlKey, shiftKey, altKey, metaKey
- code, 物理按键名字，不受 keyboard layout 或 modifier state 的影响
- key
- keyCode, 非标准属性

在设置快捷键时，应当用哪个属性，code, key, keyCode?

- [VSCode Keybindings](https://github.com/Microsoft/vscode/wiki/Keybindings)

[dead key](https://en.wikipedia.org/wiki/Dead_key) 是一种特别的 modifier key，用来输入注音字符。假设 dead key 是 '\`'（不同的 input layout，dead key 不一样），法语字母 à 这样输入：先按下 \`，松开后再按下 A。这跟 shift 等  modifier key 不一样。shift 是和其它键同时按下。为何叫这个名字？在过去，当按下 dead key 时没有反馈，这个 key 像 dead 一样。

## 资料

- [Spec](https://w3c.github.io/uievents/#events-keyboardevents)
