
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
        .orient("left");

    var svg = d3.select(element).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("/data/pdo_teams_d38_2015.tsv", type, function(error, data) {
      x.domain(data.map(function(d) { return d.short_name; }));
      y.domain([890, 1100]);

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
          .text(function(d) { return d.pdo; });

    });

    function type(d) {
      d.frequency = +d.frequency;
      return d;
    }
}


/**
 * Generating the PDO graph by team by day.
 *
 * @param element
 */
function pdoByDays(element) {
    
    // Title
    var elemTitle = d3.select(element)
        .append("p")
        .attr("class", "title")
        .style({
            "font-weight":   "bold",
            "text-align":    "center", 
            "margin-bottom": "20px"
        })
        .text("fig. 2 - PDO par journées pour chaque équipe");
    
    // Datas
    d3.tsv("/data/pdo_by_days_2014.tsv", function(error, data) {
        // Grouping by team name
        data = d3.nest()
                   .key(function(d) { return d.short_name; })
                   .entries(data)
                   .map(function(d) { 
                       return {
                           'name': d.key, 
                           'values': d.values.map(function(d, i, a) {
                                return d.pdo;
                           })
                        }; 
                   });

        var margin = {top: 20, right: 80, bottom: 30, left: 50},
        width = 800 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .domain([1, d3.max(data, function(d) { return d.values.length; })])
            .range([0, width]);

        var y = d3.scale.linear()
            .domain([700, 1400])
            .range([height, 0]);

        var color = d3.scale.category20()
            .domain(d3.keys(data[0]).filter(function(key) { return key === "name"; }));

        var xAxis = d3.svg.axis()
            .scale(x)
            .tickFormat(d3.format('d'))
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var line = d3.svg.line()
            .interpolate("basis")
            .x(function(d, i) { return x(i+1); })
            .y(function(d, i) { return y(d); });

        // Graph
        var svg = d3.select(element).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + y(700) + ")")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis);

          svg.selectAll(".y line")
              .attr('class', 'grid')
              .attr("x2", width);

          svg.selectAll(".x line")
              .attr('class', 'grid')
              .attr("y2", height)
              .attr("transform", "translate(0," + (-y(700)) + ")");

          svg.selectAll(".x text")
              .attr("transform", "translate(-5, -4)"); 

          var team = svg.selectAll(".team")
              .data(data)
            .enter().append("g")
              .attr("class", "team");

          var pathes = team.append("path")
              .attr("class", "line")
              .attr("d", function(d) { return line(d.values); })
              .style("stroke", function(d) { return color(d.name); });
        
        // Team list
        var div = d3.select(element).append("div")
                      .append("ul");
        
        var teams = div.selectAll("li")
           .data(data)
           .enter()
           .append("li")
               .style({ "border-left": function(d) { return "4px solid "+color(d.name); }, 
                        "padding": "0 8px 0 4px", 
                        "color":   "steelblue", 
                        "cursor":  "default"
                      })
               .html(function(d) { return d.name; })
               .on("mouseover", function(d) {
                   pathes.filter(function(t) { return d.name == t.name }).style("stroke-width", "4.5px");
                   pathes.filter(function(t) { return d.name != t.name }).style("stroke-opacity", "0.3");
                   d3.select(this).style({ "background-color": function(d) { return color(d.name); } });
                   d3.select(this).style({ "color": "#FFF" });
               })
               .on("mouseout", function(d) {
                   pathes.filter(function(t) { return d.name == t.name }).style("stroke-width", "1.5px");
                   pathes.filter(function(t) { return d.name != t.name }).style("stroke-opacity", "1");
                   d3.select(this).style({ "background-color": "transparent" });
                   d3.select(this).style({ "color": "#205caa" });
               })
               .on("click", function(d) {
                   return false;
               });
        
        // Pathes on mouse over
        pathes
               .on("mouseover", function(d) {
                   d3.select(this).style("stroke-width", "4.5px");
                   pathes.filter(function(t) { return d.name != t.name }).style("stroke-opacity", "0.3");
                   teams.filter(function(t) { return d.name == t.name }).style({ "background-color": function(d) { return color(d.name); } });
                   teams.filter(function(t) { return d.name == t.name }).style({ "color": "#FFF" });
               })
               .on("mouseout", function(d) {
                   d3.select(this).style("stroke-width", "1.5px");
                   pathes.filter(function(t) { return d.name != t.name }).style("stroke-opacity", "1");
                   teams.filter(function(t) { return d.name == t.name }).style({ "background-color": "transparent" });
                   teams.filter(function(t) { return d.name == t.name }).style({ "color": "#205caa" });
               });
    });
}
