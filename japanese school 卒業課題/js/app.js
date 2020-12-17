$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
  $(function () {
    $('a').on('click', () => {
        $('.globalMenuSp').fadeOut();
    });
});
});