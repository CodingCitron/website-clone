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

const videoWrap = document.querySelector('.banner-main .video-wrap')

function drawBannerCanvas () {
    const bannerCanvas = document.querySelector('.banner-main canvas')
    const bannerCanvasCtx = bannerCanvas.getContext('2d')
    bannerCanvasCtx.clearRect(0, 0, bannerCanvas.width, bannerCanvas.height)

    console.log(videoWrap.clientWidth)
    bannerCanvas.width = videoWrap.clientWidth - 16
    bannerCanvasCtx.beginPath()

    bannerCanvasCtx.strokeStyle = '#7E7E7E'
    bannerCanvasCtx.lineWidth = 2
    bannerCanvasCtx.moveTo(0, 0)
    bannerCanvasCtx.lineTo(bannerCanvas.width - 32, 0)
    bannerCanvasCtx.stroke()

    // bannerCanvasCtx.strokeStyle = '#ff0000'
    bannerCanvasCtx.beginPath()
    bannerCanvasCtx.lineWidth = 1
    bannerCanvasCtx.moveTo(bannerCanvas.width - 32, 0)
    bannerCanvasCtx.lineTo(bannerCanvas.width, 32)
    bannerCanvasCtx.stroke()

    bannerCanvasCtx.beginPath()
    bannerCanvasCtx.lineWidth = 2
    bannerCanvasCtx.moveTo(bannerCanvas.width, 32)
    bannerCanvasCtx.lineTo(bannerCanvas.width, bannerCanvas.height)

    bannerCanvasCtx.moveTo(bannerCanvas.width, bannerCanvas.height)
    bannerCanvasCtx.lineTo(0, bannerCanvas.height)

    bannerCanvasCtx.moveTo(0, bannerCanvas.height)
    bannerCanvasCtx.lineTo(0, 0)

    bannerCanvasCtx.stroke()
}

const observe = new ResizeObserver((e) => {
    // console.log(e)
    drawBannerCanvas ()
})
observe.observe(videoWrap)

drawBannerCanvas ()