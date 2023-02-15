document.getElementById('dark').onclick = darkMode
document.getElementById('light').onclick = lightMode

function darkMode() {
    document.querySelector('body').style.backgroundColor = 'rgb(32, 40, 38)'
    document.querySelector('body').style.color = 'white'
    document.querySelector('.content').style.backgroundColor = 'black'
}

function lightMode() {
    document.querySelector('body').style.backgroundColor = 'rgb(117, 188, 170)'
    document.querySelector('body').style.color = 'black'
    document.querySelector('.content').style.backgroundColor = 'honeydew'
}
