function generate() {
  var value = document.getElementById("number").value;
  var result = document.getElementById('result');
  for (let i = 1; i < 11; i++) {
    result.innerHTML += `${i}*${value}=${i * value}<br/>`;
  }
}