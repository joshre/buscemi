jQuery(document).ready(function($) {
    var myLazyLoad = new LazyLoad({
        // example of options object -> see options section
        threshold: 500,
        elements_selector: ".lazy"
    });
    // if ($('.slides').length > 0) {
    //     $('.section--testimonial-wrap').flickity({
    //         // options
    //         // cellSelector: '.block--testimonial',
    //         prevNextButtons: false,
    //         wrapAround: true,
    //         pageDots: true
    //     });
    // }
    // $search = $('.trigger--search');
    // $search.on('click touchstart', function(event) {
    //     event.preventDefault();
    //     function openSearch(scrollPosition) {
    //         var scrollPosition = [
    //             self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    //             self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //         ];
    //         $('body').addClass('letssearch');
    //         $('.search-field').focus();
    //         var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    //         html.data('scroll-position', scrollPosition);
    //         html.data('previous-overflow', html.css('overflow'));
    //         html.css('overflow', 'hidden');
    //         window.scrollTo(scrollPosition[0], scrollPosition[1]);
    //     }
    //     function closeSearch(scrollPosition) {
    //         var scrollPosition = [
    //             self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    //             self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //         ];
    //         $('body').removeClass('letssearch');
    //         var html = jQuery('html');
    //         var scrollPosition = html.data('scroll-position');
    //         html.css('overflow', html.data('previous-overflow'));
    //         window.scrollTo(scrollPosition[0], scrollPosition[1])
    //     }
    //     if ($('body').hasClass('letssearch')) {
    //         closeSearch();
    //     } else {
    //         openSearch();
    //     }
    //     $(document).keydown(function(event) {
    //         if (event.keyCode == 27) {
    //             closeSearch();
    //         }
    //     });
    // });
    if (window.matchMedia('(max-width: 767px)').matches) {
        var mob = true;
    } else {
        var mob = false;
    }
    if (mob == true) {
        $trig = $('.menu--trigger');
        $trig.on('click touchstart', function(event) {
            event.preventDefault();
            $('body').toggleClass('navopen');
        });
    }
});
// Dev tools
jQuery(document).ready(function($) {
    if ($('.block--media-queries').length > 0) {
        $(document).keydown(function(event) {
            if (event.keyCode == 27) {
                $('.block--media-queries').toggleClass('show');
            }
        });
    }
});