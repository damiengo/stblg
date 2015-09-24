// Teams colors
var teamsColors = {
  "Montpellier": {
    "fill":   "#191970",
    "stroke": "#FFA500"
  }
};


// Montpellier home
//var awayTeamFill   = "#191970";
//var awayTeamStroke = "#FFA500";

// Angers home
//var homeTeamFill   = "#FFF";
//var homeTeamStroke = "#000";

// Reims home
//var homeTeamFill   = "#F00";
//var homeTeamStroke = "#FFF";

// Marseille home
//var homeTeamFill   = "#FFF";
//var homeTeamStroke = "#00FFFF";

// Caen home
//var homeTeamFill   = "#191970";
//var homeTeamStroke = "#FF0000";

// Bastia home
//var homeTeamStroke = "#FFF";
//var homeTeamFill   = "#0000CD";

// Lorient home
//var homeTeamFill   = "#FFA500";
//var homeTeamStroke = "#FFF";

// Rennes home
//var homeTeamFill   = "#FF0000";
//var homeTeamStroke = "#000";

// Nice home
//var awayTeamFill   = "#000";
//var awayTeamStroke = "#F00";

// Monaco home
//var awayTeamFill   = "#F00";
//var awayTeamStroke = "#FFF";

// Lille home
//var awayTeamFill   = "#F00";
//var awayTeamStroke = "#800080";

// Lille away
//var awayTeamFill   = "yellow";
//var awayTeamStroke = "#00008B";

// Nantes home
//var homeTeamFill   = "#FF0";
//var homeTeamStroke = "#0F0";

// St Etienne home
//var awayTeamFill   = "#339900";
//var awayTeamStroke = "#FFF";

// Bordeaux home
//var awayTeamFill   = "#900090";
//var awayTeamStroke = "#FFF";

// Guingamp home
var homeTeamFill   = "#F00";
var homeTeamStroke = "#000";

// Lyon home
//var homeTeamFill   = "#FFF";
//var homeTeamStroke = "#00F";

// Troyes home
//var awayTeamFill   = "#00F";
//var awayTeamStroke = "#FFF";

// PSG home
//var awayTeamFill   = "#036";
//var awayTeamStroke = "#F00";

// PSG away
//var awayTeamFill   = "#FFF";
//var awayTeamStroke = "#00F";

// GFC Ajaccio home
var awayTeamFill   = "#F00";
var awayTeamStroke = "#00F";

// Toulouse home
//var homeTeamFill   = "#800080";
//var homeTeamStroke = "#FFF";


/**
 * Calculate expg.
 */
function expg(element) {
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
      width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

      var x = d3.scale.linear()
          .range([0, width]);

      var y = d3.scale.linear()
          .range([height, 0]);

      /** Teams colors **/

      // Montpellier home
      var homeTeamFill   = "#191970";
      var homeTeamStroke = "#FFA500";

      // Angers home
      //var homeTeamFill   = "#FFF";
      //var homeTeamStroke = "#000";

      // Reims home
      //var awayTeamFill   = "#F00";
      //var awayTeamStroke = "#FFF";

      // Marseille home
      //var awayTeamFill   = "#FFF";
      //var awayTeamStroke = "#00FFFF";

      // Caen home
      //var awayTeamFill   = "#191970";
      //var awayTeamStroke = "#FF0000";

      // Bastia home
      //var awayTeamStroke = "#FFF";
      //var awayTeamFill   = "#0000CD";

      // Lorient home
      //var homeTeamFill   = "#FFA500";
      //var homeTeamStroke = "#FFF";

      // Rennes home
      //var awayTeamFill   = "#FF0000";
      //var awayTeamStroke = "#000";

      // Nice home
      //var homeTeamFill   = "#000";
      //var homeTeamStroke = "#F00";

      // Monaco home
      var awayTeamFill   = "#F00";
      var awayTeamStroke = "#FFF";

      // Lille home
      //var awayTeamFill   = "#F00";
      //var awayTeamStroke = "#800080";

      // Lille away
      //var awayTeamFill   = "yellow";
      //var awayTeamStroke = "#00008B";

      // Nantes home
      //var awayTeamFill   = "#FF0";
      //var awayTeamStroke = "#0F0";

      // St Etienne home
      //var awayTeamFill   = "#339900";
      //var awayTeamStroke = "#FFF";

      // Bordeaux home
      //var awayTeamFill   = "#900090";
      //var awayTeamStroke = "#FFF";

      // Guingamp home
      //var awayTeamFill   = "#F00";
      //var awayTeamStroke = "#000";

      // Lyon home
      //var homeTeamFill   = "#FFF";
      //var homeTeamStroke = "#00F";

      // Troyes home
      //var homeTeamFill   = "#00F";
      //var homeTeamStroke = "#FFF";

      // PSG home
      //var homeTeamFill   = "#036";
      //var homeTeamStroke = "#F00";

      // PSG away
      //var awayTeamFill   = "#FFF";
      //var awayTeamStroke = "#00F";

      // GFC Ajaccio home
      //var homeTeamFill   = "#F00";
      //var homeTeamStroke = "#00F";

      // Toulouse home
      //var homeTeamFill   = "#800080";
      //var homeTeamStroke = "#FFF";

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");

      var legend = d3.select(element).append("ul").attr("class", "legend");

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
                              .attr("fill", "#00FF7F");

      var fieldStartX = 20;
      var fieldStartY = 20;
      var fieldWidth = width - fieldStartX * 2;
      var fieldHeight = height - fieldStartY * 2;

      // Grass graph
      var grassStep = width/10;
      for(var i=0 ; i<width ; i=i+grassStep) {
        if((i/grassStep)%2 == 0) {
          var rectangle = svg.append("rect")
                                .attr("x",   i)
                                  .attr("y", 0)
                                  .attr("width", grassStep+"px")
                                  .attr("height", height)
                                  .attr("fill", "#32CD32");
        }
      }

      var lineData = [ // The field lines
                       {"x": fieldStartX,             "y": fieldStartY},
                       {"x": fieldStartX+fieldWidth,  "y": fieldStartY},
                       {"x": fieldStartX+fieldWidth,  "y": fieldStartY+fieldHeight},
                       {"x": fieldStartX,             "y": fieldStartY+fieldHeight},
                       {"x": fieldStartX,             "y": fieldStartY},
                       // Penalty area 1
                       {"x": fieldStartX,                   "y": fieldStartY+(fieldHeight/4.77)},
                       {"x": fieldStartX+(fieldWidth*0.17), "y": fieldStartY+(fieldHeight/4.77)},
                       {"x": fieldStartX+(fieldWidth*0.17), "y": fieldStartY+(fieldHeight/1.26)},
                       {"x": fieldStartX,                   "y": fieldStartY+(fieldHeight/1.26)},
                       // Goalkeeper area 1
                       {"x": fieldStartX,                    "y": fieldStartY+(fieldHeight/2.71)},
                       {"x": fieldStartX+(fieldWidth*0.05),  "y": fieldStartY+(fieldHeight/2.71)},
                       {"x": fieldStartX+(fieldWidth*0.05),  "y": fieldStartY+(fieldHeight/1.58)},
                       {"x": fieldStartX,                    "y": fieldStartY+(fieldHeight/1.58)},
                       // Goal 1
                       {"x": fieldStartX,                   "y": fieldStartY+(fieldHeight/2.27)},
                       {"x": fieldStartX-(fieldWidth/112),  "y": fieldStartY+(fieldHeight/2.27)},
                       {"x": fieldStartX-(fieldWidth/112),  "y": fieldStartY+(fieldHeight/1.79)},
                       {"x": fieldStartX,                   "y": fieldStartY+(fieldHeight/1.79)},
                       // Midfield
                       {"x": fieldStartX,                   "y": fieldStartY},
                       {"x": fieldStartX+(fieldWidth/2),    "y": fieldStartY},
                       {"x": fieldStartX+(fieldWidth/2),    "y": fieldStartY+(fieldHeight)},
                       {"x": fieldStartX+fieldWidth,        "y": fieldStartY+fieldHeight},
                       // Penalty area 2
                       {"x": fieldStartX+fieldWidth,                   "y": fieldStartY+(fieldHeight/4.77)},
                       {"x": fieldStartX+(fieldWidth-fieldWidth*0.17), "y": fieldStartY+(fieldHeight/4.77)},
                       {"x": fieldStartX+(fieldWidth-fieldWidth*0.17), "y": fieldStartY+(fieldHeight/1.26)},
                       {"x": fieldStartX+fieldWidth,                   "y": fieldStartY+(fieldHeight/1.26)},
                       // Goalkeeper area 2
                       {"x": fieldStartX+fieldWidth,                    "y": fieldStartY+(fieldHeight/2.71)},
                       {"x": fieldStartX+(fieldWidth-fieldWidth*0.05),  "y": fieldStartY+(fieldHeight/2.71)},
                       {"x": fieldStartX+(fieldWidth-fieldWidth*0.05),  "y": fieldStartY+(fieldHeight/1.58)},
                       {"x": fieldStartX+fieldWidth,                    "y": fieldStartY+(fieldHeight/1.58)},
                       // Goal 2
                       {"x": fieldStartX+fieldWidth,                   "y": fieldStartY+(fieldHeight/2.27)},
                       {"x": fieldStartX+(fieldWidth+fieldWidth/112),  "y": fieldStartY+(fieldHeight/2.27)},
                       {"x": fieldStartX+(fieldWidth+fieldWidth/112),  "y": fieldStartY+(fieldHeight/1.79)},
                       {"x": fieldStartX+fieldWidth,                   "y": fieldStartY+(fieldHeight/1.79)},];
      var lineFunction = d3.svg.line()
                               .x(function(d) { return d.x; })
                               .y(function(d) { return d.y; })
                               .interpolate("linear");
      var lineGraph = svg.append("path")
                          .attr("d", lineFunction(lineData))
                          .attr("stroke", "#FFF")
                          .attr("stroke-width", 2)
                          .attr("fill", "none");

      // The center circle
      var circleSelection = svg.append("circle")
                           .attr("cx", fieldStartX+(fieldWidth/2))
                           .attr("cy", fieldStartY+(fieldHeight/2))
                           .attr("r", 50)
                           .style("stroke-opacity", 1)
                           .style("stroke-width", 2)
                           .style("fill-opacity", 0)
                           .style("fill", "#FFF")
                           .style("stroke", "#FFF");

      // The engaging point
      var circleSelection = svg.append("circle")
                           .attr("cx", fieldStartX+(fieldWidth/2))
                           .attr("cy", fieldStartY+(fieldHeight/2))
                           .attr("r", 2)
                           .style("stroke-opacity", 1)
                           .style("stroke-width", 2)
                           .style("fill-opacity", 1)
                           .style("fill", "#FFF")
                           .style("stroke", "#FFF");

      // The penalty area circle arc 1
      svg.append("path")
                    .attr("d", "M "+(fieldStartX+(fieldWidth*0.17))+","+(fieldStartY+(fieldHeight/2.53))+
                              " A 80,80 0 0,1"+
                                " "+(fieldStartX+(fieldWidth*0.17))+","+(fieldStartY+(fieldHeight/1.65)))
                    .style("stroke-opacity", 1)
                    .style("stroke-width", 2)
                    .style("fill-opacity", 0)
                    .style("stroke", "#FFF");

      // The penalty area circle arc 2
      svg.append("path")
             .attr("d", "M "+(fieldStartX+(fieldWidth-fieldWidth*0.17))+","+(fieldStartY+(fieldHeight/2.53))+
                       " A 80,80 0 0,0"+
                         " "+(fieldStartX+(fieldWidth-fieldWidth*0.17))+","+(fieldStartY+(fieldHeight/1.65)))
             .style("stroke-opacity", 1)
             .style("stroke-width", 2)
             .style("fill-opacity", 0)
             .style("stroke", "#FFF");

      // The penalty point 1
      var circleSelection = svg.append("circle")
                           .attr("cx", fieldStartX+(fieldWidth/9))
                           .attr("cy", fieldStartY+(fieldHeight/2))
                           .attr("r", 2)
                           .style("stroke-opacity", 1)
                           .style("stroke-width", 2)
                           .style("fill-opacity", 1)
                           .style("fill", "#FFF")
                           .style("stroke", "#FFF");

      // The penalty point 2
      var circleSelection = svg.append("circle")
                           .attr("cx", fieldStartX+(fieldWidth-fieldWidth/9))
                           .attr("cy", fieldStartY+(fieldHeight/2))
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

        // The corner 3 arc
        svg.append("path")
         .attr("d", "M "+(fieldStartX+fieldWidth-5)+","+(fieldStartY+fieldHeight)+
                   " A 5,5 0 0,1"+
                     " "+(fieldStartX+fieldWidth)+","+(fieldStartY+fieldHeight-5))
         .style("stroke-opacity", 1)
         .style("stroke-width", 2)
         .style("fill-opacity", 0)
         .style("stroke", "#FFF");

      // The corner 4 arc
      svg.append("path")
       .attr("d", "M "+(fieldStartX+5)+","+(fieldStartY+fieldHeight)+
                 " A 5,5 0 0,0"+
                   " "+(fieldStartX)+","+(fieldStartY+fieldHeight-5))
       .style("stroke-opacity", 1)
       .style("stroke-width", 2)
       .style("fill-opacity", 0)
       .style("stroke", "#FFF");

      var hexbin = d3.hexbin()
        .size([fieldWidth, fieldHeight])
        .radius(10);

      loadData();

      // Loading data
      function loadData() {
        d3.tsv("/data/exp_goals_days_J7.tsv", function(error, data) {
          if (error) throw error;

          homeTeamId = data[0]["sqw_home_team_id"];

          x.domain([0, 100]).nice();
          y.domain([0, 100]).nice();

          // Grouping by team name
          var legendData = d3.nest()
           .key(function(d) { return d.short_name; })
           .rollup(function(d) {
             return {
               'team_id': d3.mean(d, function(g) { return g.team_id; }),
               'nb_shots': d.length,
               'goals': d3.sum(d, function(g) {return g.goal; }),
               'expg': d3.sum(d, function(g) {return g.predict; })
             };
           })
           .entries(data);

           // Home team is the first
           legendData.sort(function(a, b) {
             if(a.values.team_id == homeTeamId) {
               return 0;
             }
             return 1;
           });

          // Ajout de la légende
          var teamLegend = legend
             .selectAll("ul")
             .data(legendData)
             .enter()
               .append("li");

          teamLegend.append("h3")
                 .style("text-align", function(d) {
                   if(d.values.team_id == homeTeamId) {
                     return "right";
                   }
                   return "left";
                 })
                 .html( function(d) {
                   if(d.values.team_id == homeTeamId) {
                     return d.key+" <strong>"+d.values.goals+"</strong>";
                   }
                   return "<strong>"+d.values.goals+"</strong> "+d.key;
                 })
          teamLegend.append("p")
                 .style("text-align", function(d) {
                   if(d.values.team_id == homeTeamId) {
                     return "right";
                   }
                   return "left";
                 })
                 .html( function(d) {
                   if(d.values.team_id == homeTeamId) {
                     return "<small>ExpG</small> "+Math.round(d.values.expg*100)/100;
                   }
                   return Math.round(d.values.expg*100)/100+" <small>ExpG</small>";
                 });
          teamLegend.append("p")
                 .style("text-align", function(d) {
                   if(d.values.team_id == homeTeamId) {
                     return "right";
                   }
                   return "left";
                 })
                 .html( function(d) {
                   if(d.values.team_id == homeTeamId) {
                     return "<small>Tirs</small> "+d.values.nb_shots;
                   }
                   return d.values.nb_shots+" <small>Tirs</small>";
                 });

          var radius = d3.scale.sqrt()
            .domain([0, 1])
            .range([0, 20]);

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
              .attr("d", function(d) { return hexbin.hexagon(radius(d.predict)); })
              .attr("transform", function(d) {
                var tr_x = x(parseInt(d.start_x));
                var tr_y = y(parseInt(d.start_y));
                if(d.team_id == homeTeamId) {
                  tr_x = x(parseInt(100-d.start_x));
                  tr_y = y(parseInt(100-d.start_y));
                }
                return "translate(" + tr_x + "," + tr_y + ")";
              })
              .style("fill", function(d) {
                if(d.team_id == homeTeamId) {
                  return homeTeamFill;
                }
                return awayTeamFill;
              })
              .style("stroke", function(d) {
                if(d.team_id == homeTeamId) {
                  return homeTeamStroke;
                }
                return awayTeamStroke;
              })
              .style("stroke-width", function(d) {
                if(d.goal == 1) {
                  return "1.6px";
                }
                return "0.8px";
              });
        });
    };
}

/**
 * Ranking.
 */
function ranking(element) {
  var table = d3.select(element).append("table");
  d3.csv("/data/summary_l1.csv", function(error, data) {
    if (error) throw error;

    data.sort(function(a, b){
      return d3.descending(parseInt(a["points_for"]), parseInt(b["points_for"]));
    });

    // Add ranking
    data.forEach(function(d, i) {
      d["rank"] = (i+1);
    });

    // Color range
    var colorRange = colorbrewer.Blues[6];
    // Colors
    var colors = {
      "pdo": d3.scale.quantize()
                     .domain(d3.extent(data, function(d) { return parseInt(d.pdo); }))
                     .range(colorRange),
       "tsr_for": d3.scale.quantize()
                      .domain(d3.extent(data, function(d) { return parseFloat(d.tsr_for); }))
                      .range(colorRange),
      "percentage": d3.scale.quantize()
                     .domain(d3.extent(data, function(d) { return parseFloat(d.percentage); }))
                     .range(colorRange),
      "goals_for": d3.scale.quantize()
                     .domain(d3.extent(data, function(d) { return parseInt(d.goals_for); }))
                     .range(colorRange),
      "predict":   d3.scale.quantize()
                     .domain(d3.extent(data, function(d) { return parseInt(d.predict); }))
                     .range(colorRange),
      "expg_ratio": d3.scale.quantize()
                     .domain(d3.extent(data, function(d) { return parseFloat(d.expg_ratio); }))
                     .range(colorRange)
    };

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    var columns = [{"name": "",       "data": "rank",       "width": 50},
                   {"name": "Equipe", "data": "team",       "width": 180, "fontweight": "bold"},
                   {"name": "Points", "data": "points_for", "width": 80},
                   {"name": "Buts",   "data": "goals_for",  "width": 80},
                   {"name": "PDO",    "data": "pdo",        "width": 80},
                   {"name": "TSR",    "data": "tsr_for",    "width": 80},
                   {"name": "SOT",    "data": "percentage", "width": 80},
                   {"name": "ExpG",   "data": "predict",    "width": 80},
                   {"name": "ExpG/R", "data": "expg_ratio", "width": 80}];

    // append the header row
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
            .text(function(column) { return column.name; })
            .style("width", function(column) { return column.width+"px"; });

    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                return {column: column, value: row[column.data]};
            });
        })
        .enter()
        .append("td")
            .attr("style", "font-family: Courier") // sets the font style
            .html(function(d) {
              var value = d.value;
              if(parseFloat(value)) {
                return Math.round(value * 100) / 100;
              }
              return value;
            })
            .style("background-color", function(d) {
              var color = colors[d.column.data];
              if(color) {
                return color(d.value);
              }
            })
            .style("color", function(d) {
              var color = colors[d.column.data];
              if(color) {
                // Set color from backgroud
                var rgb = hexToRgb(color(d.value));
                if((rgb.r*0.299 + rgb.g*0.587 + rgb.b*0.114) > 186) {
                  return "#000";
                }
                else {
                  return "#FFF";
                }
              }
              return "#000";
            })
            .style("font-weight", function(d) {
              var fw = d.column.fontweight;
              if(fw) {
                return fw;
              }
            });
  });
}

/**
 * Convert HEX color to RGB.
 *
 * @param hex
 *
 * @return Array
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
