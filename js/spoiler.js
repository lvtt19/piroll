$(document).ready(function () {
   $('.information__title, .social__title').click(function (event) {
      if ($('.spoiler').hasClass('one')) {
         $('.information__title, .social__title').not($(this)).removeClass('active');
         $('.information__list, .social__list').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});