"use strict"
$(document).ready(function () {
    $('.slider-list').slick({
        arrows: false,
        dots: true,
        dotsClass: "slick-dots",
        appendDots: '.appendDots'
    });
    $(window).on("scroll", function () {
        $('.top-header').toggleClass("new", $(this).scrollTop() > 100);
    });
});