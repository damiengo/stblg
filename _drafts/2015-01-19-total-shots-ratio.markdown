---
layout: post
title:  "Total Shots Ratio"
date:   2015-01-19 20:08:00
---

**Total Shots Ratio**, ou *ratio du nombre total de tirs*. Dans le domaine des statistiques adaptées aux sports, les pays anglo-saxons sont indéniablement en avance, ce qui signifie que les analystes à l'origine des métriques les ont nommées dans leur langue maternelle. Pour ne pas dénaturer leur sens et faciliter la lecture de ces métriques, j'ai choisi de les nommer en anglais.

Le **Total Shots Ratio**, souvent abrégé *TSR*, permet de comparer le taux de tirs entre les deux équipes d'un match de football.

<div id="ranking"></div>

Liste des TSR durant la saison

<div id="tsr_graph"></div>

<style>

    /** Ranking table **/
    table {
        font-size: 12px;
        border-collapse: collapse;
        table-layout: fixed;
        margin: 0 auto;
    }
    
    th {
        padding: 5px;
        text-transform: uppercase;
        text-align: left;
        border-top: 2px solid #333;
        border-bottom: 2px solid #333;
    }
    
    tr {
        border-bottom: 1px solid #CDCDCD;
    }
    
    /** TSR chart **/
    .line {
      fill: none;
      stroke: #666;
      stroke-width: 1.5px;
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

    .line {
      fill: none;
      stroke: steelblue;
      stroke-width: 1.5px;
    }

</style>

<script type="text/javascript" src="/js/posts/2015-01-19-total-shots-ratio.js"></script>

<script type="text/javascript">

    var tsr_2014 = [
      {
        "start":2014,
        "id":142,
        "short_name":"PSG",
        "tsr_for":0.581,
        "tsr_against":0.419,
        "goals_for":38,
        "goals_against":19,
        "goals_diff":19,
        "shots_for":270,
        "shots_against":209,
        "points_for":41,
        "points_against":14
      },
      {
        "start":2014,
        "id":124,
        "short_name":"Marseille",
        "tsr_for":0.573,
        "tsr_against":0.427,
        "goals_for":41,
        "goals_against":20,
        "goals_diff":21,
        "shots_for":329,
        "shots_against":241,
        "points_for":44,
        "points_against":17
      },
      {
        "start":2014,
        "id":128,
        "short_name":"St Etienne",
        "tsr_for":0.57,
        "tsr_against":0.43,
        "goals_for":24,
        "goals_against":13,
        "goals_diff":11,
        "shots_for":252,
        "shots_against":196,
        "points_for":40,
        "points_against":16
      },
      {
        "start":2014,
        "id":131,
        "short_name":"Lyon",
        "tsr_for":0.567,
        "tsr_against":0.433,
        "goals_for":45,
        "goals_against":17,
        "goals_diff":28,
        "shots_for":301,
        "shots_against":221,
        "points_for":45,
        "points_against":15
      },
      {
        "start":2014,
        "id":129,
        "short_name":"Lille",
        "tsr_for":0.555,
        "tsr_against":0.445,
        "goals_for":17,
        "goals_against":18,
        "goals_diff":-1,
        "shots_for":260,
        "shots_against":202,
        "points_for":27,
        "points_against":30
      },
      {
        "start":2014,
        "id":133,
        "short_name":"Monaco",
        "tsr_for":0.546,
        "tsr_against":0.454,
        "goals_for":24,
        "goals_against":18,
        "goals_diff":6,
        "shots_for":256,
        "shots_against":211,
        "points_for":36,
        "points_against":21
      },
      {
        "start":2014,
        "id":137,
        "short_name":"Nantes",
        "tsr_for":0.542,
        "tsr_against":0.458,
        "goals_for":19,
        "goals_against":18,
        "goals_diff":1,
        "shots_for":254,
        "shots_against":216,
        "points_for":31,
        "points_against":25
      },
      {
        "start":2014,
        "id":139,
        "short_name":"Nice",
        "tsr_for":0.507,
        "tsr_against":0.493,
        "goals_for":26,
        "goals_against":28,
        "goals_diff":-2,
        "shots_for":234,
        "shots_against":227,
        "points_for":28,
        "points_against":31
      },
      {
        "start":2014,
        "id":134,
        "short_name":"Lorient",
        "tsr_for":0.5,
        "tsr_against":0.5,
        "goals_for":23,
        "goals_against":29,
        "goals_diff":-6,
        "shots_for":262,
        "shots_against":254,
        "points_for":23,
        "points_against":38
      },
      {
        "start":2014,
        "id":136,
        "short_name":"Bordeaux",
        "tsr_for":0.496,
        "tsr_against":0.504,
        "goals_for":27,
        "goals_against":29,
        "goals_diff":-2,
        "shots_for":242,
        "shots_against":246,
        "points_for":32,
        "points_against":26
      },
      {
        "start":2014,
        "id":126,
        "short_name":"Caen",
        "tsr_for":0.48,
        "tsr_against":0.52,
        "goals_for":26,
        "goals_against":34,
        "goals_diff":-8,
        "shots_for":255,
        "shots_against":286,
        "points_for":18,
        "points_against":39
      },
      {
        "start":2014,
        "id":130,
        "short_name":"Metz",
        "tsr_for":0.477,
        "tsr_against":0.523,
        "goals_for":19,
        "goals_against":30,
        "goals_diff":-11,
        "shots_for":238,
        "shots_against":257,
        "points_for":20,
        "points_against":38
      },
      {
        "start":2014,
        "id":140,
        "short_name":"Toulouse",
        "tsr_for":0.475,
        "tsr_against":0.525,
        "goals_for":23,
        "goals_against":33,
        "goals_diff":-10,
        "shots_for":232,
        "shots_against":266,
        "points_for":22,
        "points_against":37
      },
      {
        "start":2014,
        "id":138,
        "short_name":"Lens",
        "tsr_for":0.474,
        "tsr_against":0.526,
        "goals_for":20,
        "goals_against":28,
        "goals_diff":-8,
        "shots_for":226,
        "shots_against":256,
        "points_for":19,
        "points_against":40
      },
      {
        "start":2014,
        "id":141,
        "short_name":"Reims",
        "tsr_for":0.459,
        "tsr_against":0.541,
        "goals_for":27,
        "goals_against":36,
        "goals_diff":-9,
        "shots_for":234,
        "shots_against":276,
        "points_for":28,
        "points_against":31
      },
      {
        "start":2014,
        "id":127,
        "short_name":"Guingamp",
        "tsr_for":0.454,
        "tsr_against":0.546,
        "goals_for":23,
        "goals_against":33,
        "goals_diff":-10,
        "shots_for":209,
        "shots_against":260,
        "points_for":25,
        "points_against":37
      },
      {
        "start":2014,
        "id":132,
        "short_name":"Rennes",
        "tsr_for":0.452,
        "tsr_against":0.548,
        "goals_for":22,
        "goals_against":25,
        "goals_diff":-3,
        "shots_for":201,
        "shots_against":237,
        "points_for":30,
        "points_against":27
      },
      {
        "start":2014,
        "id":125,
        "short_name":"Evian",
        "tsr_for":0.451,
        "tsr_against":0.549,
        "goals_for":23,
        "goals_against":38,
        "goals_diff":-15,
        "shots_for":181,
        "shots_against":226,
        "points_for":20,
        "points_against":41
      },
      {
        "start":2014,
        "id":135,
        "short_name":"Montpellier",
        "tsr_for":0.449,
        "tsr_against":0.551,
        "goals_for":26,
        "goals_against":22,
        "goals_diff":4,
        "shots_for":217,
        "shots_against":263,
        "points_for":32,
        "points_against":26
      },
      {
        "start":2014,
        "id":123,
        "short_name":"Bastia",
        "tsr_for":0.393,
        "tsr_against":0.607,
        "goals_for":21,
        "goals_against":26,
        "goals_diff":-5,
        "shots_for":167,
        "shots_against":270,
        "points_for":22,
        "points_against":34
      }
    ];
    
    ranking_hist("#ranking", "fig. 1 - Classement par TSR", tsr_2014);
    tsr_graph("#tsr_graph", "fig. 2 - Evolution des TSR par équipe", "tsr_games_2013.json");
</script>