
/**
 * Ranking.
 */
function elo_ligue1(element) {
  var table = d3.select(element).append("table");
  d3.tsv("/data/elo_ligue1_j7.tsv", function(error, data) {
    if (error) throw error;

    // Add ranking
    data.forEach(function(d, i) {
      d["rank"] = (i+1);
    });

    // Color range
    var colorRange = colorbrewer.Reds[9];
    // Colors
    var colors = {
      "elo": d3.scale.quantize()
                     .domain(d3.extent(data, function(d) { return parseInt(d.elo); }))
                     .range(colorRange),
      "elo_start": d3.scale.quantize()
                    .domain(d3.extent(data, function(d) { return parseInt(d.elo_start); }))
                    .range(colorRange)
    };

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    var columns = [{"name": "",       "data": "rank",      "width": 50},
                   {"name": "Equipe", "data": "team",      "width": 180, "fontweight": "bold"},
                   {"name": "Elo",    "data": "elo",       "width": 80},
                   {"name": "Diff",   "data": "elo_start", "width": 80}];

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
