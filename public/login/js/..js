$(document).ready(function () {	
    $('#loginform').submit(function(e){
        e.preventDefault();
       $.ajax(   // request url
       {          
           url : "/userlogin",
           data : {
               pass : $("#password-field").val(),
               name : $("#username").val()
           },
           method : "POST",
           success: function (res) {  
               if(res.status==0)
               {  
                $("#texttop").text(res.from);
                e.preventDefault();
                return false
               }
               else if(res.status==1)
               {// success callback function
                window.location.replace("/dashboard")
                return true
               }
            
           }, error : function(err)
           {
               console.log(err)
           }
           
       });

    });
 
    
   });