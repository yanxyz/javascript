/**
 * 根据 pathname 创建 crumbs
 */
function crumbs() {
  const pathname = location.pathname
  const indexPage = 'index.html'
  const homeLink = document.getElementById('home-link')
  const siteBaseUrl = homeLink.getAttribute('href')
  if (pathname === siteBaseUrl) return

  const parts = pathname.slice(siteBaseUrl.length).split('/')

  // 删除末尾的 '/' 及 'index.html'
  let arr
  for (let i = parts.length; i-- > 0;) {
    const p = parts[i]
    if (!p || p === indexPage) continue
    arr = parts.slice(0, i + 1)
    break
  }

  const len = arr.length
  if (!arr.length) return

  const fragment = document.createDocumentFragment()
  fragment.appendChild(homeLink)
  createSeparator()
  const n = len - 1
  let href = siteBaseUrl
  for (let i = 0; i < n; i++) {
    const p = parts[i]
    if (!p) continue // 跳过连续的 '/'
    href += `${p}/`
    create(p, href)
  }
  createLastItem(arr[n])
  // 为了消除空白，重写 container contents
  const container = document.getElementById('site-crumbs')
  container.textContent = ''
  container.appendChild(fragment)

  function create(text, href) {
    const a = document.createElement('a')
    a.textContent = text
    a.href = href
    fragment.appendChild(a)
    createSeparator()
  }

  function createSeparator() {
    const span = document.createElement('span')
    span.className = 'separator'
    span.textContent = '/'
    fragment.appendChild(span)
  }

  function createLastItem(text) {
    const span = document.createElement('span')
    span.textContent = text
    fragment.appendChild(span)
  }
}

crumbs()

/**
 * 外部链接图标
 */

document.getElementById('site-main').querySelectorAll('a').forEach(a => {
  if (a.host !== location.host && !a.querySelector('img')) {
    a.insertAdjacentHTML('afterBegin', '<svg aria-hidden="true" class="octicon octicon-link-external" width="14" height="14"><use xlink:href="#octicon-link-external"></use></svg>')
  }
})

/**
 * 标题锚点
 */

function addAnchors() {
  const reH = /^H[2-4]$/
  Array.from(document.querySelector('.markdown-body').children).forEach(el => {
    if (reH.test(el.tagName)) {
      const id = el.id
      if (!id || el.childElementCount) return

      el.innerHTML = `<a href="#${id}" class="anchor" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" width="14" height="14"><use xlink:href="#octicon-link"></use></svg></a>` + el.textContent
    }
  })
}

/**
 * 快捷键
 */

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) return

  // 't' goto top
  if (event.code === 'KeyT') {
    document.documentElement.scrollTop = 0;
  }

  // 'h' go home
  if (event.code === 'KeyH') {
    document.getElementById('home-link').click()
  }
})
