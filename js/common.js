//$(window).on("scroll", function() {
//    if($(window).scrollTop() > 50) {
//        $(".header").addClass("active");
//    } else {
//       $(".header").removeClass("active");
//    }
//});

$(document).ready(function () {
  $('.menu-icon').on('click', function () {
      $(this).toggleClass('active');
      $('.gnav').toggleClass('is-show');
  });
});