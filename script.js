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