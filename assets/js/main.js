$(function () {

    "use strict";

    //===== Prealoder

    $('.preloader').delay(500).fadeOut(500);

    // niceSelect
    $('select').niceSelect();
    
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });


    //===== close navbar-collapse when a  clicked

    $(".menu-btn").on('click', function () {
        $(".main-menu ul").toggleClass('active');
    });    
    $(".close-btn").on('click', function () {
        $(".main-menu ul").toggleClass('active');
    });    
    $(".main-menu ul li a").on('click', function () {
        $(".main-menu ul").removeClass('active');
    });    
    


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200);
        } else {
            $('.back-to-top').fadeOut(200);
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  WOW active

    new WOW().init();


});
