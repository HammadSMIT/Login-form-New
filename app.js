function Signup(){
    var SEmail = document.getElementById("Signup-Email");
    var SPass = document.getElementById("Signup-Password");
    if(SEmail.value == "" || SPass.value == ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the field",
           
          });
    }else{
    localStorage.setItem("Email",SEmail.value);
    localStorage.setItem("Password",SPass.value);
    window.location = "./signin.html"
}
}


function Login(){
    var LEmail = document.getElementById("Login-Email").value;
    var LPass = document.getElementById("Login-Password").value;
    if(LEmail == localStorage.getItem("Email") && LPass == localStorage.getItem("Password")){
       alert("Login Successfull")
        window.location = "./welcome.html"
    }else{
      
        alert("Please Sign Up again")
        
        window.location = "./index.html",
        localStorage.clear()
      
    }  
}
 
function Logout(){
 localStorage.clear()
 window.location = "./index.html"
}
    

 
    



