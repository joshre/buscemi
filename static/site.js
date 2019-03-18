jQuery(document).ready(function($) {
    var myLazyLoad = new LazyLoad({
        // example of options object -> see options section
        threshold: 500,
        elements_selector: ".lazy"
    });
    function openShut(trigger, content) {
        trigger.on('click touchstart', function(event) {
            event.preventDefault();
            triggerContent = $(this);
            targetContent = triggerContent.next();
            if (triggerContent.hasClass('open')) {
                trigger.removeClass('open').attr('aria-expanded', 'false');
                content.removeClass('is-expanded').attr('aria-hidden', 'true');
            } else {
                trigger.removeClass('open').attr('aria-expanded', 'false');
                content.removeClass('is-expanded').attr('aria-hidden', 'true');
                triggerContent.toggleClass('open').attr('aria-expanded', 'true');
                targetContent.toggleClass('is-expanded').attr('aria-hidden', 'false');
            }
        });
    }
    // 
    // below is the function accepting an faq question & answer
    // 
    // openShut($('.faq--title'), $('.faq--answer'));
    // you'll need to add the following css to the content: 
    //  max-height: 1px;
    //  overflow: hidden;
    //  transition: max-height 0.3s $base-animation;

    //  &.is-expanded {
    //     @include accelerate;

    //     transition: max-height 0.5s $base-animation;
    //     max-height: 1000px;
    //   }

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

// Parallax Script

    // if ($('.parallax').length > 0) {
    //     window.addEventListener("load", function() {
    //         SmoothParallax.init('pageScroll');
    //     });
    // }

// appear and disappear   
    
    // appear({
    //     init: function init() {},
    //     // function to get all elements to track
    //     elements: function elements() {
    //         return document.getElementsByClassName('toanimate');
    //     },
    //     // function to run when an element is in view
    //     appear: function appear(el) {
    //         el.className += " show";
    //     },
    //     // function to run when an element is in view
    //     disappear: function disappear(el) {
    //         el.classList.remove("show");
    //     },
    //     reappear: true,
    // });

// appear once
    
    // appear({
    //     init: function init() {},
    //     // function to get all elements to track
    //     elements: function elements() {
    //         return document.getElementsByClassName('animateonce');
    //     },
    //     // function to run when an element is in view
    //     appear: function appear(el) {
    //         el.className += " show";
    //     },
    //     // function to run when an element is in view
    //     // disappear: function disappear(el) {
    //     //     el.classList.remove("show");
    //     // },
    //     reappear: false,
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


// AJAX Search

// jQuery(function($){
//     $('#IDOFTHEFORM').on('submit', function(event) {
//         event.preventDefault();
//         /* Act on the event */
//     });
//     $('#IDOFTHEFORM input').change(function(event){
//         var filter = $('#IDOFTHEFORM');
//         var wrap = $('CLASSNAME THAT RECEIVES THE LOADING CLASS');
//         $.ajax({
//             url:filter.attr('action'),
//             data:filter.serialize(), // form data
//             type:filter.attr('method'), // POST
//             beforeSend:function(xhr){
//                 // filter.find('button').text('Processing...'); // changing the button label
//                 wrap.toggleClass('loading');
//             },
//             success:function(data){
//                 // filter.find('button').text('Apply filter'); // changing the button label back
//                 $('#response').html(data); // insert data
//                 wrap.toggleClass('loading');
//             }
//         });
//         return false;
//     });

// });

