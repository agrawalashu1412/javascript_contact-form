function validation(){
var name = document.getElementById("name").value; 
var subject = document.getElementById("subject").value; 
var phone = document.getElementById("phone").value; 
var email = document.getElementById("email").value; 
var message = document.getElementById("message").value; 
var error_message = document.getElementById("error_message"); 
var text;

error_message.style.padding = "10px";

if(name.length <5){
    text = "Please enter valid Name";
    error_message.innerHTML = text;
    return false;
}

if(subject.length <10){
    text = "Please enter valid subject";
    error_message.innerHTML = text;
    return false;
}

if(isNaN(phone) || phone.length != 10){
    text = "Please enter valid Phone No.";
    error_message.innerHTML = text;
    return false;
}

if(email.indexOf("@") == -1 || email.length  <6){
    text = "Please enter valid Email Address";
    error_message.innerHTML = text;
    return false;
}

if(message.length <= 40){
    text = "Please enter more than 40 characters";
    error_message.innerHTML = text;
    return false;
}

alert("form submitted successfully")

return true;
}