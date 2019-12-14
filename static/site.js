 // Set the options to make LazyLoad self-initialize    
 window.lazyLoadOptions = {
     elements_selector: ".lazy",
     // ... more custom settings?    
 };
 // Listen to the initialization event and get the instance of LazyLoad  
 window.addEventListener('LazyLoad::Initialized', function(event) {
     window.lazyLoadInstance = event.detail.instance;
 }, false);
 jQuery(document).ready(function($) {
     function openShut(trigger, content) {
         trigger.on('click touchstart', function(event) {
             event.preventDefault();
             triggerContent = $(this);
             targetContent = content;
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
     // if gravity forms has a form and the inputs have labels, use them as placeholders
     if ($('.gform_wrapper').length > 0) {
         var inputs = $('.gform_wrapper form input');
         inputs.each(function(index, el) {
             // name = $(el).parent('li').children('label');
             if ($(el).attr('type') != 'hidden') {
                 var labelName = $(el).parent('div').parent('li').children('label').text();
                 if (labelName.length > 0) {
                     $(el).attr('placeholder', labelName);
                 }
             }
         });
     }
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
 $(document).ready(function() {
     // Setup the a11y nav
     $("nav > ul").setup_navigation();
     // RWD Nav Pattern
     $("body").addClass("js");
     var $menu = $("nav > ul"),
         $menulink = $(".nav-link"),
         $menuTrigger = $(".menu-item-has-children > a");
     $menulink.click(function(e) {
         // e.preventDefault();
         $menulink.toggleClass("active");
         $menu.toggleClass("active");
     });
     $menuTrigger.click(function(e) {
         // e.preventDefault();
         var $this = $(this);
         $this.toggleClass("active").next("ul").toggleClass("active");
     });
 });
 $.fn.setup_navigation = function(settings) {
     settings = jQuery.extend({
         menuHoverClass: "show-menu",
         topLevelActive: "sub-open"
     }, settings);
     var top_level_links = $(this).find("> li > a");
     // Set tabIndex to -1 so that top_level_links can't receive focus until menu is open
     $(top_level_links).next("ul").attr("data-test", "true").attr({
         "aria-hidden": "true"
     }).find("a").attr("tabIndex", -1);
     // Adding aria-haspopup for appropriate items
     $(top_level_links).each(function() {
         if ($(this).next("ul").length > 0) $(this).parent("li").attr("aria-haspopup", "true");
     });
     $(top_level_links).hover(function() {
         $(this).closest("ul").attr("aria-hidden", "false").find("." + settings.menuHoverClass).attr("aria-hidden", "true").removeClass(settings.menuHoverClass).find("a").attr("tabIndex", -1);
         $(this).next("ul").attr("aria-hidden", "false").addClass(settings.menuHoverClass).find("a").attr("tabIndex", 0);
     });
     $(top_level_links).focus(function() {
         $('.toplevel' + '.' + settings.topLevelActive).removeClass(settings.topLevelActive);
         $(this).closest("ul").find("." + settings.menuHoverClass).attr("aria-hidden", "true").removeClass(settings.menuHoverClass).find("a").attr("tabIndex", -1);
         $(this).next("ul").attr("aria-hidden", "false").addClass(settings.menuHoverClass).find("a").attr("tabIndex", 0);
         $(this).addClass(settings.topLevelActive);
     });
     // Hide menu if click or focus occurs outside of navigation
     $(this).find("a").last().keydown(function(e) {
         if (e.keyCode == 9) {
             // If the user tabs out of the navigation hide all menus
             $("." + settings.menuHoverClass).attr("aria-hidden", "true").removeClass(settings.menuHoverClass).find("a").attr("tabIndex", -1);
             $('.toplevel' + '.' + settings.topLevelActive).removeClass(settings.topLevelActive);
         }
     });
     $(document).click(function() {
         $("." + settings.menuHoverClass).attr("aria-hidden", "true").removeClass(settings.menuHoverClass).find("a").attr("tabIndex", -1);
         $('.toplevel' + '.' + settings.topLevelActive).removeClass(settings.topLevelActive);
     });
     $(this).click(function(e) {
         e.stopPropagation();
     });
 }