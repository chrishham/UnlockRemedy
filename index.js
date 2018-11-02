/* global alert, location, setTimeout */

(function () {
  let a = document.getElementById('arid_WIN_3_10000101')
  let saveBtn = document.getElementById('WIN_3_300000300')
  if (!a) return alert('Μπορεί να ξεκλειδώσει μόνο notes στο Apply το Production!')
  a.removeAttribute('readonly')
  let imageUrl = 'https://chrishham.github.io/remedy/images/Ninja'
  a.style['background-image'] = `url(${imageUrl})`
  a.style['background-size'] = 'contain'
  a.style['background-repeat'] = 'no-repeat'
  a.style['background-position-x'] = 'right'
  a.style['background-color'] = '#dbf1db'
  a.style['border-radius'] = '10px'
  a.style['padding-top'] = '10px'
  a.placeholder = 'Εισάγετε το νέο κείμενο και μετά πατήστε save...'
  alert('Επιτυχές ξεκλείδωμα notes!')
  saveBtn.addEventListener('click', () => {
    setTimeout(() => {
      console.log('i was clicked!')
      location.reload()
    }, 1000)
  })
}
)()
