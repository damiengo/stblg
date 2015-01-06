/**
 * Histogram displaying second leg points mean after first leg results.
 *
 * @param element
 * @param title
 */
function secondLegPointsHist(element, title) {
  var margin = {top: 50, right: 30, bottom: 50, left: 30},
      width = 700 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  var colors = d3.scale.category20();

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .3, 1.2);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(6);

  var svg = d3.select(element).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var data = [
      {"name": "Dom 0 point",  "value": 0.9, "color": 1}, 
      {"name": "Dom 1 point",  "value": 1,  "color": 1}, 
      {"name": "Dom 3 points", "value": 1.14, "color": 1},
      {"name": "Ext 0 point",  "value": 1.16, "color" :5},
      {"name": "Ext 1 point",  "value": 1.67, "color" :5},
      {"name": "Ext 3 points", "value": 1.81, "color" :5}
  ];
  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  svg.append("text")
      .attr("class", "title")
      .attr("x", x(data[0].name) + 40)
      .attr("y", -26)
      .text(title);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll(".tick text")
      .call(wrap, x.rangeBand());

  var bar = svg.selectAll(".bar")
      .data(data)
    .enter()
      .append("g");

  bar.append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .style("fill", function(d) { return colors(d.color); })
      .on("mouseover", function(d) {
        d3.select(this).style("fill", colors(10));
      })
      .on("mouseout", function(d) {
        d3.select(this).style("fill", function(d) { return colors(d.color); });
      });
      // Text
      bar.append("text")
      .classed('data', true)
      .attr("x", function(d) { return x(d.name) + 28; })
      .attr("y", function(d) { return y(d.value) + 20; })
      .attr("fill","#000")
      .style({"font-size":"12px","z-index":"999999999"})
      .style("text-anchor", "middle")
      .text(function(d) { return d.value;});

  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }
}

/**
 * Arc diagram displaying by points percentage after first leg.
 *
 * @param element
 * @param data
 * @param title
 */
function secondLegPointsPercentage(element, data, title) {
    var width = 200,
        height = 200,
        radius = Math.min(width, height) / 2;

    var color = d3.scale.category20();
    
    var outerRadius = radius - 10;
    var innerRadius = radius / 2;

    var arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);

    var pie = d3.layout.pie()
        .value(function (d) {
        return d;
    })
        .sort(function (a, b) {
        return b - a;
    });
    
    // Main block to center elements
    var mainBlock = d3.select(element);
    
    // Title
    var svgTitle = mainBlock
        .append("p")
        .attr("class", "title")
        .style({
            "text-align": "center", 
            "margin-bottom": "20px"
        })
        .text(title);

    // Legend
    var svgLegend = mainBlock
        .append("div")
        .append("svg")
        .attr("height", 50)
        .attr("width", 335)
        .append("g");
    
    svgLegend.append("rect")
             .attr("height", 20)
             .attr("width", 30)
             .attr("x", 0)
             .attr("y", 0)
             .attr("rx", 5)
             .attr("ry", 5)
             .style("fill", color(0));

    svgLegend.append("text")
             .attr("x", 65)
             .attr("y", 0)
             .attr("dy", "15px")
             .attr("text-anchor", "middle")
             .style({"font-size":"12px","z-index":"999999999"})
             .text("0 point");
    
    svgLegend.append("rect")
             .attr("height", 20)
             .attr("width", 30)
             .attr("x", 120)
             .attr("y", 0)
             .attr("rx", 5)
             .attr("ry", 5)
             .style("fill", color(1));

    svgLegend.append("text")
             .attr("x", 185)
             .attr("y", 0)
             .attr("dy", "15px")
             .attr("text-anchor", "middle")
             .style({"font-size":"12px","z-index":"999999999"})
             .text("1 point");
    
    svgLegend.append("rect")
             .attr("height", 20)
             .attr("width", 30)
             .attr("x", 240)
             .attr("y", 0)
             .attr("rx", 5)
             .attr("ry", 5)
             .style("fill", color(2));

    svgLegend.append("text")
             .attr("x", 305)
             .attr("y", 0)
             .attr("dy", "15px")
             .attr("text-anchor", "middle")
             .style({"font-size":"12px","z-index":"999999999"})
             .text("3 points");
    
    // Pies
    var svg = mainBlock
        .selectAll("svg.pies")
        .data(data.details)
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Pie legend
    svg.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function (d) {
          return d.name;
        });

    var g = svg.selectAll("g")
        .data(function (d) {
          return pie(d.values.map(function(d) { return d.value; }));
        })
        .enter().append("g");

    g.append("path")
        .attr("d", arc)
        .style("fill", function (d, i) {
          return color(i);
        })
        // Color effect
        .on("mouseover", function(d) {
          d3.select(this).style("fill", "#393b79");
        })
        .on("mouseout", function(d, i) {
          d3.select(this).style("fill", color(i));
        });
    
    // Percentages
    g.append("text")
        .attr("transform", function(d) { 
          d.outerRadius = outerRadius-20; // Set Outer Coordinate
          d.innerRadius = innerRadius-20; // Set Inner Coordinate
          return "translate(" + arc.centroid(d) + ")";
        })
        .classed('data', true)
        .attr("fill","#FFF")
        .style({"font-size":"12px","z-index":"999999999"})
        .style("text-anchor", "middle")
        .text(function(d) { return d.value+"%";});
    
}
