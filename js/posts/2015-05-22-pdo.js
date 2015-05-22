
/**
 * Displays PDO by teams.
 *
 * @param element
 */
function pdoByTeams(element) {
    
    // Title
    var elemTitle = d3.select(element)
        .append("p")
        .attr("class", "title")
        .style({
            "font-weight":   "bold",
            "text-align":    "center", 
            "margin-bottom": "20px"
        })
        .text("fig. 1 - PDO par équipe");

    var margin = {top: 20, right: 20, bottom: 40, left: 40},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10, "%");

    var svg = d3.select(element).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("/data/pdo_teams_d37_2015.tsv", type, function(error, data) {
      x.domain(data.map(function(d) { return d.short_name; }));
      y.domain([d3.min(data, function(d) { return d.pdo; }), 
                d3.max(data, function(d) { return d.pdo; })
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
          .attr("y", -35)
          .attr("x", -2)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("PDO");
        
      svg.selectAll(".x.axis text")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", ".15em")
          .attr("transform", function(d) {
              return "rotate(-30)";
        });

      var bar = svg.selectAll(".bar")
          .data(data)
        .enter().append("g");
      
      bar.append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.short_name); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.pdo); })
          .attr("height", function(d) { return height - y(d.pdo); });        
        
      // Text
      bar.append("text")
          .attr("x", function(d) { return x(d.short_name) + 16; })
          .attr("y", function(d) { return y(d.pdo) + 15; })
          .attr("fill","#FFF")
          .style({"font-size":"12px","z-index":"999999999"})
          .style("text-anchor", "middle")
          .text(function(d) { return Math.round(parseFloat(d.pdo)*100) + "%";});

    });

    function type(d) {
      d.frequency = +d.frequency;
      return d;
    }
}
