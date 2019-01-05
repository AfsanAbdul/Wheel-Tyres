$(document).ready(function () {
    $(window).scroll(function () {
        if($(window).scrollTop()) {
            $(".nav1 , .navbar-form ").css({
                'display': 'none'
            });
            $(".new-navbar").addClass('active-newnav')
        }
        else {
            $(".nav1 , .navbar-form").css({
                'display': 'block'
            });
            $(".new-navbar").removeClass('active-newnav')
        }
    });
});

$(document).ready(function(){
    $('.menu1 a').click(function(){
        $(this).parent().find('.dropdown-menu').toggle(400);
        $(this).children().find('i').toggleClass('fas fa-angle-up fas fa-angle-down');
        $(this).parent().siblings().find('.dropdown-menu').hide(200);
        $(this).parent().find('ul').mouseleave(function(){
            let x = $(this);
            $('html').click(function(){
                x.hide();
                $('html').unbind('click');
            });
        });
    });
    $('.menu2 a').click(function () {
        return false;
    });
});


$(document).ready(function () {
    $('.accord-part').click(function () {
        $(this).children().find('i').toggleClass('fas fa-minus fas fa-plus');
        $('.menu2').slideToggle(400);
    })
});


$(document).ready(function () {
    $('.accord-icon2 > i').click(function () {
        $(this).toggleClass('fas fa-minus fas fa-plus');
        $('.menu2 .dropdown-toggle').dropdown()
    });
});