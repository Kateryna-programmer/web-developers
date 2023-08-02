$(document).ready(function () {
  $('.header-navbar__burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').slideToggle(500);
  });
});
