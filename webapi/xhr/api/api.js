'use strict'

const MDN = 'https://developer.mozilla.org/en-US/docs/Web/API'
const $details = Array.from(document.querySelectorAll('details'))
$details.forEach(el => {
  const code = el.querySelector(':scope > summary > code')
  if (!code) return

  const a = document.createElement('a')
  let text = code.textContent
  let href
  if (el.classList.contains('progressevent')) {
    href = MDN + '/XMLHttpRequestEventTarget/' + text
  } else {
    href =  MDN + '/XMLHttpRequest/' + text.slice(0, text.indexOf('('))
  }
  a.href = href

  code.parentElement.append(a)
  a.append(code)
})

