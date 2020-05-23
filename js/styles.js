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
$("button").click(function () {
    var client = document.getElementById("name").value;
    $('#form').submit(function (event) {
        var display1 = $("input:first").val();
        var display2 = $("input#email").val();
        if (display1 && display2 !== "") {
            alert('dear ' + client + ', we have received your message. ' + 'Thank you for your feedback.');
        }
        else {
            alert("invalid input");
        }
        event.preventDefault();
    });
    $('input #name').css('color', 'white');
    $('input #email').css('color', 'white');
    $('input #message').css('color', 'white');
  }
)