$(document).ready(function() {
    // hide the "POWERED BY 000WEBHOST" annoying banner
    $("div").has("a img[alt='www.000webhost.com']").hide();
    // show sticky navigation when scrolling down
    $('.js--section-features').waypoint(function(direction) {
        var nav = $("nav");
        if (direction === "down") {
            nav.addClass("sticky animated fadeInDown");
        } else {
            nav.addClass('fadeOutUp');
            setTimeout(function() {
                nav.removeClass("sticky animated fadeInDown fadeOutUp");
            }, 300);
        }

    }, {
        offset: '60px'
    });



    //DON'T NEED THIS ANYMORE, JUST USED THE GOOD OLD ID REFERENCE ON ANCHOR TAGS
    // scrolling on buttons

    //
    // $('.js--scroll-to-plans').on('click', function() {
    //     $('html, body').animate({
    //         scrollTop: $('.js--section-plans').offset().top
    //     }, 1000);
    // });
    // $('.js--scroll-to-start').on('click', function() {
    //     $('html, body').animate({
    //         scrollTop: $('.js--section-features').offset().top
    //     }, 1000);
    // });

    // navigation scrolling
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // animations on scroll
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
    $('.js--wp-3').waypoint(function() {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function() {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    // mobile navigation
    $(".js--nav-icon").click(function() {

        //didn't use slideToggle because it causes a bug, making
        //the navigation bar display "none" when your press the button
        //and resize to normal width again, it goes hidden

        if ($(".main-nav").css("display") === "none") {
            $(".main-nav").slideDown();
        } else {
            $(".main-nav").slideUp(function() {
                $(this).css("display", "")
            });
        }

        var icon = $("i.js--nav-icon"),
            listIcon = "ion-navicon-round",
            crossIcon = "ion-close-round";

        if (icon.hasClass(listIcon)) {
            icon.addClass(crossIcon).removeClass(listIcon);
        } else {
            icon.addClass(listIcon).removeClass(crossIcon);
        }
    });


    //modal box
    (function() {
        var modal, signUpBtn, xBtn;
        modal = $(".modal");
        signUpBtn = $(".plan-box a.btn");
        xBtn = $(".close-btn, .modal-close-button");

        //show modal box when clicking submit button
        signUpBtn.click(function() {
            modal.show();
        });


        //hide if clicked anywhere outside the box of the modal
        modal.click(function(e) {
            if (e.target == modal[0]) {
                modal.hide();
            }
        });

        //hide modal box when X button or Okay is clicked.
        xBtn.click(function() {
            modal.hide();
        });
    }());

});