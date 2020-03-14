$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    // responsive: [
    //   {
    //     breakpoint: 961,
    //     settings: "unslick"
    //   },
    // ]
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider-map',
    responsive: [{
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },

    ]
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1101,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
    ]
  });

  $('.holder__slider, .shop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
    arrow: false,

  });



  // ********************************
  // input-number-style - START

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');


  $('.quantity-down').on('click', function () {
    let quantity = $(this).parents('.quantity'),
      input = quantity.find('input'),
      min = Number(input.attr('min'));

    let oldValue = Number(input.val());
    if (oldValue > min) {
      oldValue = oldValue - 1;
    };
    input.val(oldValue);
  });

  $('.quantity-up').on('click', function () {
    let quantity = $(this).parents('.quantity'),
      input = quantity.find('input'),
      max = Number(input.attr('max'));

    let oldValue = Number(input.val());
    if (oldValue < max) {
      oldValue = oldValue + 1;
    };
    input.val(oldValue);
  });

  $('.quantity-button').on('click', function () {
    let slide = $(this).parents('.holder-slide__info'),
      nights = slide.find('.nights'),
      guests = slide.find('.guests'),
      total = slide.find('.total');

    let summ = guests.val() * nights.val() * total.data('coast');
    total.html('$' + summ);

  });

  $('.holder-slide__info').each(function () {
    nights = $(this).find('.nights'),
      guests = $(this).find('.guests'),
      total = $(this).find('.total');

    let summ = guests.val() * nights.val() * total.data('coast');
    total.html('$' + summ);

  });




  // $('.quantity').each(function() {
  //   let input = $(this).find('input'),
  //     btnUp = $(this).find('.quantity-up'),
  //     btnDown = $(this).find('.quantity-down'),
  //     min = Number(input.attr('min')),
  //     max = Number(input.attr('max'));


  //   btnUp.click(function() {
  //     let oldValue = Number(input.val());
  //     if (oldValue < max) {
  //       oldValue = oldValue + 1;
  //     }
  //     input.val(oldValue);
  //     // input.trigger('change');
  //   });

  //   btnDown.click(function() {
  //     let oldValue = Number(input.val());

  //     if (oldValue > min) {
  //       oldValue = oldValue - 1;
  //     }
  //     input.val(oldValue);
  //     // input.trigger('change');
  //   });



  // });

  // $('.holder-slide__info').each(function(){
  //   let btn = $(this).find('.quantity-button'),
  //   nights = $(this).find('.nights'),
  //   guests = $(this).find('.guests'),
  //   total = $(this).find('.total');

  //   btn.on('click', function(){
  //     let summ = guests.val() * nights.val() * total.data('coast');
  //     console.log(summ);
  //     total.html('$' + summ);
  //   });

  //   let summ = guests.val() * nights.val() * total.data('coast');
  //     console.log(summ);
  //     total.html('$' + summ);

  // });

  // input-number-style - THE END!
  // ********************************

  $('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active')
  });

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('active')
  });

  // initialization wow.js
  new WOW().init();
  // *********************



});
