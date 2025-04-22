// ============================= Scroll Top ==============================
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if (!$("#scroll").hasClass("active")) {
            $("#scroll").addClass("active");
        }
    } else {
        if ($("#scroll").hasClass("active")) {
            $("#scroll").removeClass("active");
        }
    }
});
$('#scroll').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 0);
    return false;
});
// ============================= Scroll Top ==============================
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});


$(document).on('click', '.remove-error', function() {
    $('label.error').css('display', 'none');
    $('form').trigger("reset");
});