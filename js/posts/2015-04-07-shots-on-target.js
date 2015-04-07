
/**
 * Displays SoT by teams.
 *
 * @param element
 */
function sotByTeams(element) {
    
    // Title
    var elemTitle = d3.select(element)
        .append("p")
        .attr("class", "title")
        .style({
            "font-weight":   "bold",
            "text-align":    "center", 
            "margin-bottom": "20px"
        })
        .text("fig. 1 - % Tirs cadrés par équipe");

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

    d3.tsv("/data/sot_teams_d31_2015.tsv", type, function(error, data) {
      x.domain(data.map(function(d) { return d.short_name; }));
      y.domain([d3.min(data, function(d) { return d.percentage; }) - 0.01, 
                d3.max(data, function(d) { return d.percentage; })
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
          .text("Tirs cadrés");
        
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
          .attr("y", function(d) { return y(d.percentage); })
          .attr("height", function(d) { return height - y(d.percentage); });
        
        
      // Text
      bar.append("text")
          .attr("x", function(d) { return x(d.short_name) + 16; })
          .attr("y", function(d) { return y(d.percentage) + 15; })
          .attr("fill","#FFF")
          .style({"font-size":"12px","z-index":"999999999"})
          .style("text-anchor", "middle")
          .text(function(d) { return Math.round(parseFloat(d.percentage)*100) + "%";});

    });

    function type(d) {
      d.frequency = +d.frequency;
      return d;
    }
}

/**
 * Tirs cadrés par joueurs.
 *
 * @param element
 */
function sotByPlayers(element) {
    
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
    d3.tsv("/data/sot_players_d31_2015.tsv", function(error, data) {

      x.domain(d3.extent(data, function(d) { return parseInt(d.goals); })).nice();
      y.domain(d3.extent(data, function(d) { return parseFloat(d.sot_ratio); })).nice();
    
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
          .text("Tirs cadrés");

      var dots = svg.selectAll(".dot")
          .data(data)
        .enter().append("g");
      
      // Circles
      var circles = dots.append("circle")
          .attr("class", "dot")
          .attr("r",  6)
          .attr("cx", function(d) { return x(d.goals); })
          .attr("cy", function(d) { return y(d.sot_ratio); })
          .style("fill", function(d) { return color(d.name); });

      dots
        .on("mouseover", function(d) {
          var rect = legend.select("rect");
          var txt  = legend.select("text");
          rect.attr("fill", color(d.name));
          txt.attr("x", x(d.goals) + 20)
             .attr("y", y(d.sot_ratio) + 5)
             .text(d.name+" ("+Math.round(parseFloat(d.sot_ratio)*100)+"%/"+d.goals+" buts)");
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
