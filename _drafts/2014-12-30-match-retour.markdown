---
layout: post
title:  "Match retour"
date:   2014-12-30 17:53:00
---

Le championnat de France de Ligue 1 a terminé sa phase aller il y a déjà deux semaines. Lors des analyses précédent les matchs retour dans les différents championnats, il est fréquent de se remémorer le résultat et les faits de jeu du match aller pour tenter d'anticiper le résultat du match retour. Deux matchs de football sont indépendants, il est cependant intéressant de se pencher sur les liens pouvant exister entre les matchs aller et retour.

Dans cet article, les données utilisées sont celle du championnat de France de Ligue 1 allant de la saison 2002/2003 à la saison 2013/2014.

## Lien entre les matchs aller/retour

Il est intéressant d'utiliser les données pour vérifier qu'un évènement peut se répéter ou être prédictible. Dans le cas des matchs aller/retour, une régression linéaire sur les points obtenus au match retour à partir des points, buts marqués ou buts encaissés du match aller ne donne pas de résultat intéressant (de la même façon, le nombre de buts marqué n'est pas prédictible significativement à partir des données précédentes).

<style>

svg {
  display: block;
  margin: auto;
}

.bar {
  fill: steelblue;
}

.bar:hover {
  fill: brown;
}

.title {
  font: bold 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.axis {
  font: 10px sans-serif;
}

.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.x.axis path {
  display: none;
}

</style>
<script>

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

var svg = d3.select("div.post").append("svg")
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
      .text("Points moyens marqués après les points pris à l'aller");

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

</script>
