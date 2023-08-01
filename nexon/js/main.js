
const bannerSlide = document.querySelector('.banner__div .swiper')
const slideImgs = 'qwam04142644720.jpg,mmPD26190400925.jpg,OgwX26132656493.png,zGLe19201342335.jpg,IFIh24201003979.png,9wMF27110625159.png,Mojq27144929137.png,a2Ca31133604697.jpg'.split(',')

const slideWrap =  bannerSlide.querySelector('.swiper-wrapper')
slideWrap.style.height = `560px`

slideImgs.forEach(img => {
  const div = document.createElement('div')
  div.className = 'swiper-slide'
  div.style.height = '100%'
  div.style.backgroundImage = `url('./imgs/${img}')`
  div.style.backgroundRepeat = 'no-repeat'
  div.style.backgroundPosition = 'top'
  div.style.backgroundSize = 'auto 100%'
  div.style.backgroundAttachment = 'contain'

  slideWrap.append(div)
})

const bannnerSwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
})

window.onresize = function (e) {
  
}