function validate() {
  var regex = new RegExp('/^[a-zA-Z]+$/');
  var userValue = document.getElementById('text').value;
  var result = document.getElementById('result');
  console.log(userValue);
  if (regex.test(userValue)) {
    result.innerText = "Entered text doesn't contains only alphabets"
  } else {
    result.innerText = 'Entered text contains only alphabets'
  }
}
