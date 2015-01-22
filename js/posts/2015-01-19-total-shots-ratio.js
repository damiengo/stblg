
/**
 * Generating the ranking board with histogram.
 *
 * @param element
 * @param title
 */
function ranking_hist(element, title, datas) {
    
    var width = 400, 
        height = 20;
    
    var colors = d3.scale.category20();
    
    var x = d3.scale.linear()
    .range([0, width]);

    var table = d3.select(element)
               .append("table");
    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // append the header row
    thead.append("tr")
        .selectAll("th")
        .data(["Equipe", "Points", "TSR", ""])
        .enter()
        .append("th")
            .text(function(column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(datas)
        .enter()
        .append("tr");

    // Team name
    var cells = rows
        .append("td")
            .html(function(d) { return d.short_name; });
    
    // Points TSR
    rows.append("td")
        .html(function(d) { return d.points_for; });
    
    // Team TSR
    rows.append("td")
        .style("font-weight", "bold")
        .html(function(d) { return d.tsr_for; });
    
    // Graph TSR
    rows.append("td")
          .append("svg")
          .attr("height", height)
          .attr("width", width)
            .append("g")
              .append("rect")
              .attr("width", function(d) { return x(d.tsr_for); })
              .attr("height", height - 1)
              .style("fill", colors(1))
              .on("mouseover", function(d) {
                d3.select(this).style("fill", colors(20));
              })
              .on("mouseout", function(d) {
                d3.select(this).style("fill", function(d) { return colors(1); });
              });
    
    return table;
}
