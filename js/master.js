// js-slide
$('.js-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  appendDots: $('.slide-controls'),
  dotsClass: 'custom-dots',
  customPaging: function (slider, i) {
    return '<span class="dot" role="button"></span>';
  }
});
// end-js-slide

// js-search
$('.js-btn-search').click(function () {
  if ($('input').hasClass('input_hidden')) {
    $('.js-input_search').addClass('input-search');
    $('.js-input_search').removeClass('input_hidden');
  } else {
    $('.js-input_search').addClass('input_hidden');
    $('.js-input_search').removeClass('input-search');
  }
  $(this).children().toggleClass('fa-times');
});

// js-slide
$('.js-item').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: '.prev-arrow',
  nextArrow: '.next-arrow'
});
// end-js-slide

// js-tab
function activeTab(obj) {
  $('.js-nav-main-product ul li').removeClass('active');
  $(obj).addClass('active');
  var id = $(obj).find('a').attr('href');
  $('.js-main-item').hide();
  $(id).show();
}

$('.js-tab li').click(function () {
  activeTab(this);
  return false;
});

activeTab($('.js-tab li:first-child'));
// end-js-tab
