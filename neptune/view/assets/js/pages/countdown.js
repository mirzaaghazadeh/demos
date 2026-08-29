$(document).ready(function() {

    "use strict";

    $('#countdown1').countdown('2021/10/10 12:34:56')
        .on('update.countdown', function(event) {
            var format = '%H:%M:%S';
            if (event.offset.totalDays > 0) {
                format = '%-d day%!d ' + format;
            }
            if (event.offset.weeks > 0) {
                format = '%-w week%!w ' + format;
            }
            $(this).html(event.strftime('' +
                '<div class="countdown-block-container">' +
                '<div class="countdown-block">' +
                '<h1 class="clock-val">%d</h1>' +
                '</div>' +
                '<h4 class="clock-text"> روز </h4>' +
                '</div>' +
                '<div class="countdown-block-container">' +
                '<div class="countdown-block">' +
                '<h1 class="clock-val">%H</h1>' +
                '</div>' +
                '<h4 class="clock-text"> ساعت </h4>' +
                '</div>' +
                '<div class="countdown-block-container">' +
                '<div class="countdown-block">' +
                '<h1 class="clock-val">%M</h1>' +
                '</div>' +
                '<h4 class="clock-text"> دقیقه </h4>' +
                '</div>' +
                '<div class="countdown-block-container">' +
                '<div class="countdown-block">' +
                '<h1 class="clock-val">%S</h1>' +
                '</div>' +
                '<h4 class="clock-text"> ثانیه </h4>' +
                '</div>'));
        })
        .on('finish.countdown', function(event) {
            $(this).html('این پیشنهاد منقضی شده است!')
                .parent().addClass('disabled');

        });

    var nextYear = new Date(new Date().getFullYear() + 1, 0, 0, 0, 0, 0, 0);
    $('#countdown2').countdown(nextYear, function(event) {
        var $this = $(this).html(event.strftime('' +
            '<span>%w</span> هفته ' +
            '<span>%d</span> روز ' +
            '<span>%H</span> ساعت ' +
            '<span>%M</span> دقیقه ' +
            '<span>%S</span> ثانیه'));
    });
});