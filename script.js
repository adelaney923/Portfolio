//contact form api
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
$('.skill')
    .mouseover(function() {
        $(this).css('color','#0000ff');
        $(this).animate({
            'font-size': '80px',
        })
    })
    .mouseleave(function () {
        $(this).css('color', 'black')
        $(this).animate({
            'font-size': '40px'
        })
    })
$('input[type="checkbox"]').on('click', function() {
    if($(this).prop('checked') == true) {
        $('.container').css('background','black')
        $('.container').css('color','white')
        $('.featured-projects').css('background-color', 'white')
        $('.skill').css('color', 'white')
        $('nav').removeClass('navbar-light')
        $('nav').addClass("navbar-dark bg-dark");
    }
    else if($(this).prop('checked') == false) {
        $(".container").css("background", "white");
        $(".container").css("color", "black");
        $(".featured-projects").css("background-color", "white");
        $(".skill").css("color", "black");
        $("nav").removeClass("navbar-dark bg-dark");
        $("nav").addClass("navbar-light");
    }
})

