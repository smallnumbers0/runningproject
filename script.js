document.getElementById('dark').onclick = darkMode

function darkMode() {
    document.querySelector('body').style.backgroundColor = 'rgb(32, 40, 38)'
    document.querySelector('body').style.color = 'white'
    document.querySelector('.content').style.backgroundColor = 'black'
}
