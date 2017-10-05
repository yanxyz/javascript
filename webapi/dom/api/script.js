'use strict'

const MDN_DOCS = 'https://developer.mozilla.org/en-US/docs'

const $details = Array.from(document.querySelectorAll('details[data-mdn]'))
$details.forEach(el => {
  const value = el.dataset.mdn
  const arr = value.split('.')
  const name = arr[arr.length - 1]
  const child = el.firstElementChild
  const html = child.innerHTML.replace(name, '<b>$&</b>')
  child.innerHTML = `<a href="${MDN_DOCS}/Web/API/${arr.join('/')}">${html}</a>`
})

Array.from(document.querySelectorAll('a[data-mdn]'))
  .forEach(a => {
    const value = a.dataset.mdn
    const str = value.split('.').join('/')
    a.href = `${MDN_DOCS}/Web/API/${str}`
  })

document.getElementById('select').addEventListener('change', e => {
  const value = e.target.value
  const force = value !== 'all'
  let el = document.querySelector('h2')
  while ((el = el.nextElementSibling)) {
    const tagName = el.tagName.toLowerCase()
    if (tagName === 'h2') continue
    el.classList.toggle('hide', force && !el.classList.contains(value))
  }
})
