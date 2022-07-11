const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const rbutton = document.querySelectorAll(".language");

// validate the form
form.addEventListener('submit',(e)=>{
  let messages = []
  if(name.value === '' || name.value == null) {
    messages.push('Please enter your name')
  }
if(password.value.length <=6 ){
  messages.push('Password must be longer than 6 characters')
}
if(password.value.length >=30 ){
  messages.push('Password must be less than 30 characters')
  
  
}
if(rbutton.value === '' ){
  messages.push('Please select a language')
  
  
}
if(password.value === "password" || password.value === "Password" || password.value === "name"){
  messages.push('Password cannot be "password, or your name"')
}


  if(messages.length > 0) {
e.preventDefault()
errorElement.innerText = messages.join(', ')
  }

})

//for radio buttons

function validate(){
  let valid = false;
  let list = document.querySelectorAll('.language');
  for(let i=0; i < list.length; i++){
    if(list[i].checked){
      valid = true;
      break;
    }
    // if (valid) {
    //   let message = [];
    //   message.push(`You have selected ${list[i].value}`);
    //   // message.push(`You have selected ${list[i].value}`);
    // }
  }
  if (valid) {
    alert("You have selected your preferred language")
  } else{
    alert("Please select a language");
    return false;
  }

  
}
validate();



