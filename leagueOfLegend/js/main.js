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
    bannerCanvasCtx.lineTo(0, bannerCanvas.height)
    bannerCanvasCtx.lineTo(0, 0)
    bannerCanvasCtx.stroke()
}

const observe = new ResizeObserver((e) => {
    // console.log(e)
    drawBannerCanvas ()
    backgroundCanvas ()
    newsDraw()
})
observe.observe(videoWrap)

drawBannerCanvas ()

function darwButtonLine () {
    const imageWrap = document.querySelector('.image-wrap')
    const button = document.querySelector('.image-wrap button')
    const canvas = imageWrap.querySelector('.image-wrap canvas')
    const ctx = canvas.getContext('2d')
    
    canvas.width = button.clientWidth + 10
    canvas.height = button.clientHeight + 10
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.strokeStyle = '#B2AEAB'
    ctx.lineWidth = 2
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    ctx.stroke()
}

darwButtonLine ()

function drawNewsLine(el) {
    const canvas = el.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = el.clientWidth - 10
    canvas.height = el.clientHeight 
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.strokeStyle = '#B2AEAB'
    ctx.lineWidth = 2

    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    ctx.stroke()
}

const newsWrapArticles = document.querySelectorAll('.news-wrap .middle article');

function newsDraw() {
    [...newsWrapArticles].forEach(el => {
        drawNewsLine(el)
    })
}

newsDraw()

// #051C24
function backgroundCanvas () {
    const el = document.querySelector('.champion .title')
    const canvas = el.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = el.clientWidth
    canvas.height = el.clientHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.fillStyle = '#051C24'
    ctx.moveTo(0, 0)
    ctx.lineTo(canvas.width - 16, 0)
    ctx.lineTo(canvas.width, 16)
    ctx.lineTo(canvas.width, canvas.height)
    ctx.lineTo(0, canvas.height)
    ctx.lineTo(0, 0)
    ctx.fill()
}

backgroundCanvas ()