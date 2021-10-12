$('.project-image').hover(function () {
    $(this).siblings().toggleClass('hide')
})
$('.navbar-nav').on('click', function () {
    $('.navbar-toggler').toggleClass('collapsed')
    $('.navbar-collapse').toggleClass('show')
})