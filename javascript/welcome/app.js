'use strict'

function welcome() {
  var username = document.getElementById('name').value
  console.log(username);
  document.getElementById('value').innerText = "welcome " + username;
}
