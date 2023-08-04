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
      el: '.banner__div .swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        // console.log(index, className)
        // console.log(slideImages[SlideKeys[index]])
        return `
          <div class='${className}'>
            <div class="progressbar">
            </div>
            <p>
              ${SlideKeys[index]}
            </p>
            <h4>
              ${slideImages[SlideKeys[index]].content}
            </h4>
          </div>
        `
      },
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        const active = document.querySelector('.swiper-pagination-bullet-active')
        const activeProgress = active.querySelector('.progressbar')

        // activeProgress.style.setProperty("--progress", 1 - progress);
        // pr,ogressContent.textContent = `${Math.ceil(time / 1000)}s`;

        let value = 100 - ((1 - progress) * 100)
        activeProgress.style.transform = `translateX(-${value}%)`
      },
      slideChange(e) {
        const bullet = document.querySelectorAll('.banner__div .swiper-pagination-bullet')[e.activeIndex]

        const wrap = document.querySelector('.banner__div .swiper-pagination')
        const progressbars = wrap.querySelectorAll('.progressbar')

        progressbars.forEach(el => el.style.transform = `translateX(-100%)`)

        if(e.activeIndex > 4) {
          wrap.style.transform = `translate(-${bullet.clientWidth * (e.activeIndex - 4)}px)`
        }

        if(e.activeIndex < 5) {
          wrap.style.transform = `translate(-${bullet.clientWidth * 0}px)`
        }
      } 
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.banner__div .swiper-button-next',
      prevEl: '.banner__div .swiper-button-prev',
    },
    freeMode: true,
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

const recommendSwiper = document.querySelector('.recommend .swiper')
const recommendSwiperWrap = recommendSwiper.querySelector('.swiper-wrapper') 
const recommendLeftBtn = document.getElementById('recommend-left')
const recommendRightBtn = document.getElementById('recommend-right')

contentsSlideImages.forEach(info => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  const topDiv = document.createElement('div') 
  const bottomDiv = document.createElement('div')
  const pick = document.createElement('div')
  const title = document.createElement('div')

  const img = document.createElement('img')
  img.src = `./imgs/contents-slide/${info.imageName}`
  a.className = 'slide-content'
  img.className = 'game-img'

  topDiv.style.height = '192px'
  topDiv.style.overflow = 'hidden'
  
  bottomDiv.append(pick)
  bottomDiv.append(title)
  console.log(info)

  pick.className = 'recommend-item'
  pick.textContent = '추천'

  if(info.pick) {
    pick.className = 'recommend-item pick'
    pick.textContent = 'Pick'
  }

  title.textContent = info.name
  title.className = 'recommend-item-title'

  topDiv.append(img)
  a.append(topDiv)
  a.append(bottomDiv)

  li.className = 'swiper-slide'

  li.append(a)
  recommendSwiperWrap.append(li)
})

const recommendGamesSlide = new Swiper(recommendSwiper, {
  slidesPerView: 4,
  // Optional parameters
  allowTouchMove: false,
  autoHeight: true,
  preventClicks: false,
  preloadImages: false,
  lazy: true,
  fadeEffect: {
    crossFade: true
  },

  // Navigation arrows
  navigation: {
    nextEl: recommendLeftBtn,
    prevEl: recommendRightBtn
  },
  
  resizeObserver: true
})

window.onresize = function (e) {
  
}