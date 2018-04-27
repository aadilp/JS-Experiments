$('button').click(function () {
    $('div').stop().fadeOut("1000", function () {
        $(this).css("background", "#f1c40f").fadeIn(1000);
        setTimeout(function(){
            $('div').stop().fadeOut("1000", function () {
                $(this).css("background", "#fff").fadeIn(1000);
            });
        }, 1000);
    });
});
