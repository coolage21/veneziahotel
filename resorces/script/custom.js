
window.addEventListener('load', function(){
  //gnb
  $(".gnb > li").on("mouseenter focusin", function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  $(".gnb > li").on("mouseleave focusout", function () {
    $(this).removeClass("on");
  });
  
  //welcome page(bx slider)
  $('.slider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    mode: 'fade',
  });
  
  //welcome page
  let homepageBtn = document.querySelector('.homepage-btn');
  let reservationBtn = document.querySelector('.quick-reservation-btn');
  homepageBtn.addEventListener('click', function(e){
    e.preventDefault();
    let welcomePage = document.querySelector('#welcome');
    welcomePage.classList.add('hidden');
  });

  //header
  let lnb = document.querySelector('.lnb')
  window.addEventListener('scroll', function(){
    if(window.scrollY != 0) {
      lnb.classList.add('hidden');
    } else {
      lnb.classList.remove('hidden');
    }
  })

  //trigger
  let trigger = document.querySelector('.trigger');
  let gnb = document.querySelector('.gnb');
  trigger.addEventListener('click', function(){
    trigger.classList.toggle('active');
    gnb.classList.toggle  ('active');
  })

  //aside
  let aside = document.querySelector('aside')
  window.addEventListener('scroll', function(){
    if(window.scrollY > 789){
      aside.classList.add('fixed');
    } else {
      aside.classList.remove('fixed');
    }
  })
})
