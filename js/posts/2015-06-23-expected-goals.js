
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

    var margin = {top: 0, right: 0, bottom: 0, left: 0},
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
                            .attr("fill", "#00FF99");

    var fieldStartX = 20;
    var fieldStartY = 20;
    var fieldWidth = width - fieldStartX * 2;
    var fieldHeight = height - fieldStartY * 2;

    // The field lines
    var lineData = [ {"x": fieldStartX,       "y": fieldStartY},
                     {"x": fieldStartX+fieldWidth, "y": fieldStartY},
                     {"x": fieldStartX+fieldWidth, "y": fieldStartY+fieldHeight},
                     {"x": fieldStartX, "y": fieldStartY+fieldHeight},
                     {"x": fieldStartX, "y": fieldStartY},
                     // Penalty area
                     {"x": fieldStartX+193, "y": fieldStartY},
                     {"x": fieldStartX+193, "y": fieldStartY+183},
                     {"x": fieldStartX+727, "y": fieldStartY+183},
                     {"x": fieldStartX+727, "y": fieldStartY},
                     // Goalkeeper area
                     {"x": fieldStartX+339,     "y": fieldStartY},
                     {"x": fieldStartX+339,     "y": fieldStartY+63},
                     {"x": fieldStartX+581,     "y": fieldStartY+63},
                     {"x": fieldStartX+581,     "y": fieldStartY},
                     // Goal
                     {"x": fieldStartX+405,     "y": fieldStartY},
                     {"x": fieldStartX+405,     "y": fieldStartY-5},
                     {"x": fieldStartX+515,     "y": fieldStartY-5},
                     {"x": fieldStartX+515,     "y": fieldStartY}];
    var lineFunction = d3.svg.line()
                             .x(function(d) { return d.x; })
                             .y(function(d) { return d.y; })
                             .interpolate("linear");
    var lineGraph = svg.append("path")
                        .attr("d", lineFunction(lineData))
                        .attr("stroke", "#FFF")
                        .attr("stroke-width", 2)
                        .attr("fill", "none");

    // The center circle arc
    svg.append("path")
                  .attr("d", "M "+(fieldStartX+(fieldWidth/2)-92.5)+","+(fieldStartY+fieldHeight)+
                            " A 1,1 0 0,1"+
                              " "+(fieldStartX+(fieldWidth/2)+92.5)+","+(fieldStartY+fieldHeight))
                  .style("stroke-opacity", 1)
                  .style("stroke-width", 2)
                  .style("fill-opacity", 0)
                  .style("stroke", "#FFF");

    // The engaging point
    svg.append("path")
                  .attr("d", "M "+(fieldStartX+(fieldWidth/2)-3)+","+(fieldStartY+fieldHeight)+
                            " A 1,1 0 0,1"+
                              " "+(fieldStartX+(fieldWidth/2)+3)+","+(fieldStartY+fieldHeight))
                  .style("stroke-opacity", 1)
                  .style("stroke-width", 2)
                  .style("fill-opacity", 1)
                  .style("fill", "#FFF")
                  .style("stroke", "#FFF");

    // The penalty area circle arc
    svg.append("path")
                  .attr("d", "M "+(fieldStartX+364)+","+(fieldStartY+183)+
                            " A 120,120 0 0,0"+
                              " "+(fieldStartX+556)+","+(fieldStartY+183))
                  .style("stroke-opacity", 1)
                  .style("stroke-width", 2)
                  .style("fill-opacity", 0)
                  .style("stroke", "#FFF");

    // The penalty point
    var circleSelection = svg.append("circle")
                         .attr("cx", fieldStartX+(fieldWidth/2))
                         .attr("cy", fieldStartY+125)
                         .attr("r", 2)
                         .style("stroke-opacity", 1)
                         .style("stroke-width", 2)
                         .style("fill-opacity", 1)
                         .style("fill", "#FFF")
                         .style("stroke", "#FFF");

     // The corner 1 arc
     svg.append("path")
                   .attr("d", "M "+(fieldStartX+5)+","+(fieldStartY)+
                             " A 5,5 0 0,1"+
                               " "+(fieldStartX)+","+(fieldStartY+5))
                   .style("stroke-opacity", 1)
                   .style("stroke-width", 2)
                   .style("fill-opacity", 0)
                   .style("stroke", "#FFF");

      // The corner 2 arc
      svg.append("path")
             .attr("d", "M "+(fieldStartX+fieldWidth-5)+","+(fieldStartY)+
                       " A 5,5 0 0,0"+
                         " "+(fieldStartX+fieldWidth)+","+(fieldStartY+5))
             .style("stroke-opacity", 1)
             .style("stroke-width", 2)
             .style("fill-opacity", 0)
             .style("stroke", "#FFF");

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

      var colours = colorbrewer.Purples[8];

      var heatmapColour = d3.scale.linear()
         .domain(d3.range(0, 1, 1.0 / (colours.length - 1)))
         .range(colours);

      // dynamic bit...
      var c = d3.scale.linear()
                      .domain([d3.min(data, function(d) { return d.mean }), d3.max(data, function(d) { return d.mean })])
                      .range([0,1]);

      var maxLen = 10;
      var lengthes = d3.scale.linear()
                      .domain([d3.min(data, function(d) { return d.length }), d3.max(data, function(d) { return d.length })])
                      .range([0, 30]);

      x.domain([d3.min(data, function(d) { return d.x; }), d3.max(data, function(d) { return d.x; })]).nice();
      y.domain([50, d3.max(data, function(d) { return d.y; })]).nice();

      svg.selectAll(".dot")
          .data(data)
        .enter().append("rect")
          .attr("class", "dot")
          .attr("rx", 5)
          .attr("ry", 5)
          .attr("width", function(d) { return (lengthes(d.length) > maxLen)? maxLen : lengthes(d.length); })
          .attr("height", function(d) { return (lengthes(d.length) > maxLen)? maxLen : lengthes(d.length); })
          .attr("x", function(d) { return x(d.y); })
          .attr("y", function(d) { return fieldStartY+y(d.x); })
          .style("fill", function(d) { return heatmapColour(c(d.mean)); });

    });

}

/*
Field path:
-----------
1: M 16,350
2: H 464.00000000000006
3: V 16
4: H 16
5: V 350
6: M 16,86.47399999999999 (ligne but)
7: L 92.16000000000001,86.47399999999999 (angle 1)
8: L 92.16000000000001,279.526 (angle 2)
9: L 16,279.526 (ligne but)
10: M 16,138.912 (6m 1)
11: L 41.984,138.912 (6m 1)
12: L 41.984,227.08800000000002 (6m 1)
13: L 16,227.08800000000002 (6m 1)
14: M 92.16000000000001,147.7296
15: C 110.08000000000001,164.4296
      110.08000000000001,201.5704
      92.16000000000001,218.27040000000002
    M 240.00000000000003,16
    V 350 (ligne médiane)
    M 464.00000000000006,86.47399999999999
    L 387.84000000000003,86.47399999999999 (surf 2)
    L 387.84000000000003,279.526 (surf 2)
    L 464.00000000000006,279.526 (surf 2)
    M 464.00000000000006,138.912 (6m 2)
    L 438.0160000000001,138.912 (6m 2)
    L 438.0160000000001,227.08800000000002 (6m 2)
    L 464.00000000000006,227.08800000000002 (6m 2)
M 387.84000000000003,147.7296
C 369.92,164.4296
  369.92,201.5704
  387.84000000000003,218.27040000000002
*/
