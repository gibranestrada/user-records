"use strict"
$(document).ready(function(){
    $("#input-email").keypress(function(event){
      if (event.keyCode == 13) {
        validateEmail();
    }
    });
    $(".submit-button").click(function(){
      validateEmail();
    });
    function validateEmail(){
      const email = $("#input-email");
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const bool = regex.test(email.val())
      console.log(bool, email.val());
      if(!bool){
        email.removeClass("input-email").addClass("wrong-email");
        $(".error").removeClass("hide");
      }
      if(bool){
        email.removeClass("wrong-email").addClass("input-email");
        $(".error").addClass("hide");
      }
    }
  });