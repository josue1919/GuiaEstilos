

var user={email:"admin@admin.com",password:"1234", rol:"admin"}
var usertutor={email:"tutor@tutor.com",password:"1234", rol:"tutor"}  
var userexperto={email:"experto@experto.com",password:"1234",rol:"experto"}
function LoginUser(){
    let us=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    console.log(us)

    if(user.email==us&&user.password==pass){
          
          
            location.href="/index/AdminHome.html"
        
    }else{
        $(document).ready(function(){
            $('.toast').toast('show');
    
        });
       
    }

    if(usertutor.email==us&&usertutor.password==pass){
            
            
            location.href="/index/tutorprofile.html"
        
    }else{
        $(document).ready(function(){
            $('.toast').toast('show');

        });
    
    }

    if(userexperto.email==us&&userexperto.password==pass){
                
                
         location.href="/index/ProfesorExpertoPerfil.html"
        
    }else{
        $(document).ready(function(){
            $('.toast').toast('show');

        });

    }

    




}