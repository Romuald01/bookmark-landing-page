
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


// form validation


function validation(){
var email = document.getElementById("email").value;
if(email == ""){
  document.getElementById("emailErrorMessage").innerHTML = "Whoops, make sure it's an email";
return false;
}
if (email.indexOf('@') <=0){
  document.getElementById("emailErrorMessage").innerHTML = "** @ Invalid position";
  return false
}
}