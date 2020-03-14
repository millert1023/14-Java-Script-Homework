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
  var inputElement = document.getElementsByClassName("form-control");
  var filteredData = tableData
  console.log(filteredData);

  // Iterate through all the input fields

  for (var i = 0; i < inputElement.length; i++) {
      var elementName = inputElement[i].id;
      var inputValue = d3.select("#" + elementName).property("value");

      if (inputValue.trim() !== "") {
          var filteredData = filteredData.filter(alienSighting => alienSighting[elementName]
            .toUpperCase().trim() === inputValue.toUpperCase().trim());
      };
  };


  console.log(inputValue);
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