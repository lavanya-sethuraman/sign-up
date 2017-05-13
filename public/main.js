 $(function(){
   $('.menu .item').tab();

   $('.js-signup-form').submit(function (e) {
  
    var signUpData = {
      username: $('.js-signup-username').val(),
      password: $('.js-signup-password').val(),
      firstName: $('.js-signup-firstname').val(),
      lastName: $('.js-signup-lastname').val(),
    };
    e.preventDefault();
      $.ajax({
  url: '/users',
  type : 'POST',
  data: signUpData
})
.done(function(data) {
  console.log("success");
  console.log(data);
})
.fail(function(error) {
  console.log(error);
  console.log("error");
})
.always(function() {
  console.log("complete");
});

 });


$('.js-login-form').submit(function (e) {
  
    var username= $('.js-login-username').val();
    var password= $('.js-login-password').val();
    e.preventDefault();
      $.ajax({
  url: '/users/me',
  type : 'GET',
  headers: {
    "Authorization": "Basic " + btoa(username + ":" + password)
  }
})
.done(function(data) {
  console.log("success");
  console.log(data);
})
.fail(function(error) {
  console.log(error);
  console.log("error");
})
.always(function() {
  console.log("complete");
});

 });



   });





