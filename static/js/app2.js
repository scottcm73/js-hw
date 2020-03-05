const button = d3.select("#filter-btn");
const input = d3.select("#form-control")


const table = d3.select("#ufo-table")
const tbody = table.append("tbody")

const handler = function () {


const tableData = data;
  let datetime = d3.select("#datetime").property("value")
  console.log(datetime)
  // Use the form input to filter the data by date
  filterData = tableData.filter(e => e.datetime === datetime)
  filterData.forEach(e => {
    let row = tbody.append("tr")
    row.append("td").text(e.datetime)
    row.append("td").text(e.city)
    row.append("td").text(e.state)
    row.append("td").text(e.country)
    row.append("td").text(e.shape)
    row.append("td").text(e.durationMinutes)
    row.append("td").text(e.comments)
  })
}
// Complete the click handler for the form
button.on("click", handler)
