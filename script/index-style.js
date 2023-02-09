const mode = document.getElementById('mode-icon')

mode.addEventListener('click', () => {
    const form = document.getElementById('sobre')
    const head = document.getElementById('inicio')
    const contato = document.getElementById('contato')
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
        form.classList.add('dark')
        head.classList.add('dark')
        contato.classList.add('dark')
        return;
    }
    mode.classList.add('fa-moon')
    mode.classList.remove('fa-sun')
    form.classList.remove('dark')
    head.classList.remove('dark')
    contato.classList.remove('dark')
})