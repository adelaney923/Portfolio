//contact form api
const subForm = (event) => {
    event.preventDefault()
  $.ajax({
    url: "https://api.apispreadsheets.com/data/19335/",
    type: "post",
    data: $("#contact-form").serializeArray(),
    success: function () {
      console.log("linked");
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}

$('#form-button').on('submit', subForm)




//jquery animations
$('.project-image').hover(function () {
    $(this).siblings().toggleClass('hide')
})
$('.navbar-nav').on('click', function () {
    $('.navbar-toggler').toggleClass('collapsed')
    $('.navbar-collapse').toggleClass('show')
})