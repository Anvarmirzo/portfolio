$(document).ready(function () {

    function scrolling() {
        var scroll = $(this).scrollTop();
        if (scroll > 400) {
            $('#top').fadeIn();
        }

        else {
            $('#top').fadeOut();
        }
    }
    function scrolled() {
        var scroll = $(this).scrollTop();
        $('.header-menu__list-link').each(function () {
            var attr = $(this).attr('href');
            var position = $(attr).offset().top - 191;

        })
    }
    $(window).on('scroll', function () {
        scrolling(); scrolled();
    });

    $('#top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 700)
    })

    $('a').click(function(e) {
        e.preventDefault();
    
        var id  = $(this).attr('href'),
            top = $(id).position().top,
            animateContainer = $('body, html, #main-wrapper');
        animateContainer.animate({'scrollTop': top}, 1000, 'swing');
    });
});