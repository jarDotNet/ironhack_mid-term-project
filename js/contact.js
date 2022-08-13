var okName = false;
var okEmail = false;
var okPhone = false;

function validateName(){
    let nameUser = document.getElementById("name").value;
    if(!nameUser){
        document.getElementById("errorName").hidden = false;
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name").style.borderStyle = "solid";
    }else{
        document.getElementById("errorName").hidden = true;
        document.getElementById("name").style.borderStyle = "none";
        okName = true;
   
    }  
}

function validateEmail(){
    let emailUser = document.getElementById("email").value;
    if(!emailUser){
        document.getElementById("errorEmail").hidden = false;
        document.getElementById("errorFormatEmail").hidden = true;
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.borderStyle = "solid";
    }
    else{
        document.getElementById("errorEmail").hidden = true;
        document.getElementById("email").style.borderStyle = "none";
        okEmail = true;
       
    }
    if(emailUser && !emailUser.includes('@')){
        document.getElementById("errorFormatEmail").hidden = false;
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.borderStyle = "solid";
    }
}

function validatePhone(){
    let phoneNumber = document.getElementById("phone").value;
    if(!phoneNumber){
        document.getElementById("errorPhone").hidden = false;
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("phone").style.borderStyle = "solid";
    }
    else{
        document.getElementById("errorPhone").hidden = true;
        document.getElementById("phone").style.borderStyle = "none";
        okPhone = true;
        
    }
}







function sendForm(){
  if(okName && okEmail && okPhone){
    document.getElementById("errorSubmit").hidden = true;
    alert("Thank you! Your form has been sent successfully!!");
  }else{
    document.getElementById("errorSubmit").hidden = false;
  }
}