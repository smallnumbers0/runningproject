document.getElementById('dark').onclick = darkMode

function darkMode() {
    document.querySelector('body').classList.toggle('dark-mode')
    document.querySelector('.content').classList.toggle('dark-content')
  }
