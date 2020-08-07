
$(document).ready(function () {

  $('.comments__sort-btn').click(function () {
    $(this).parent().toggleClass('active');
  });

  $('.comments__sort-item').click(function () {
    $(this).closest('.comments__sort').toggleClass('active');
    $(this).parent().prev().html($(this).html());
  });

  if($(window).width() > 992) {
    $('.comments__block').scroll(function () {
      $('.comments__item').each(function () {
        if ($(this).offset().top < 380) {
          $(this).css('opacity', '0.7');
        }
        if ($(this).offset().top < 320) {
          $(this).css('opacity', '0.9');
        }
        if ($(this).offset().top < 250) {
          $(this).css('opacity', '1');
        }
      });
    });
  }

});

