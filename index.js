/* global alert, location, setTimeout */

(function () {
  let notes = document.getElementById('arid_WIN_3_10000101')
  let summary = document.getElementById('arid_WIN_3_8')
  if (!notes) return alert('Δεν μπορεί να ξεκλειδώσει τα πάντα!')
  unlock(notes)
  unlock(summary)
  let saveBtn = document.getElementById('WIN_3_300000300')
  saveBtn.addEventListener('click', function () {
    setTimeout(() => {
      console.log('i was clicked!')
      location.reload()
    }, 1000)
  })
}
)()

function unlock (a) {
  let imageUrl = 'https://chrishham.github.io/remedy/images/Ninja.jpg'
  a.removeAttribute('readonly')
  a.style['background-image'] = `url(${imageUrl})`
  a.style['background-size'] = 'contain'
  a.style['background-repeat'] = 'no-repeat'
  a.style['background-position-x'] = 'right'
  a.style['background-color'] = '#dbf1db'
  a.style['border-radius'] = '10px'
  a.style['padding-top'] = '10px'
  a.placeholder = 'Εισάγετε το νέο κείμενο και μετά πατήστε save...'
}
