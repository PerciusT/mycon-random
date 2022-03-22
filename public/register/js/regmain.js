
$(document).ready(function() {
    $("#re_pass").keyup(function()
    {
        if($("#pass").val()!=$("#re_pass").val())
       {
        $("#pass").addClass("wrongpass");
        $("#re_pass").addClass("wrongpass");
        return false;
       }
       else 
       {
        $("#signup").val("Register");
        $("#pass").removeClass("wrongpass");
        $("#re_pass").removeClass("wrongpass");
        return true;
       }
    });
    $("#pass").keyup(function()
    {
        if($("#pass").val()!=$("#re_pass").val())
       {
        $("#pass").addClass("wrongpass");
        $("#re_pass").addClass("wrongpass");
        return false;
       }
       else 
       {
        $("#signup").val("Register");
        $("#pass").removeClass("wrongpass");
        $("#re_pass").removeClass("wrongpass");
        return true;
       }
    });
    $('form').submit(function(e) {
       if($("#pass").val()!=$("#re_pass").val())
       {
        e.preventDefault();
        $("#re_pass").focus();
        $("#signup").val("Check Passwords");
        return false;
       }
       else if($("#agree-term").is(":checked"))
       {
           return true;
       }
       else 
       {   
        e.preventDefault();
        $("#label-agree-term").addClass("wrongpass");
        return false;
       }
        // or return false;
    });
});