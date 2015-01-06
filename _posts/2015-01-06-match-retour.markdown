---
layout: post
title:  "Match retour"
date:   2015-01-06 20:08:00
---

Le **championnat de France de Ligue 1** a terminé sa phase aller il y a déjà deux semaines. Lors des analyses précédent les matchs retour dans les différents championnats, il est fréquent de se remémorer le résultat et les faits de jeu du match aller pour tenter d'anticiper le résultat du match retour. Deux matchs de football sont indépendants, il est cependant intéressant de se pencher sur les liens pouvant exister entre les matchs aller et retour.

Dans cet article, les données utilisées sont celle du championnat de France de Ligue 1 allant de la **saison 2002/2003 à la saison 2013/2014**.

## Répartition des points au retour

Il est difficile d'établir un lien entre le résultat du match aller et celui du match retour. Il est cependant possible d'observer les probabilités de résultats au match retour à partir de ceux obtenus au match aller. J'ai séparé les résultats à domicile et à l'extérieur pour cette observation, ce qui donne des données intéressantes.

<div id="home-percentages" class="graph"></div>

Ce premier graphique (fig. 1) illustre la répartition des points obtenus au match retour à partir des points abtenus au matchs aller pour les équipes ayant joué à domicile. Le premier élément à noter est que le taux de matchs nul au retour est pratiquement identique que l'équipe ait pris 0, 1 ou 3 points à l'aller (**28%, 29% et 30%**).

Dans un cas sur deux, perdre le match aller à domicile implique une défaite à au retour à l'extérieur (**51%**). On remarque que ce pourcentage de défaite au retour ne descend *qu'à* **46%** en cas de nul à l'aller et *42%* en cas de victoire à l'aller à domicile. Une victoire au match aller à domicile n'est pas une assurance de résultat positif au match retour, cependant si une équipe prend au moins un point à l'aller, elle a plus de chance de prendre au moins un point au retour. En effet, en cas de nul à l'aller, il y a **54%** de chance de ramener au moins un point au match retour, et en cas de victoire à l'aller, ce taux monte à **58%**.

<div id="away-percentages" class="graph"></div>

Ce second graphique (fig. 2) montre la répartition des points obtenus en fonction du résultat du match aller à l'extérieur. Ce graphique présente donc les **chiffres opposés au premier graphique** (fig. 1).

Ces deux graphiques mettent en évidence l'avantage du match à domicile, puisqu'au retour il y a au maximum **28%** de chance de ne pas prendre au moins 1 point en jouant à domicile. Il en est de même au match aller, l'équipe recevant perd dans **24%** des cas, pour 30% de matchs nuls et 46% de victoire.

## Les points au retour

<div id="hist-points" class="graph"></div>

Ce dernier graphique (fig. 3) permet de mesurer la moyenne des points marqués au match retour en fonction du résultat du match aller. Deux choses sont à noter sur ce graphique:

 * L'écart de points possibles au retour à après le match aller à domicile est de **0.24**, alors qu'après l'aller à l'extérieur il est de **0.65**.
 * Après une défaite à l'extérieur au match aller, une équipe gagnera plus de points q'une équipe ayant gagné le match aller à domicile (**1.16** points contre **1.14**)

Ce dernier aspect illustre l'importance des matchs à domicile, les résultats du match retour à domicile étant nettement supérieurs. L'écart entre les barres *Ext 0 point* et *Ext 1 point* démontre la supériorité des équipes capables de prendre au moins un point au match aller à l'extérieur.

Malheureusement, il n'est pas possible d'effectuer une projection du nombre de points obtenus au retour à l'aide des chiffres de ce graphique (fig. 3). L'utilisation des points marqués n'est peut être pas la bonne métrique pour effectuer une projection. Mais nos essais ne sont pas terminés...

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
<script type="text/javascript" src="/js/posts/2015-01-06-match-retour.js"></script>
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
    secondLegPointsHist("#hist-points", "fig. 3 - Points moyens marqués au retour après les points pris à l'aller");
</script>