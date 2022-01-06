'use strict'
function registration() {
  var password = document.getElementById("password").value;
  var repassword = document.getElementById("repassword").value;
  var success = document.getElementById('success')
  var fail = document.getElementById('fail')
  // console.log(repassword, password);
  var regexs = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
  if (password == repassword) {
    console.log("matcheds")
    if (regexs.test(repassword)) {
      console.log("matched")
      success.innerText = 'Login Successful'
    } else {
      console.log("failed with regex")
      fail.innerText = 'Passwords must contain at least eight characters,including uppercase,lowercase letters,numbers and special characters.'
    }
  } else {
    console.log("failed with password")
    fail.innerText = "Password and Re-Type Password doesn't match"
  }
}