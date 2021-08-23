
window.addEventListener('load', function(){
  //gnb
  $(".gnb > li").on("mouseenter focusin", function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  $(".gnb > li").on("mouseleave focusout", function () {
    $(this).removeClass("on");
  });
  
  //bx slider
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

  //trigger
  let trigger = document.querySelector('.trigger');
  let gnb = document.querySelector('.gnb');
  trigger.addEventListener('click', function(){
    trigger.classList.toggle('active');
    gnb.classList.toggle  ('active');
  })
})
