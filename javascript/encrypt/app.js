function encryptData() {
  var result = document.getElementById('result');
  var values = document.getElementById('input').value;
  var data = "";
  for (i = 0; i < values.length; i++) {
    var resultInbyte = values.charCodeAt(i);
    data += String.fromCharCode(resultInbyte + 3);
  }
  result.innerText = `The converted value is ${data}`;
}

