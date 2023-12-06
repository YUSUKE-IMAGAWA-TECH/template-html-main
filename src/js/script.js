jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ヘッダーの高さ分だけコンテンツを下げる
  // $(function () {
  //   const height = $('.js-header').height();
  //   $('main').css('margin-top', height);
  // });
  // // ページ内スクロール
  // $(function () {
  //   // ヘッダーの高さ取得
  //   const headerHeight = $('.js-header').height();
  //   $('a[href^="#"]').click(function () {
  //     const speed = 600;
  //     let href = $(this).attr('href');
  //     let target = $(href == '#' || href == '' ? 'html' : href);
  //     // ヘッダーの高さ分下げる
  //     let position = target.offset().top - headerHeight;
  //     $('body,html').animate({ scrollTop: position }, speed, 'swing');
  //     return false;
  //   });
  // });

  $(function () {
    // ヘッダーの高さ取得
    const headerHeight = $('.js-header').height();
    $('a[href^="#"]').click(function () {
      const speed = 600;
      let href = $(this).attr('href');
      let target = $(href === '#' || href === '' ? 'html' : href);
  
      // スクロール位置の計算
      let position;
      if (href === '.mv') {
        // mvセクションへのリンクの場合、ヘッダーの高さは考慮しない
        position = target.offset().top;
      } else {
        // それ以外の場合、ヘッダーの高さを差し引く
        position = target.offset().top - headerHeight;
      }
  
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });
  
});
// ハンバーガーメニュー
$(function () {
  $('.js-hamburger').on('click', function () {
    $(this).toggleClass('is-open');
    if ($(this).hasClass('is-open')) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  // backgroundまたはページ内リンクをクリックで閉じる
  $('.js-drawer a[href]').on('click', function () {
    closeDrawer();
  });

  // resizeイベント
  $(window).on('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      closeDrawer();
    }
  });
});

function openDrawer() {
  $('.js-drawer').fadeIn();
  $('.js-hamburger').addClass('is-open');
}

function closeDrawer() {
  $('.js-drawer').fadeOut();
  $('.js-hamburger').removeClass('is-open');
}
// MV スライダー
const swiper = new Swiper('.js-top-mv-swiper', {
  loop: true,
  effect: 'fade',
  speed: 3000,
  allowTouchMove: true,
  autoplay: {
    delay: 3000,
  },
});

// Top-Campaign スライダー
jQuery(function ($) {
  // リサイズ処理（PC時のみ矢印表示）
  const service_slideLength = document.querySelectorAll(
    '.js-top-campaign-swiper .swiper-slide'
  ).length;
  $(window).resize(function () {
    service_arrow();
  });
  service_arrow();
  function service_arrow() {
    if (
      window.matchMedia('(max-width: 767px)').matches ||
      service_slideLength <= 2
    ) {
      $('.js-top-campaign-arrow').hide();
    } else {
      $('.js-top-campaign-arrow').show();
    }
  }

  // Swiper
  const service_swiper = new Swiper('.js-top-campaign-swiper', {
    loop: true,
    speed: 3000,
    slidesPerView: 1.31,
    spaceBetween: 24,
    paginationClickable: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4.058,
        loopAdditionalSlides: 4.5,

        spaceBetween: 30,
      },
    },
    // breakpoints: {
    //   1024: {
    //     slidesPerView: 3,
    //     loopAdditionalSlides: 3.5,

    //     spaceBetween: 40,
    //   },
    // },
    navigation: {
      nextEl: '.top-campaign__button-next',
      prevEl: '.top-campaign__button-prev',
      clickable: true,
    },
  });
  //要素の取得とスピードの設定
  var box = $('.js-colorbox'),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: '100%' }, speed, function () {
            image.css('opacity', '1');
            $(this).css({ left: '0', right: 'auto' });
            $(this).animate({ width: '0%' }, speed);
          });
        counter = 1;
      }
    });
  });
});
