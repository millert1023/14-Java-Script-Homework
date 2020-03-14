// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Loop Through `data` and console.log each alien sighting object
tableData.forEach(function(alienSighting) {
  console.log(alienSighting);
  var row = tbody.append("tr");

// Use d3 to append each cell's value with the alien sightings

  Object.entries(alienSighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
    
});


 // Select the button
var button = d3.select("#filter-btn");
var empty = d3.select("tbody")

button.on("click", function() {
  empty.html("")
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(date => date.datetime === inputValue);
  console.log(filteredData);

  filteredData.forEach(function(filteredReport) {
    console.log(filteredReport);
    var row = tbody.append("tr");

  // Use d3 to append each cell's value with the alien sightings
    Object.entries(filteredReport).forEach(function([key, value]){
      console.log(key,value);
      var cell = tbody.append("td");
      cell.text(value)
    })

  });
});