

/*=====================================================================
==========================  Main Sider homepage  =========================
========================================================================*/
$('#mainSilder').owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    items: 1
});

$('#mainSilder2').owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    items: 1
});


/*=====================================================================
==========================  Product Sider homepage  =========================
========================================================================*/
$('.productSilder').owlCarousel({
    margin: 0,
    nav: true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive: {
        0: {
            items: 2
        },
        951: {
            items: 4
        },
        1265: {
            items: 6
        }
    }
});

/*=====================================================================
==========================  Owl Carousel CSS  =========================
========================================================================*/
$('.owl-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true
});

/*=====================================================================
==========================  Scroll to top  =========================
========================================================================*/

function scrollToTop() {
    var $scrollUp = $('.scroll-top-custom'),
        $lastScrollTop = 0,
        $window = $(window);

    $window.on('scroll', function () {
        var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
            if ($window.scrollTop() > 200) {
                $scrollUp.addClass('show');
            } else {
                $scrollUp.removeClass('show');
            }
        }
        $lastScrollTop = st;
    });

    $scrollUp.on('click', function (evt) {
        $('html, body').animate({scrollTop: 0}, 600);
        evt.preventDefault();
    });
}

scrollToTop();

/*----------  End-Scroll to top  ----------*/


/* ==========================================
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function () {
    if ($(window).scrollTop() >= 0) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});


/* ==========================================
wishlist active on click
========================================== */
$(".wishlist").click(function () {
    $(this).toggleClass("active");
});
