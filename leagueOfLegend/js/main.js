const headerLogo = document.querySelector('.header .logo')
const backdrop = document.querySelector('.backdrop')
const headerNavMenu = document.querySelector('.header-nav-menu')
const headerNavLogo = headerNavMenu.querySelector('.logo > a')
const headerNavClose = headerNavMenu.querySelector('.close > a')

headerLogo.addEventListener('click', e => {
    headerNavMenu.classList.add('active')
    backdrop.classList.add('active')
    document.documentElement.style.overflow = 'hidden'
})

headerNavLogo.addEventListener('click', e => {
    headerNavMenu.classList.remove('active')
    backdrop.classList.remove('active')
    document.documentElement.style.overflow = 'initial'
})

headerNavClose.addEventListener('click', e => {
    headerNavMenu.classList.remove('active')
    backdrop.classList.remove('active')
    document.documentElement.style.overflow = 'initial'
})

