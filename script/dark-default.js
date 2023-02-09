const mode = document.getElementById('mode-icon')

mode.addEventListener('click', () => {
    const body = document.getElementById('body')
    const head = document.getElementById('inicio')
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
        head.classList.add('dark')
        body.style.background= 'rgb(0, 0, 0)'
        return;
    }
    mode.classList.add('fa-moon')
    head.classList.remove('dark')
    body.style.background = 'rgb(235, 233, 233)'
})