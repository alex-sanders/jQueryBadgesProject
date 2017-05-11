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
  courses.forEach(function(course) {
    $('<div />', {
      'class': 'course'
    }).appendTo($badges);

    $('<h3 />', {
      text: course.title
    }).appendTo($course);

    $('<img />',  {
      src: source.badge
    }).appendTo($course);

    $('<a />',  {
      'class': 'btn btn-primary'
      href: course.url,
      target: _blank,
      text: 'See Course'
    }).appendTo($course);
  })
}



});
