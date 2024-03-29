// ハンバーガー
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

$(window).on('load resize', function(){
  var winW = $(window).width();
  var x = 768;
  if (winW < x) {
    //700px以下の時の処理
    $(".hamburger").show();
  } else {
    //700pxより大きい時の処理
    $(".hamburger").hide();
  }
});

// スクロール
// var fvh = $('.fv').height();

// $(window).scroll(function() {
//   var top = $(window).scrollTop();
//   if ((fvh - 100) < top) {
//     $('.header').css('display', 'block');
//     } else {
//     $('.header').css('display', 'none');
//   }
// });


// jQueryでブラウザの画面幅によって処理を変える

// $(window).on('load resize', function(){
//   if (window.matchMedia('(max-width:800px)').matches){
//     $('.header').css('display', 'block');
//   } else {
//     $('.header').css('display', 'none');
//   }
// });

// トップへ戻る
$(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

//ふわっと表示
$(function(){
  $(".ef").css({opacity:"0"});
  $(window).scroll(function (){
    $(".ef").each(function(){
      var ePos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > ePos - windowHeight + windowHeight/5){
        $(this).animate({ opacity: 1 }, { duration: 600, easing: 'swing'})
      }
    });
  });
});

// アコーディオン
jQuery(function ($) {  
  //タイトルがクリックされたら
  $(".js-accordion-title").on('click', function () {
    //クリックしたjs-accordion-title以外の全てのopenを取る
    $(".js-accordion-title").not(this).removeClass("open");
    //クリックされたjs-accordion-title以外のcontentを閉じる
    $(".js-accordion-title").not(this).next().slideUp(300);
    //thisにopenクラスを付与
    $(this).toggleClass("open");
    //thisのcontentを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });
  
  /* 下記でもOK
   $(".js-accordion-title").on('click', function () {
     $(".js-accordion-title").not(this).removeClass("open").next().slideUp(300);
     $(this).toggleClass("open").next().slideToggle(300);
   });
   */
});

// スライダー
$(document).ready(function(){
  $('.instgram_slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    // responsive: [{
      // breakpoint: 1200,
        //ブレイクポイントを指定
      // settings: {
        // centerPadding:'50px',
      // },{
      // breakpoint: 480,
      // settings: {
      //   centerMode: false,
      // }
    // }]
  });
});