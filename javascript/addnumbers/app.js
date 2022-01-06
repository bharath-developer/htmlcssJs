'use strict'
// alert("data");
function add() {
  var value1 = document.getElementById('weddingEvent').value;
  var value2 = document.getElementById('corporateEvent').value;
  console.log(value1, value2);
  document.getElementById("output").innerHTML = +value1 + +value2;
}