function convertByte() {
  var result = document.getElementById('output');
  var userValue = document.getElementById('string').value;
  var data = "";
  for (i = 0; i < userValue.length; i++) {
    var resultInbyte = userValue.charCodeAt(i);
    data += resultInbyte;
  }
  result.innerText = `The converted value is  ${data}`;
}