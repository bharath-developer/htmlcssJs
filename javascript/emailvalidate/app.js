'use strict'
// alert("hai")
var emailvalidate = new RegExp(/^\S+@\S+\.\S+$/);

function validate() {
  var uservalue = document.getElementById('email').value;
  var color = document.getElementById('result')
  if (emailvalidate.test(uservalue)) {
    color.classList.add('success')
    color.innerText = `Provided E-mail Id is Valid`
  } else {
    color.classList.add('fail')
    color.innerText = `Invalid E-mail. Please provide a valid E-mail id`

  }

}