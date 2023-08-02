const bannerSlide = document.querySelector('.banner__div .swiper')

const slideWrap =  bannerSlide.querySelector('.swiper-wrapper')
const SlideKeys = Object.keys(slideImages)

SlideKeys.forEach(key => {
  const { name, backgroundColor } = slideImages[key]

  const div = document.createElement('div')
  const a = document.createElement('a')

  div.className = 'swiper-slide'
  a.style.display = 'block'
  a.style.backgroundColor = backgroundColor
  a.style.backgroundImage = `url('./imgs/${name}')`
  a.style.backgroundRepeat = 'no-repeat'
  a.style.backgroundPosition = 'top'
  a.style.backgroundSize = 'auto 100%'
  
  div.append(a)
  slideWrap.append(div)
})

const bannnerSwiper = new Swiper(bannerSlide, {
    // Optional parameters
    loop: true,
    effect: "fade",
    allowTouchMove: false,
    autoHeight: true,
    preventClicks: false,
    preloadImages: false,
    lazy: true,
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5e3
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    resizeObserver: true
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
})

const sideNavOpenBtn = document.querySelector('.side-nav__button--navi-open')
const sideNav = document.querySelector('.side-nav')
const sideNavCloseBtn = sideNav.querySelector('.close-btn')
const backdrop = document.querySelector('.backdrop')

function sideNavOpen () {
  sideNav.classList.add('open')
  backdrop.classList.add('open')
  document.documentElement.style.overflow = 'hidden'
}

function sideNavClose () {
  sideNav.classList.remove('open')
  backdrop.classList.remove('open')
  document.documentElement.style.overflow = 'initial'
}

sideNavOpenBtn.addEventListener('click', sideNavOpen)
sideNavCloseBtn.addEventListener('click', sideNavClose)
backdrop.addEventListener('click', sideNavClose)

// const dict = {
//   'A~Z': {
//     start: 'A',
//     end: 'Z',
//     list: []
//   },
//   'ㄱ~ㄹ': {
//     start: 'ㄱ',
//     end: 'ㄹ',
//     list: []
//   },
//   'ㅁ~ㅅ': {
//     start: 'ㅁ',
//     end: 'ㅅ',
//     list: []
//   },
//   'ㅇ~ㅈ': {
//     start: 'ㅇ',
//     end: 'ㅈ',
//     list: []
//   },
//   'ㅊ~ㅋ': {
//     start: 'ㅊ',
//     end: 'ㅋ',
//     list: []
//   },
//   'ㅌ~ㅎ': {
//     start: 'ㅌ',
//     end: 'ㅎ',
//     list: []
//   }
// }

// console.log(`ㄱ`.charCodeAt())

// games.forEach(string => {

//   const keys = Object.keys(dict)

//   for(let i = 0; i < keys.length; i++) {
//     const { start, end } = dict[keys[i]]
//     const reg = new RegExp(`[${start}-${end}]`)
    
//     console.log(string[0].charCodeAt())
//     if(reg.test(string[0])) {
//       dict[keys[i]].list.push(string)
//       break
//     }
//   }
// })

// console.log(dict)

window.onresize = function (e) {
  
}