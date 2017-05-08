 $(function(){
   $('.menu .item').tab();
   validateEmail();



   $('.signUp-form').submit(function (elof) {
   /* var signUpData = {
      username: $('.signUserName').val(),
      password: $('.signPassword').val(),
      firstName: $('.signFirstName').val(),
      lastName: $('.signLastName').val(),
      email: $('.signEmail').val(),
    }; */
    var signUpData = {
      username: $('.signUserName').val(),
      password: $('.signPassword').val(),
      firstName: $('.signFirstName').val(),
      lastName: $('.signLastName').val(),
      email: $('.signEmail').val(),
    };
    console.log(signUpData);
    elof.preventDefault();
      $.ajax({
  url: '/users',
  dataType: 'json',
  contentType: "application/json",
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
   });



function validateEmail(){
  $('.ui.form').form({
            fields: { email: { identifier  : 'email',rules: [ { type   : 'empty',
                                                                prompt : 'Please enter your e-mail'
                                                              },
                                                              {
                                                                type   : 'email',
                                                                prompt : 'Please enter a valid e-mail'
                                                              }
                                                            ] },
                            password: { identifier  : 'password',rules: [ { type   : 'empty',
                                                                            prompt : 'Please enter your password'
                                                                          },
                                                                          {
                                                                            type   : 'length[6]',
                                                                            prompt : 'Your password must be at least 6 characters'
                                                                          }
                                                                        ] } }
                      });

}
