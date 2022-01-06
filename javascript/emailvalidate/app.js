'use strict'
// alert("hai")
var emailvalidate = new RegExp(/^\S+@\S+\.\S+$/);

function validate() {
  var uservalue = document.getElementById('email').value;
  console.log(uservalue);
  if (emailvalidate.test(uservalue)) {
    console.log("correct");
    document.getElementById('result').innerText = `Provided E-mail Id is Valid`
  } else {
    console.log("incorrect");
    document.getElementById('result').innerHTML = `<h1 style="color:red">Invalid E-mail. Please provide a valid E-mail id</h1>`

  }

}