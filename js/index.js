var lastScroll = 40;

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".navbar-top").addClass("sticky");
        } else if (scrollY < 20) {
            $(".navbar-top").removeClass("sticky");
        }
        lastScroll = scroll;
    });
});

$(".menu-toggler").on("click", function() {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
});

$(".click").on("click", function() {
    $(".menu-toggler").removeClass("active");
    $(".navbar-menu").removeClass("active");
});

$(".navbar-menu a").on("click", function() {
    $(".menu-toggler").removeClass("active");
    $(".navbar-menu").removeClass("active")
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 900,
    },
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    }
});