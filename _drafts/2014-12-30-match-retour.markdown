---
layout: post
title:  "Match retour"
date:   2014-12-30 17:53:00
---

Le championnat de France de Ligue 1 a terminé sa phase aller il y a déjà deux semaines. Lors des analyses précédent les matchs retour dans les différents championnats, il est fréquent de se remémorer le résultat et les faits de jeu du match aller pour tenter d'anticiper le résultat du match retour. Deux matchs de football sont indépendants, il est cependant intéressant de se pencher sur les liens pouvant exister entre les matchs aller et retour.

Dans cet article, les données utilisées sont celle du championnat de France de Ligue 1 allant de la saison 2002/2003 à la saison 2013/2014.

## Anticipation du résultat du retour

Il est difficile d'établir un lien entre le résultat du match aller et celui du match retour. Il est cependant possible d'observer les probabilités de résultats au match retour à partir de ceux obtenus au match aller. J'ai séparé les résultats à domicile et à l'extérieur pour cette observation, ce qui donne des données intéressantes.

<div id="home-percentages" class="graph"></div>

Ce premier graphique (fig. 1) illustre la répartition des points obtenus au match retour à partir des points abtenus au matchs aller pour les équipes ayant joué à domicile. Le premier élément à noter est que le taux de matchs nul au retour est pratiquement identique que l'équipe ait pris 0, 1 ou 3 points à l'aller (28%, 29% et 30%).

Dans un cas sur deux, perdre le match aller à domicile implique une défaite à au retour à l'extérieur (51%). On remarque que ce pourcentage de défaite au retour ne descend "qu'à" 46% en cas de nul à l'aller et 42% en cas de victoire à l'aller à domicile. Une victoire au match aller à domicile n'est pas une assurance de résultat positif au match retour, cependant si une équipe prend au moins un point à l'aller, elle a plus de chance de prendre au moins un point au retour. En effet, en cas de nul à l'aller, il y a 54% de chance de ramener au moins un point au match retour, et en cas de victoire à l'aller, ce taux monte à 58%.

<div id="away-percentages" class="graph"></div>

Explication match retour

--> Importance du match à domicile, mais le niveau des équipes joue quand même...

## Projection des matchs retour

<style>

svg {
  /*display: block;*/
  margin: auto;
}

.graph {
  text-align: center;
}

/** Bars **/

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

/** Arcs **/
path {
  fill: #ccc;
  transition: fill 250ms linear;
  transition-delay: 150ms;
}

path:hover {
  fill: #999;
  transition-delay: 0;
}

</style>
<script type="text/javascript" src="/js/posts/2014-12-30-match-retour.js"></script>
<script type="text/javascript">
    
    var dataHome = { "details": [
                    {"name": "0 pts dom", 
                     "values": [
                                   {"name": "0 pts", "value": 51},
                                   {"name": "1 pts", "value": 28}, 
                                   {"name": "3 pts", "value": 21}
                               ]
                    }, 
                    {"name": "1 pts dom", 
                     "values": [
                                   {"name": "0 pts", "value": 46},
                                   {"name": "1 pts", "value": 29}, 
                                   {"name": "3 pts", "value": 25}
                               ]
                    }, 
                    {"name": "3 pts dom", 
                     "values": [
                                   {"name": "0 pts", "value": 42},
                                   {"name": "1 pts", "value": 30}, 
                                   {"name": "3 pts", "value": 28}
                               ]
                    }
    ]};

    var dataAway = { "details": [
                    {"name": "0 pts ext", 
                     "values": [
                                   {"name": "0 pts", "value": 28},
                                   {"name": "1 pts", "value": 30}, 
                                   {"name": "3 pts", "value": 42}
                               ]
                    }, 
                    {"name": "1 pts ext", 
                     "values": [
                                   {"name": "0 pts", "value": 25},
                                   {"name": "1 pts", "value": 29}, 
                                   {"name": "3 pts", "value": 46}
                               ]
                    }, 
                    {"name": "3 pts ext", 
                     "values": [
                                   {"name": "0 pts", "value": 21},
                                   {"name": "1 pts", "value": 28}, 
                                   {"name": "3 pts", "value": 51}
                               ]
                    }
    ]};

   secondLegPointsPercentage("#home-percentages", dataHome, "fig. 1 - Répartition des points marqués au retour après le résultat aller à domicile");
   secondLegPointsPercentage("#away-percentages", dataAway, "fig. 2 - Répartition des points marqués au retour après le résultat aller à l'extérieur");
</script>

<script type="text/javascript">
    secondLegPointsHist();
</script>