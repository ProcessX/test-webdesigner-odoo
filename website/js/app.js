$(function () {
  var $header = $("header");
  if ($(document).scrollTop() > $header.height()) {
    $header.toggleClass('scrolled');
  }
  $(document).scroll(function () {
    $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
  });
});