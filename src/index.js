/* global setTimeout,location */
import 'nodelist-foreach-polyfill';
(function () {
  let readOnlys = document.querySelectorAll('[readonly]')

  readOnlys.forEach(el => {
    let cursorUrl = 'https://chrishham.github.io/remedy/images/key.cur'
    el.addEventListener('click', removeReadonly)
    el.style['cursor'] = `url('${cursorUrl}'),crosshair`
    let saveBtn = document.getElementById('WIN_3_300000300')
    saveBtn.addEventListener('click', () => {
      setTimeout(() => {
        console.log('i was clicked!')
        location.reload()
      }, 1000)
    })
  })
}
)()

function removeReadonly (event) {
  let a = event.target
  console.log(a)
  let imageUrl = 'https://chrishham.github.io/remedy/images/Ninja.jpg'
  a.removeAttribute('readonly')
  a.style['background-image'] = `url(${imageUrl})`
  a.style['background-size'] = 'contain'
  a.style['background-repeat'] = 'no-repeat'
  a.style['background-position-x'] = 'right'
  a.style['background-color'] = '#dbf1db'
  a.style['border-radius'] = '10px'
  a.style['padding-top'] = '10px'
}