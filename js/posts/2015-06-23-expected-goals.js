
/**
 * Displays expected goals on the field.
 *
 * @param element
 */
function expgField(element) {

    // Title
    var elemTitle = d3.select(element)
        .append("p")
        .attr("class", "title")
        .style({
            "font-weight":   "bold",
            "text-align":    "center",
            "margin-bottom": "20px"
        })
        .text("fig. 1 - ExpG selon la position du tir");

    var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

    var x = d3.scale.linear()
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

    var svg = d3.select(element).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var rectangle = svg.append("rect")
                              .attr("x",   0)
                                .attr("y", 0)
                                .attr("width", width)
                                .attr("height", height)
                                .attr("fill", "green");

    d3.tsv("/data/exp_goals.tsv", function(error, data) {
      if (error) throw error;

      var grData = d3.nest()
          .key(function(d) { return Math.floor(d.x); })
          .key(function(d) { return Math.floor(d.y); })
          .rollup(function(l){
              return {
                  "length" : l.length,
                  "mean"   : d3.mean(l, function(d) {return d.predict;})
              }
          })
          .entries(data)
          .map(function(d) {
              var x = d.key;
              var values = d.values.map(function(e) {
                  var y = e.key;
                  var ret = {
                      "x":      x,
                      "y":      y,
                      "length": e.values.length,
                      "mean":   e.values.mean
                  };
                  return ret;
              });
              return values;
          });

      data = grData.reduce(function(prev, curr, index, arr) {
          return prev.concat(curr);
      }, []);

      var colours = ["#6363FF", "#6373FF", "#63A3FF", "#63E3FF", "#63FFFB", "#63FFCB",
           "#63FF9B", "#63FF6B", "#7BFF63", "#BBFF63", "#DBFF63", "#FBFF63",
           "#FFD363", "#FFB363", "#FF8363", "#FF7363", "#FF6364"];

      var heatmapColour = d3.scale.linear()
         .domain(d3.range(0, 1, 1.0 / (colours.length - 1)))
         .range(colours);

      // dynamic bit...
      var c = d3.scale.linear()
                      .domain([d3.min(data, function(d) { return d.mean }), d3.max(data, function(d) { return d.mean })])
                      .range([0,1]);

      x.domain([d3.min(data, function(d) { return d.x; }), d3.max(data, function(d) { return d.x; })]).nice();
      y.domain([50, d3.max(data, function(d) { return d.y; })]).nice();

      svg.selectAll(".dot")
          .data(data)
        .enter().append("circle")
          .attr("class", "dot")
          .attr("r", 3.5)
          .attr("cx", function(d) { return x(d.y); })
          .attr("cy", function(d) { return y(d.x); })
          .style("fill", function(d) { return heatmapColour(c(d.mean)); });

    });

}
