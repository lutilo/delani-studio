$('.main').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
    $(this).children('.hover').toggle();
});


$(".portfolio img").hover(function (e) {
    $(this).animate({ opacity: .5 })
}, function () {
    $(this).stop().animate({ opacity: 1 })
})
