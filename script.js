//contact form ap
$('button').on('click', function (event) {
    event.preventDefault();
    console.log('hey');
    $.ajax({
      url: "https://api.apispreadsheets.com/data/19335/",
      method: "POST"
    })
    .then( () => console.log('hi'))
})


//jquery animations
$('.project-image').hover(function () {
    $(this).siblings().toggleClass('hide')
    $(this).toggleClass('blur');
})
$('.navbar-nav').on('click', function () {
    $('.navbar-toggler').toggleClass('collapsed')
    $('.navbar-collapse').toggleClass('show')
})
$(window).on('scroll', function () {
    $('.about-me-text').fadeIn('slow')
    $('.skills-icons').fadeIn('slow')
})
$('.skill')
    .mouseover(function() {
        $(this).animate({
            'font-size': '80px'
        })
    })
    .mouseleave(function () {
        $(this).animate({
            'font-size': '40px'
        })
    })

