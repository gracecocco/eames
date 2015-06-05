import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    // init controller
    var controller = new ScrollMagic.Controller();

    // Wait for document ready

    $(function () {
  
      var headerBarHeight = $('.header-bar').height();
      var headerPadding = 96;
  
      var createScrollMagicSection = function(trigger, pin) {
        var scene = new ScrollMagic.Scene({
          triggerElement: trigger,
          duration: $(trigger).height() - (headerPadding + headerBarHeight + $(pin).height())
        });

        scene.setPin(pin, {pushFollowers: false}).addTo(controller);

        var setOffset = function() {
          scene.offset(($(window).height() / 2) - (headerBarHeight + headerPadding));
        };
        setOffset();
        $(window).resize(function() {
          if($(window).width() > 926) {
            setOffset();
          }
          else {
            controller = controller.destroy(true);
          }
          /* This works from wide => narrow, but not narrow => wide */
        });
      };
  
      // Build scene for each section
      $('.section').each(function(index, element){
        var trigger = $(element).find(".section-content");
        var pin = $(element).find(".section-title");

        if(trigger.length && pin.length && $(window).width() > 926) {
          createScrollMagicSection(trigger[0], pin[0]);
        }
      });
    });


    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(window).scrollTop();
    
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
    
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
    
        lastScrollTop = st;
    }

      // Mobile Header
      $('.hamburger').click(function() {
        $(this).toggleClass('selected');
        $('.nav-slide').slideToggle('fast', function() {
          // Animation complete.
        });
      });

      $('.nav-slide-list-link').click(function() {
        $('.nav-slide').slideUp('fast');
        $('.hamburger').removeClass('selected');
      });

    $(window).resize(function(){	
    	if ($(".hamburger").css("display") === "none" ){
    		$('.nav-slide').hide();
    	}
    });
  }
});
