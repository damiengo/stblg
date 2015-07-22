
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
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.linear()
                        .domain([0, 0.13])
                        .range(["orange", "midnightblue"])
                        .interpolate(d3.interpolateLab);

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
    var lineData = [ {"x": fieldStartX,            "y": fieldStartY},
                     {"x": fieldStartX+fieldWidth, "y": fieldStartY},
                     {"x": fieldStartX+fieldWidth, "y": fieldStartY+fieldHeight},
                     {"x": fieldStartX,            "y": fieldStartY+fieldHeight},
                     {"x": fieldStartX,            "y": fieldStartY},
                     // Penalty area
                     {"x": fieldStartX+(fieldWidth/4.77), "y": fieldStartY},
                     {"x": fieldStartX+(fieldWidth/4.77), "y": fieldStartY+(fieldHeight/3.06)},
                     {"x": fieldStartX+(fieldWidth/1.26), "y": fieldStartY+(fieldHeight/3.06)},
                     {"x": fieldStartX+(fieldWidth/1.26), "y": fieldStartY},
                     // Goalkeeper area
                     {"x": fieldStartX+(fieldWidth/2.71),     "y": fieldStartY},
                     {"x": fieldStartX+(fieldWidth/2.71),     "y": fieldStartY+(fieldHeight/8.89)},
                     {"x": fieldStartX+(fieldWidth/1.58),     "y": fieldStartY+(fieldHeight/8.89)},
                     {"x": fieldStartX+(fieldWidth/1.58),     "y": fieldStartY},
                     // Goal
                     {"x": fieldStartX+(fieldWidth/2.27),     "y": fieldStartY},
                     {"x": fieldStartX+(fieldWidth/2.27),     "y": fieldStartY-(fieldHeight/112)},
                     {"x": fieldStartX+(fieldWidth/1.79),     "y": fieldStartY-(fieldHeight/112)},
                     {"x": fieldStartX+(fieldWidth/1.79),     "y": fieldStartY}];
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
                  .attr("d", "M "+(fieldStartX+(fieldWidth/2)-(fieldWidth/10))+","+(fieldStartY+fieldHeight)+
                            " A 1,1 0 0,1"+
                              " "+(fieldStartX+(fieldWidth/2)+(fieldWidth/10))+","+(fieldStartY+fieldHeight))
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
                  .attr("d", "M "+(fieldStartX+(fieldWidth/2.53))+","+(fieldStartY+183)+
                            " A 120,120 0 0,0"+
                              " "+(fieldStartX+(fieldWidth/1.65))+","+(fieldStartY+183))
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

    var hexbin = d3.hexbin()
      .size([fieldWidth, fieldHeight])
      .radius(10);

    var headed = 0;

    var headBox = svg.append("g")
                     .on("click", function(d) {
                         if(headed == 0) {
                             d3.select(this).select("rect")
                                            .style("fill", "steelblue");
                             headed = 1;
                         }
                         else {
                             d3.select(this).select("rect")
                                            .style("fill", "transparent");
                             headed = 0;
                         }
                         loadData(headed);
                     });

    // Caption headed
    headBox.append("rect")
       .attr("width",  "15")
       .attr("height", "15")
       .attr("x", fieldStartX+fieldWidth-70)
       .attr("y", fieldStartY+fieldHeight-20)
       .attr("rx", 3)
       .attr("ry", 3)
       .style("fill", "transparent")
       .style("stroke", "steelblue")
       .style("stroke-width", "2px");

    headBox.append("text")
           .attr("x", fieldStartX+fieldWidth-50)
           .attr("y", fieldStartY+fieldHeight-7)
           .text("Tête")

    loadData(headed);

    // Loading data
    function loadData(headed) {
      d3.tsv("/data/exp_goals.tsv", function(error, data) {
        if (error) throw error;

        x.domain([d3.min(data, function(d) { return d.x; }), d3.max(data, function(d) { return d.x; })]).nice();
        y.domain([50, d3.max(data, function(d) { return d.y; })]).nice();

        data = data
        .filter(function(d) {
            return d.head == headed;
        })
        .map(function(d) {
            return [x(d.y), y(d.x), {predict: d.predict, head: d.head}];
        });
        data = hexbin(data);

        var radius = d3.scale.sqrt()
          .domain([0, 70])
          .range([0, 12]);

        // Suppression des éléments
        svg.selectAll(".hexagon").remove();

        svg.append("clipPath")
          .attr("id", "clip")
        .append("rect")
          .attr("class", "mesh")
          .attr("width", width)
          .attr("height", height);

        // Ajout des éléments
        svg.append("g")
        .attr("clip-path", "url(#clip)")
        .selectAll(".hexagon")
        .data(data)
          .enter().append("path")
            .attr("class", "hexagon")
            .attr("d", function(d) { return hexbin.hexagon(radius(d.length)); })
            .attr("transform", function(d) { return "translate(" + d.x + "," + (fieldStartY+d.y) + ")"; })
            .style("fill", function(d) {
                return color(d3.mean(d.map(function(e) {
                               return e[2].predict;
                            })));
            })
            .on("mouseover", function(d) {
                // Border color
                d3.select(this).style("stroke-width", "0.8px")
                               .style("stroke", "#FFF");
                // Legend
                legend.style("visibility", "visible");
                legend.select("rect").attr("x", d.x+15)
                                     .attr("y", d.y+5)
                                     .attr("fill", "#FFF")
                                     .attr("stroke", "#000")
                                     .attr("stroke-width", "0.3px");
                legend.select("text").attr("x", d.x+25)
                                     .attr("y", d.y+25)
                                     .text(Math.floor(d3.mean(d.map(function(e) {
                                                    return e[2].predict;
                                                 }))*10000)/100+"% ExpG / "+d.length+" tirs")
                                     .style("color", "#000");
            })
            .on("mouseout", function(d) {
                // Border color
                d3.select(this).style("stroke-width", "0.2px")
                               .style("stroke", "#000");
                // Legend
                legend.style("visibility", "hidden");
            });

            // Legend
            var legend = svg
                  .append("g")
                  .style("visibility", "hidden");

            // Legend background
            legend.append("rect")
                .attr("width", "200")
                .attr("height", "30")
                .attr("rx", 5)
                .attr("ry", 5);

            // Legend text
            legend.append("text");

      });
  };

}



/**
 * Expected goals by teams.
 *
 * @param element
 */
function expgByTeams(element) {

    // Title
    var elemTitle = d3.select(element)
        .append("p")
        .attr("class", "title")
        .style({
            "font-weight":   "bold",
            "text-align":    "center",
            "margin-bottom": "20px"
        })
        .text("fig. 2 - Tirs cadrés et buts des joueurs de L1 2014/2015 avec plus de 30 tirs");

    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 800 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.category20();

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

    // Each datas
    d3.tsv("/data/exp_goals_teams_2012_2014.tsv", function(error, data) {

      x.domain(d3.extent(data, function(d) { return parseInt(d.goal); })).nice();
      y.domain(d3.extent(data, function(d) { return parseFloat(d.predict); })).nice();

      // Equation
      // y=0.35x+28
      svg.append("line")
          .attr("x1", x(20))
          .attr("y1", y(35))
          .attr("x2", x(80))
          .attr("y2", y(56))
          .style("stroke", "black")
          .style("stroke-width", "1.5px");

        // Grids
        svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_axis()
            .tickSize(-height, 0, 0)
            .tickFormat("")
        );

        svg.append("g")
        .attr("class", "grid")
        .call(make_y_axis()
            .tickSize(-width, 0, 0)
            .tickFormat("")
        );

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .append("text")
          .attr("class", "label")
          .attr("x", width)
          .attr("y", -6)
          .style("text-anchor", "end")
          .text("Nombre de buts");

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("class", "label")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("ExpG");

      var dots = svg.selectAll(".dot")
          .data(data)
        .enter().append("g");

      // Circles
      var circles = dots.append("circle")
          .attr("class", "dot")
          .attr("r",  6)
          .attr("cx", function(d) { return x(d.goal); })
          .attr("cy", function(d) { return y(d.predict); })
          .style("fill", function(d) { return color(d.start); });

      dots
        .on("mouseover", function(d) {
          var rect = legend.select("rect");
          var txt  = legend.select("text");
          rect.attr("fill", color(d.start));
          txt.attr("x", x(d.goal) + 20)
             .attr("y", y(d.predict) + 5)
             .text(d.start+" / "+d.short_name);
          adjustRect(rect[0][0], txt[0][0]);
          d3.select(this).select("circle").attr("r", 8);
          legend.style("visibility", "visible");
        })
        .on("mouseout", function(d) {
          d3.select(this).select("circle").attr("r", 6);
          legend.style("visibility", "hidden");
        });

      // Legend
      var legend = svg
            .append("g")
            .style("visibility", "hidden");

      // Legend background
      legend.append("rect")
          .attr("width", "100")
          .attr("height", "100")
          .attr("rx", 5)
          .attr("ry", 5);

      // Legend text
      legend.append("text");

    });

    /**
     * Adjust rect from text.
     *
     * @param rect
     * @param text
     */
    function adjustRect(rect, text) {
      var padding = 5;
      var bbox = text.getBBox();
      var rectX = bbox.x;
      // If far to the right
      if((bbox.x + bbox.width) > 750) {
        rectX = bbox.x - bbox.width - 40;
        text.setAttribute("x", rectX);
      }
      rect.setAttribute("x",rectX - padding)
      rect.setAttribute("y",bbox.y - padding )
      rect.setAttribute("width",bbox.width + 2*padding)
      rect.setAttribute("height",bbox.height + 2*padding)
    };

    /**
     * Creates X axis.
     */
    function make_x_axis() {
        return d3.svg.axis()
            .scale(x)
             .orient("bottom")
             .ticks(12);
    };

    /**
     * Creates Y axis.
     */
    function make_y_axis() {
        return d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(7);
    };

}
