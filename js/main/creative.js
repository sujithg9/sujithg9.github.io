(function ($) {
    "use strict";
    //Function to prevent Default Events
    function pde(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNavBar').affix({
        offset: {
            top: 100
        }
    })

    //show scrolltotop icon
    $(document).scroll(function () {
        var position = $(document).scrollTop();
        var headerHeight = $('#header').outerHeight();
        if (position >= headerHeight - 100) {
            $('.scrolltotop').addClass('show-to-top');
        } else {
            $('.scrolltotop').removeClass('show-to-top');
        }
        // console.log("position :" + position + " headerHeight=");
    });

    // Scroll on Top
    $('.scrolltotop, .navbar-brand').click(function (evt) {
        $('html, body').animate({
            scrollTop: '0'
        }, 1200, 'easeInOutCubic');
        pde(evt);
    });

    // Initialize WOW.js Scrolling Animations
    //new WOW().init();

    // WOW Animation When You Scroll
    var wow = new WOW({
        mobile: false
    });
    wow.init();

    //Portfolio Model Display
    $(".modal").each(function (l) {
        $(this).on("show.bs.modal", function (l) {
            var o = $(this).attr("data-easein");
            "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o)
        });
    });

    // E-mail validation

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };


    // Contact form ajax
    $("#contactForm").submit(function (e) {

        e.preventDefault();
        var contactForm = $("#contactForm");
        var name = $("#nameinput").val();
        var email = $("#emailinput").val();
        var message = $("#contactmessage ").val();
        var responseMessage = $("#contactSubmitResponse");

        if ((name == "" || email == "" || message == "") || (!isValidEmailAddress(email))) {
            responseMessage.fadeIn(500);
            responseMessage.html('<i class="fa fa-warning"></i> Check all fields.');
        } else {
            $.ajax({
                url: contactForm.attr('action'),
                method: contactForm.attr('method'),
                data: contactForm.serialize(),
                dataType: 'json',
                beforeSend: function () {
                    $('#contactForm button').empty();
                    $('#contactForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
                },
                success: function (data) {
                    var succesBox = '<div class="alert alert-success alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '<strong>Thanks!</strong> I will reply in a few hours' + '</div>';
                    responseMessage.html(succesBox);
                    $('#contactForm').fadeOut(1000);
                    responseMessage.fadeIn(1000);

                },
                error: function (error) {
                    $('#contactForm button').empty();
                    $('#contactForm button').append('<i class="fa fa-retweet"></i> Try again.');
                    responseMessage.html(error.message);
                    responseMessage.fadeIn(1000);
                }
            });
        }
    });
    
})(jQuery);
