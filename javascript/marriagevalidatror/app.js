function validate() {
  console.log("data");
  var bride = document.getElementById("brideAge").value;
  var groom = document.getElementById("groomAge").value;
  var result = document.getElementById("result");
  if (bride >= 18 && groom >= 21) {
    result.innerText = "Valid Marraige"
  } else {
    result.innerHTML = "Invalid Marraige"
  }
}