//contact form api
const subForm = (event) => {
    event.preventDefault()
  $.ajax({
    type: "post",
    url: "https://api.apispreadsheets.com/data/19335/",
    data: $("#contact-form").serialize(),
    success: function () {
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}

$('#form-button').submit(subForm)




//jquery animations
$('.project-image').hover(function () {
    $(this).siblings().toggleClass('hide')
})
$('.navbar-nav').on('click', function () {
    $('.navbar-toggler').toggleClass('collapsed')
    $('.navbar-collapse').toggleClass('show')
})