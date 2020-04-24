d3.select("body").append("table")
window.onload = function() {

 
    const table = d3.select("#ufo-table")
    table.html("")

    let theDatetime  = d3.select("#datetime").property("value")
    console.log(theDatetime)
    let filterData=data // first loads all data        
    const thead = table.append("thead")
    const head_row = thead.append("tr")
    const tbody = table.append("tbody")

    head_row.append("th").text("Date")
    head_row.append("th").text("City")
    head_row.append("th").text("State")
    head_row.append("th").text("Country")
    head_row.append("th").text("Shape")
    head_row.append("th").text("Duration")
    head_row.append("th").text("Comments")

    filterData.forEach(record => {
        let row = tbody.append("tr")   
        row.append("td").text(record.datetime)
        row.append("td").text(record.city)
        row.append("td").text(record.state)
        row.append("td").text(record.country)
        row.append("td").text(record.shape)
        row.append("td").text(record.durationMinutes)
        row.append("td").text(record.comments)
    })
};
d3.select("#filter-btn").on("click", function(){

    const table = d3.select("#ufo-table")
    table.html("")

    let theDatetime  = d3.select("#datetime").property("value")

    console.log(theDatetime)
    
    let filterData=data.filter(e => e.datetime===theDatetime)
    console.log(data.filter(e => e.datetime===theDatetime))

    console.log(filterData)
    
    const thead = table.append("thead")
    const head_row = thead.append("tr")
    const tbody = table.append("tbody")

    head_row.append("th").text("Date")
    head_row.append("th").text("City")
    head_row.append("th").text("State")
    head_row.append("th").text("Country")
    head_row.append("th").text("Shape")
    head_row.append("th").text("Duration")
    head_row.append("th").text("Comments")

    filterData.forEach(record => {
        let row = tbody.append("tr")   
        row.append("td").text(record.datetime)
        row.append("td").text(record.city)
        row.append("td").text(record.state)
        row.append("td").text(record.country)
        row.append("td").text(record.shape)
        row.append("td").text(record.durationMinutes)
        row.append("td").text(record.comments)
    })
});
