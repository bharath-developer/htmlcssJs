function convert() {
  console.log("data");
  var result = document.getElementById('result');
  let data = "";
  var userValue = document.getElementById('text').value;
  data = userValue.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  var output = "";
  for (let i = 0; i < data.length; i++) {
    console.log(i);
    output += " <br />" + data.charAt(i);
  }
  result.innerHTML = `The converted value is  ${output}`;
}
