$(function() {

  // your code will go here
$.ajax({
  url: "https://www.codeschool.com/users/Asanders11891.json",
  dataType: 'jsonp',
  success: function(response){
      //reponse
      addCourses(response.courses.completed);

  }
});



function addCourses(courses) {
  var $badges = $('#badges');
  course.forEach(function(courses) {
    $('<div />', {
      'class': 'course'
    }).appendTo($badges);

  })
}



});
