$(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (height > 70) {
      $('.header').addClass('header-fixed');
    } else {
      /*Если меньше 100px удаляем класс для header*/
      $('.header').removeClass('header-fixed');
    }
  });
})