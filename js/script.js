$(function () {

  //ページ内スクロール
  let $nav = $(".gnav");
  let offset = $nav.offset();
  let navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップへもどる
  scrollTop("js-page-top",250);
  
  function scrollTop(elem,duration){
    let target = document.getElementById(elem);
    target.addEventListener("click",function(){
      let currentY = window.pageYOffset;
      let step = duration/currentY > 1 ? 10 : 100;
      let timeStep = duration/currentY * step;
      let intervalID = setInterval(scrollUp,timeStep);

      function scrollUp(){
        currentY = window.pageYOffset;
        if(currentY === 0){
          clearInterval(intervalID);
        }else{
          scrollBy(0,-step);
        }
      }
    });
  }
/* ページトップをフワッと表示させるJSライブラリ*/
  ScrollReveal().reveal('.headline-1');
  ScrollReveal().reveal('.headline-2',{delay: 500});
  ScrollReveal().reveal('.headline-3',{delay: 800});
  ScrollReveal().reveal('.gnav-item',{delay: 1200});
  ScrollReveal().reveal('.wrapper',{delay: 0});
});

$(function () {
  let scrollElem = document.querySelectorAll('.animate');
  let scrollAnimation = function() {
    for(let i = 0; i < scrollElem.length; i++) {
      let trigger = 700;
      if (innerHeight > scrollElem[i].getBoundingClientRect().top + trigger) {
        scrollElem[i].classList.add('is-show');
      }
    }
  }
  addEventListener('load', scrollAnimation);
  addEventListener('scroll', scrollAnimation);
})

$(function () {
  let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 600,
    slidePerview: 4,
    effect: 'flip',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    pagenation:{
      el: '.swiper-pagination',
      type:'bullets',
    },
  });
})

{
  function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
  };

  document.getElementById('target').addEventListener('click', function () {
    hamburger();
  });

  let list = document.getElementsByClassName('gnav');

  for (let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function () {
    hamburger();
  });
  };
}