# 提取子串

## slice

`.slice(start, end)`

两个参数都是可选。start 默认为 0，end 默认为 string.length。

start, end 可以是负值，表示从后向前的位置，位置为 pos + string.length，并落到 [0, string.length] 范围。

start >= end 时结果为空字符串。


## substring

`substring(start, end)`

两个参数都是可选。start 默认为 0，end 默认为 string length。

start, end 为负值或 NaN 时，变为 0；大于 string.length 时变为 string.length

start > end 时两者交换。

子串不包括 end 位置的字符。

## substr

substr 并不是标准方法，不过浏览器都实现了。

`substr(start, length)`

两个参数都是可选。start 默认为 0。length 默认为 +∞。

start 为负值时表示从后向前的位置。IE < 9 负值变为 0。

length 指定提取长度，可以是任意的值，不过子串的长度为实际得到的长度。
length <= 0 结果为空字符串
