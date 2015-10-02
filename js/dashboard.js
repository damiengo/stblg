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
      //var awayTeamFill   = "#FFF";
      //var awayTeamStroke = "#000";

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
      //var awayTeamFill   = "#FFA500";
      //var awayTeamStroke = "#FFF";

      // Rennes home
      //var homeTeamFill   = "#FF0000";
      //var homeTeamStroke = "#000";

      // Nice home
      var awayTeamFill   = "#000";
      var awayTeamStroke = "#F00";

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
      var homeTeamFill   = "#339900";
      var homeTeamStroke = "#FFF";

      // Bordeaux home
      //var homeTeamFill   = "#900090";
      //var homeTeamStroke = "#FFF";

      // Guingamp home
      //var homeTeamFill   = "#F00";
      //var homeTeamStroke = "#000";

      // Lyon home
      //var awayTeamFill   = "#FFF";
      //var awayTeamStroke = "#00F";

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
      //var awayTeamFill   = "#F00";
      //var awayTeamStroke = "#00F";

      // Toulouse home
      //var awayTeamFill   = "#800080";
      //var awayTeamStroke = "#FFF";

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
        d3.tsv("/data/exp_goals_days_J8.tsv", function(error, data) {
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

/**
 * Shooting signature.
 *
 * @param element
 * @param playerName
 */
function shotSignature(element, playerName) {
  // get your data
  var data = [{"x":0,"y":0.7984084880636605,"widthValue":158,"colorValue":0.1629224750896936},
               {"x":1,"y":0.765993265993266,"widthValue":145,"colorValue":0.16595424641159695},
               {"x":2,"y":0.7241379310344827,"widthValue":74,"colorValue":0.14788844079931118},
               {"x":3,"y":0.6082191780821917,"widthValue":36,"colorValue":0.09604064011114222},
               {"x":4,"y":0.45348837209302323,"widthValue":35,"colorValue":0.0205093443427537},
               {"x":5,"y":0.37333333333333335,"widthValue":39,"colorValue":-0.015647382920110142},
               {"x":6,"y":0.3744075829383886,"widthValue":39,"colorValue":-0.012850902701298128},
               {"x":7,"y":0.3926940639269407,"widthValue":37,"colorValue":0.0016039868744902042},
               {"x":8,"y":0.4619047619047619,"widthValue":22,"colorValue":0.07160931036145685},
               {"x":9,"y":0.4788135593220339,"widthValue":45,"colorValue":0.0874320387619314},
               {"x":10,"y":0.4979423868312757,"widthValue":45,"colorValue":0.10551911317398666},
               {"x":11,"y":0.4542253521126761,"widthValue":42,"colorValue":0.06070052516549129},
               {"x":12,"y":0.4503311258278146,"widthValue":44,"colorValue":0.05378653654579513},
               {"x":13,"y":0.4110787172011662,"widthValue":66,"colorValue":0.009121101429431566},
               {"x":14,"y":0.4196185286103542,"widthValue":61,"colorValue":0.01780232246319491},
               {"x":15,"y":0.42819148936170215,"widthValue":64,"colorValue":0.02163884827966278},
               {"x":16,"y":0.41988950276243087,"widthValue":71,"colorValue":0.016918338868285643},
               {"x":17,"y":0.45425867507886436,"widthValue":50,"colorValue":0.04975728463782164},
               {"x":18,"y":0.4141791044776119,"widthValue":45,"colorValue":0.015415540872963762},
               {"x":19,"y":0.4752475247524752,"widthValue":37,"colorValue":0.07919199741203164},
               {"x":20,"y":0.41830065359477125,"widthValue":20,"colorValue":0.030376008752275918},
               {"x":21,"y":0.4928571428571429,"widthValue":13,"colorValue":0.10821499731174294},
               {"x":22,"y":0.45592705167173253,"widthValue":18,"colorValue":0.07432771905345104},
               {"x":23,"y":0.43107221006564544,"widthValue":39,"colorValue":0.05587993676927633},
               {"x":24,"y":0.4125364431486881,"widthValue":221,"colorValue":0.041212020305431696},
               {"x":25,"y":0.3859060402684564,"widthValue":127,"colorValue":0.023158322960854794},
               {"x":26,"y":0.36511156186612576,"widthValue":60,"colorValue":0.00876771640727797},
               {"x":27,"y":0.32627118644067793,"widthValue":22,"colorValue":-0.017285514590249906},
               {"x":28,"y":0.25555555555555554,"widthValue":3,"colorValue":-0.07036667774454414},
               {"x":29,"y":0.34375,"widthValue":2,"colorValue":0.043655332912590716},
               {"x":30,"y":0.2,"widthValue":0,"colorValue":-0.06235399820305482}];

  // initialize SVG
  var width = 600, height = 200;
  var svg = d3.select(element).append("svg")
    .attr("width", width)
    .attr("height", height);


  // x = distance in shooting signatures
  var x = d3.scale.linear()
    .domain([0, 30])
    .range([0, width]);

  // for gradient offset (needs % - so map x domain to 0-100%)
  var offset = d3.scale.linear()
    .domain(x.domain())
    .range([0, 100]);

  // y = Field Goal % in shooting signatures
  var y = d3.scale.linear()
    .domain([0, 1])
    .range([height, 0]);


  // scale for the width of the signature
  var minWidth = 1;
  var maxWidth = height / 4;

  var w = d3.scale.linear()
    .domain([0, 250])
    .range([minWidth, maxWidth]);

  // NOTE: if you want maxWidth to truly be the maximum width of the signature,
  // you'll need to add .clamp(true) to w.



  // need two area plots to make the signature extend in width in both directions around the line
  var areaAbove = d3.svg.area()
    .x(function(d) { return x(d.x); })
    .y0(function (d) { return y(d.y) - w(d.widthValue); })
    .y1(function(d) { return Math.ceil(y(d.y)); }) // ceil and floor prevent line between areas
    .interpolate("basis");

  var areaBelow = d3.svg.area()
    .x(function(d) { return x(d.x); })
    .y0(function (d) { return y(d.y) + w(d.widthValue); })
    .y1(function(d) { return Math.floor(y(d.y)); }) // ceil and floor prevent line between areas
    .interpolate("basis");


  // add the areas to the svg
  var gArea = svg.append("g").attr("class", "area-group");
  gArea.append("path")
    .datum(data)
    .attr("class", "area area-above")
    .attr("d", areaAbove)
    .style("fill", "url(#area-gradient)"); // specify the linear gradient #area-gradient as the colouring

    // NOTE: the colouring won't work if you have multiple signatures on the same page.
    // In this case, you'll need to generate unique IDs for each gradient.

  gArea.append("path")
    .datum(data)
    .attr("class", "area area-below")
    .attr("d", areaBelow)
    .style("fill", "url(#area-gradient)");

  // you can draw the line the signature is based around using the following code:
  var line = d3.svg.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); })
    .interpolate("basis");

  gArea.append("path")
    .datum(data)
    .attr("d", line)
    .style("stroke", "#fff")
    .style("fill", "none");
  // end

  // set-up colours
  var colorSchemes = {
    buckets: {
      domain: [-0.15, 0.15],
      range: ["#405A7C", "#7092C0", "#BDD9FF", "#FFA39E", "#F02C21", "#B80E05"]
    },
    goldsberry: {
      domain: [-0.15, 0.15],
      range: ["#5357A1", "#6389BA", "#F9DC96", "#F0825F", "#AE2A47"]
    }
  };
  var activeColorScheme = colorSchemes.goldsberry;

  // Note that the quantize scale does not interpolate between colours
  var colorScale = d3.scale.quantize()
    .domain(activeColorScheme.domain)
    .range(activeColorScheme.range);


  // generate colour data
  var colorData = [];
  var stripe = false; // set stripe to true to prevent linear gradient fading
  for (var i = 0; i < data.length; i++) {
    var prevData = data[i - 1];
    var currData = data[i];
    if (stripe && prevData) {
      colorData.push({
        offset: offset(currData.x) + "%",
        stopColor: colorScale(prevData.colorValue)
      });
    }
    colorData.push({
      offset: offset(currData.x) + "%",
      stopColor: colorScale(currData.colorValue)
    });
  }

  // generate the linear gradient used by the signature
  gArea.append("linearGradient")
    .attr("id", "area-gradient")
    .attr("gradientUnits", "userSpaceOnUse")
    .attr("y1", 0)
    .attr("y2", 0)
    .selectAll("stop")
      .data(colorData)
      .enter().append("stop")
        .attr("offset", function(d) { return d.offset })
        .attr("stop-color", function (d) { return d.stopColor; });
}

/**
 * Real shooting signature function.
 *
 * @param element
 * @param player
 */
function shootingSignature(element, player) {

  // initialize SVG
  var width = 600, height = 200;
  var svg = d3.select(element).append("svg")
    .attr("width", width)
    .attr("height", height);


  // x = distance in shooting signatures
  var x = d3.scale.linear()
    .domain([0, 50])
    .range([0, width]);

  // for gradient offset (needs % - so map x domain to 0-100%)
  var offset = d3.scale.linear()
    .domain(x.domain())
    .range([0, 100]);

  // y = Field Goal % in shooting signatures
  var y = d3.scale.linear()
    .domain([0, 30])
    .range([0, 30]);

  // scale for the width of the signature
  var minWidth = 1;
  var maxWidth = height / 4;

  var w = d3.scale.linear()
    .domain([0, 250])
    .range([minWidth, maxWidth]);

  d3.tsv("/data/shooting_signature/2014_lacazette.tsv", function(error, data) {
    if (error) throw error;

    var data = d3.nest()
                 .key(function(d) {return Math.round(d.distance);})
                 .sortKeys(d3.ascending)
                 .entries(data);

    data.sort(function(a, b){
      return d3.ascending(parseInt(a["key"]), parseInt(b["key"]));
    });

    //console.log(data);

    // Add the valueline path.
    svg.append("path")
        .attr("class", "line")
        .attr("d", d3.svg.line()
          .x(function(d) { console.log(d); return x(d.key); })
          .y(function(d) { console.log(d); return y(d.key); })
        );
  });
}

