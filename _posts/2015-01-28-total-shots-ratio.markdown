---
layout: post
title:  "Total Shots Ratio"
date:   2015-01-28 20:08:00
---

<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

<script type="text/javascript" src="/js/posts/2015-01-28-total-shots-ratio.js"></script>

<script type="text/javascript">
    MathJax.Hub.Config({
      "HTML-CSS": {
        preferredFont: "STIX"
      }
    });
</script>

**Total Shots Ratio**, ou *ratio du nombre total de tirs*. Dans le domaine des statistiques adaptées aux sports, les pays anglo-saxons sont indéniablement en avance, ce qui signifie que les analystes à l'origine des métriques les ont nommées dans leurs langues maternelles. Pour ne pas dénaturer leur sens et faciliter la lecture de ces métriques, j'ai choisi de garder leurs noms en anglais.

Le **Total Shots Ratio**, souvent abrégé *TSR*, permet de comparer le taux de tirs entre les deux équipes d'un match de football. Ainsi, pour chacune des deux équipes, le TSR sera le ratio du nombre de tir de l'équipe divisé par le nombre total de tirs durant le match:

<math display='block'>
    <mrow>
        <msub>
            <mi>TSR</mi>
            <mn>equipeA</mn>
        </msub>
        <mo>=</mo>
        <mfrac>
            <mrow>
                <msub>
                    <mi>Tirs</mi>
                    <mn>equipeA</mn>
                </msub>
            </mrow>
            <mrow>
                <msub>
                    <mi>Tirs</mi>
                    <mn>equipeA</mn>
                </msub>
                <mo>+</mo>
                <msub>
                    <mi>Tirs</mi>
                    <mn>equipeB</mn>
                </msub>
            </mrow>
        </mfrac>
    </mrow>
</math>

Avec cette formule, on constate que pour un match, la somme des *TSR* de chaque équipe est égale à 1. A travers ce chiffre, il est possible de quantifier le jeu offensif d'une équipe par rapport à son adversaire, et ainsi avoir un outil rapide pour évaluer la domination offensive d'une équipe, qui réussi à la fois à se procurer des occasions de tirs mais également à défendre son but en empêchant les tirs adverses.

## Avantages

Cette formule est intéressante à plusieurs points de vues. Tout d'abord elle est fortement liée au nombre de points gagnés durant la saison. Ainsi sur les saisons 2012/2013 et 2013/2014 de Ligue 1, la corrélation entre le *TSR* et le nombre de points marqués était de 60%, ce qui permet d'utiliser ce chiffre pour situer le niveau des équipes.

Le second avantage du *TSR* est sa répétabilité, chose qui est souvent recherchée lorsque l'on souhaite prédire le résultat d'un match. N'ayant pas de données suffisantes, je n'ai pas pu calculer la corrélation entre le *TSR* d'une année N et le *TSR* d'une année N+1.

[James Grayson](https://jameswgrayson.wordpress.com/2013/11/01/how-repeatable-are-total-shots/ "How repeatable are total shots?") a calculé cette corrélation durant 12 saisons de **Premier League** à partir de 2000/2001, et a trouvé un lien de 74% de répétabilité entre deux saisons consécutives. Il va plus loin en affirmant que le *TSR* est expliqué à 86% par les capacités de l'équipe, contre 14% de chance.

## En Ligue 1

Le tableau ci-dessous (fig. 1) illustre le *TSR* moyen des équipes de **Ligue 1** après la 22ème de la saison 2014/2015. On constate que le *TSR* moyen a un fort lien avec le nombre de points de l'équipe. **Nantes** et **Lille** semblent être dans une position au dessous de ce que pourrait laisser penser leurs *TSR* respectifs, il sera intéressant de vérifier en fin de saison dans quel sens leur *TSR* évoluera.

Inversement, **Montpellier** et **Bastia** sont en meilleure position au classement par rapport à leur *TSR*. Le graphique *fig. 2* peut peut-être apporter une explication.

<div id="ranking"></div>

Ce deuxième graphique (fig. 2), présente l'évolution du *TSR* de chaque équipe depuis le début de la saison 2014. Le *TSR* cumulé de **Bastia** est le plus bas, entre la 6ème et la 12ème journée celui-ci s'est écarté de la courbe "normale" des autres équipes. Après la 12ème journée, l'entraineur des Corses a changé, ce qui peut expliquer que la courbe de Bastia soit de nouveau parrallèle à celles des autres équipes. Depuis la 20ème journée, cette courbe recommence à s'écarter, mais le *TSR* moyen de Bastia a certainement été affecté par cette mauvaise passe.

Il est intéressant de s'attarder sur la courbe du **PSG**, qui a connu un véritable passage à vide entre la 6ème et la 16ème journée, et qui est en train de passer en tête des *TSR* cumulé. Cette courbe semble être à l'inverse de celle de **Saint Etienne**.

<div id="tsr_graph"></div>

## Pour finir

Le principal défaut du *TSR* est certainement la qualité des tirs. En effet un tir du défenseur central aux 35 mètres aura la même valeur que le tir d'un attaquant à 10 mètres du but. Mais le *TSR* apporte tout de même une tendance forte de la capacité d'une équipe à attaquer et à bien défendre.

Sa bonne corrélation avec le nombre de points obtenus et sa répétition entre les saisons sont les éléments qui prouvent qu'il ne faut pas négliger cette variable. Nous nous attarderons sur la qualité des tirs plus tard, lorsqu'il sera question d'*expected goals*.

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
    
    ul {
        display: block;
        list-style-type: none;
        overflow: hidden;
    }
    
    li {
        float: left;
    }
    
    /** TSR chart **/
    .axis path,
    .axis line {
      fill: none;
      stroke: #AAA;
      shape-rendering: crispEdges;
    }

    .grid {
      stroke: #333;
      stroke-dasharray: 2,2;
      shape-rendering: crispEdges;
    }

    .line {
      fill: none;
      stroke: steelblue;
      stroke-width: 1.5px;
    }

</style>

<script type="text/javascript">    
    ranking_hist("#ranking", "fig. 1 - Classement par TSR");
    tsr_graph("#tsr_graph", "fig. 2 - Evolution des TSR par équipe");
</script>