// START Darkmode
window.toggleDarkmode = function () {
  var darkmodeButton = document.getElementById('darkmode-toggle')
  var html = document.querySelector('html')
  if (!window.darkmode) {
    window.localStorage && window.localStorage.setItem('darkmode', true)
    html.classList.add('darkmode')
    darkmodeButton.setAttribute("aria-pressed", "true")
    window.darkmode = true
  } else {
    window.localStorage && window.localStorage.removeItem('darkmode')
    html.classList.remove('darkmode')
    darkmodeButton.setAttribute("aria-pressed", "false")
    window.darkmode = false
  }
}

if (window.localStorage && window.localStorage.getItem('darkmode')) {
  document.querySelector('html').classList.add('darkmode')
  document.getElementById('darkmode-toggle').setAttribute("aria-pressed", "true")
  window.darkmode = true
}
// END Darkmode