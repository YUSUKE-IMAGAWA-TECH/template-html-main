jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

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
});
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
      $('.js-service-arrow').hide();
    } else {
      $('.js-service-arrow').show();
    }
  }

  // Swiper
  const service_swiper = new Swiper('.js-top-campaign-swiper', {
    loop: true,
    speed: 2000,
    slidesPerView: 1.5,
    spaceBetween: 24,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        loopAdditionalSlides: 3.5,

        spaceBetween: 30,
      },
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        loopAdditionalSlides: 3.5,

        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.top-campaign__button-next',
      prevEl: '.top-campaign__button-prev',
      // clickable: true,
    },
  });
});
