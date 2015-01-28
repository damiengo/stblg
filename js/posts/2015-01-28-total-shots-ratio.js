/**
 * Generating the ranking board with histogram.
 *
 * @param element
 * @param title
 */
function ranking_hist(element, title) {
    
    // Title
    var elemTitle = d3.select(element)
        .append("p")
        .attr("class", "title")
        .style({
            "font-weight":   "bold",
            "text-align":    "center", 
            "margin-bottom": "20px"
        })
        .text(title);
    
    // Datas
    d3.tsv("/data/tsr_teams_2014.csv", function(error, datas) {
    
        // Sort by points
        datas.sort(function(a, b){ return d3.descending(a["points_for"], b["points_for"]); });

        var width = 400, 
            height = 22;

        var colors = d3.scale.category20();
        
        var x = d3.scale.linear()
                .domain([0, parseFloat(d3.max(datas, function(d) { return d.tsr_for; }))+0.1])
                .range([0, width]);

        var table = d3.select(element)
                   .append("table");
        var thead = table.append("thead");
        var tbody = table.append("tbody");

        // append the header row
        thead.append("tr")
            .selectAll("th")
            .data(["Place", "Equipe", "Points", "TSR", ""])
            .enter()
            .append("th")
                .text(function(column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll("tr")
            .data(datas)
            .enter()
            .append("tr");

        // Team rank
        var cells = rows
            .append("td")
            .style({"font-weight": "bold", "width": "150px"})
                .html(function(d, i) { return i+1; });

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
    });
}

/**
 * Generating the TSR graph by teams.
 *
 * @param element
 * @param title
 */
function tsr_graph(element, title) {
    
    // Title
    var elemTitle = d3.select(element)
        .append("p")
        .attr("class", "title")
        .style({
            "font-weight":   "bold",
            "text-align":    "center", 
            "margin-bottom": "20px"
        })
        .text(title);
    
    // Datas
    d3.tsv("/data/tsr_games_2014.csv", function(error, data) {
        // Grouping by team name
        data = d3.nest()
                   .key(function(d) { return d.short_name; })
                   .entries(data)
                   .map(function(d) { 
                       return {
                           'name': d.key, 
                           'values': d.values.map(function(d, i, a) {
                                return d.tsr_for;
                           })
                        }; 
                   });
        
        // TSR addition by days
        data = data.map(function(dat, ind) {
            return {
               'name'  : dat.name, 
               'values': dat.values.map(function(d, i, a) {
                    if(i == 0) {
                        return d;
                    }                   
                    var tsr_for = 0;
                    for(var j=0 ; j<i ; j++) {
                        tsr_for = tsr_for + parseFloat(data[ind].values[j]);
                    }
                    return tsr_for + parseFloat(d);
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
            .domain([d3.min(data, function(d) { return d3.min(d.values); }),
                     d3.max(data, function(d) { return d3.max(d.values); })])
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
              .attr("transform", "translate(0," + y(0) + ")")
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
              .attr("transform", "translate(0," + (-y(0)) + ")");

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
