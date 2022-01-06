var value = 0;
function getDetails() {
  console.log("inside");
  var selected = document.getElementById('event').value;
  var result = document.getElementById('result');
  var heading = document.getElementById('heading');

  if (selected === 'wedding') {
    result.style.display = "block";
    heading.innerText = "Weddings"
    value = 1;
  } else {
    result.style.display = "block";
    heading.innerText = "Corporate Events"
    value = 2;
  }
}

var eventsa = [];
var object = {}

function addEvents() {
  var message = document.getElementById("successMessage");
  var days = document.getElementById("noOfDays").value;
  var date = document.getElementById("startDate").value;
  var organizer = document.getElementById("organizerName").value;
  var number = document.getElementById("mobileNumber").value;
  if (value === 1) {
    message.innerText = "Event added successfully"
    console.log(days, date, organizer, number);
    object.name = organizer;
    object.number = number;
    object.days = days;
    object.startdate = date;
    eventsa.push(object);
    console.log(eventsa);
  } else if (value === 2) {
  }
  message.innerText = "Event added successfully"
  console.log(days, date, organizer, number);
}

function displayEvents() {
  console.log(clicked);
  <table id="eventTable">
    <thead>
      <th>Name</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Organizer</th>
      <th>Mobile No</th>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
}