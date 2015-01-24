/**
 * Generating the ranking board with histogram.
 *
 * @param element
 * @param title
 * @param datas
 */
function ranking_hist(element, title, datas) {
    
    var width = 400, 
        height = 22;
    
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
        .style({"width": "150px"})
            .html(function(d) { return d.short_name; });
    
    // Points
    rows.append("td")
        .style({"width": "100px"})
        .html(function(d) { return d.points_for; });
    
    // Team TSR
    rows.append("td")
        .style({"font-weight": "bold", "width": "100px"})
        .html(function(d) { return d.tsr_for; });
    
    // Graph TSR
    rows.append("td")
          .append("svg")
          .attr("height", height)
          .attr("width", width)
            .append("g")
              .append("rect")
              .attr("x", 10)
              .attr("y", 4)
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

/**
 * Generating the TSR graph by teams.
 *
 * @param element
 * @param title
 * @param datas
 */
function tsr_graph(element, title, datas) {
    
    var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var parseDate = d3.time.format("%Y%m%d").parse;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d, i) { return x(i); })
        .y(function(d, i) { return y(d.tsr_for); });

    var svg = d3.select(element).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("/data/"+datas, function(error, data) {
        var nested = d3.nest().key(function(d) { return d.short_name; })
                              .entries(data);
        console.log(nested);

      x.domain(d3.extent(data, function(d, i) { return i; }));

      y.domain([
        d3.min(nested, function(c) { return d3.min(c.values, function(v) { return v.tsr_for; }); }),
        d3.max(nested, function(c) { return d3.max(c.values, function(v) { return v.tsr_for; }); })
      ]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("TSR");

      var city = svg.selectAll(".city")
          .data(nested)
        .enter().append("g")
          .attr("class", "city");

      city.append("path")
          .attr("class", "line")
          .attr("d", function(d) { return line(d.tsr_for); })
          .style("stroke", function(d) { return color(d.tsr_for); });

    });
}
