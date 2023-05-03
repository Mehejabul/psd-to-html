$(function () {

  


    var mixer = mixitup('.gallary_wrap');

    $('.counter').counterUp({
         delay: 30,
         time: 10000
    });
    
    
   $('.twit_para').slick({
    dots: true,
        speed: 1000,
        autoplay: true,
        swipe: true,
        arrows: false,
});


//----sticky js-----//
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navbar").removeClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo-2.png");
        } else {
            $(".navbar").addClass("sticky");
            $(".navbar-three .navigation img").attr("src", "images/logo.png");
        }


});
    });