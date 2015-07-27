---
layout: post
title:  "Expected Goals"
date:   2015-07-26 16:12:08
---

<style>
  .hexagon {
    fill: none;
    stroke: #000;
    stroke-width: .2px;
  }

  .axis {
    font: 10px sans-serif;
  }

  .axis path,
  .axis line {
    fill: none;
    stroke: #666;
    shape-rendering: crispEdges;
  }

  .grid {
    stroke: #AAA;
    stroke-dasharray: 2,2;
    shape-rendering: crispEdges;
  }
</style>

<script type="text/javascript" src="/js/posts/2015-07-26-expected-goals.js"></script>

Après le [TSR](/2015/01/28/total-shots-ratio/ "Total Shots Ratio"), le [ShT](/2015/04/07/shots-on-target/ "Shots On Target") et le [PDO](/2015/05/28/pdo/ "PDO"), voici une autre donnée statistique en vogue dans la communauté d'analyste du football:
l'**ExpG** ou **expected goals**. Ce chiffre, parfois abrégé **xG**, représente le nombre de buts qu'une équipe ou un joueur peut éspérer marquer en fonction de ses tirs.

Ainsi, pour chacun des tirs d'une équipe, une probabilité de marquer est données. A la différence des statistiques citées en début d'article, l'ExpG n'a pas de formule de calcul précise:
chaque personne peut apporter sa propre formule à partir des éléments qui semblent pertinents pour ce calcul.

## Exemple simple

Le schéma suivant (fig. 1) illustre l'ExpG des tirs en fonctions de la position sur le terrain (x et y), et du type de tir (du pied ou de la tête). Les données des saisons 2013/2014 et 2014/2015 du championnat de France de Ligue 1 sont utilisées, les penaltys étants exclus du calcul.

La méthode de génération de ces valeurs a consisté en une régression logique réalisée via la librairie [scikit-learn](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html "Scikit Learn").

<div id="expg_field"></div>

## Lien avec les buts réels

L'expected goal à l'avantage de tenir compte de la qualité du tir, en comparaison au nombre de tirs ou nombre de tirs cadrés, pour lesquels seuls comptent le nombre de tirs.
Ainsi, il est possible d'établir un lien entre l'ExpG d'une équipe et son nombre de buts réellement marqués. En additionnant l'ExpG de chaque tir d'une équipe et en le comparant
avec le nombre de buts marqués, on obtient le graphique suivant (fig. 2).

<div id="expg_by_teams"></div>

Le coefficient de détermination (R²) de ce graphique est égal à 0.65, ce qui signifie que le lien entre l'ExpG et les buts marqués n'est pas significatif.

## Amélioration

D'autres paramètres peuvent être utilisés pour calculer un ExpG plus précis. En s'inspirant de la [description de l'expected goals](http://cartilagefreecaptain.sbnation.com/2014/9/11/6131661/premier-league-projections-2014#methoderology "Expected Goals by Michael Caley") réalisée par [Michael Caley](https://twitter.com/MC_of_A "@MC_of_A"), voici les paramètres utilisés pour améliorer notre calcul d'ExpG:

 * **Distance** du but: au lieu d'utiliser les coordonnées du tir, la distance entre la position du tir et l'axe du but est utilisée
 * **Angle** par rapport au but: en complément du paramètre précédent, l'angle par rapport au centre du but est un facteur pour qualifier la difficulté du tir
 * Tir de la **tête**: ce paramètre reste inchangé, il détermine si le tir est effectué de la tête
 * Tir suite à un **corner**: Le tir est-il consécutif à un corner

<div id="expg_v2_by_teams"></div>

Ce dernier graphique a un coefficient de détermination de 0.73, donc plus performant que notre premier calcul d'expected goals.

## Utilisation

Nous verrons dans un article suivant comment utiliser ce chiffre pour analyser le résultat des matchs en Ligue 1. Il est possible par exemple de produire pour chaque match un graphique des ExpG de chaque tir, et ainsi connaitre la qualité des tirs de chaque équipe. Voici un graphique produit par [Michael Caley](https://twitter.com/MC_of_A "@MC_of_A") après le quart de finale de Coupe du Monde féminine 2015 entre la *France* et l'*Allemagne*:

<blockquote class="twitter-tweet" lang="fr"><p lang="en" dir="ltr">xG map for <a href="https://twitter.com/hashtag/GER?src=hash">#GER</a>-<a href="https://twitter.com/hashtag/FRA?src=hash">#FRA</a>. <a href="https://twitter.com/hashtag/FRA?src=hash">#FRA</a> outplayed the world&#39;s best team for 120 minutes. Then there were penalties. <a href="http://t.co/5ZXER9dyJK">pic.twitter.com/5ZXER9dyJK</a></p>&mdash; Michael Caley (@MC_of_A) <a href="https://twitter.com/MC_of_A/status/614563978946158592">26 Juin 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Une autre possibilité est de présenter cet expected goals sous forme de graphique temporel, à la façon de [11tegen11](https://twitter.com/11tegen11 "@11tegen11"), ici la finale de la Ligue des Champions 2015 entre la *Juventus de Turin* et le *FC Barcelone*:

<blockquote class="twitter-tweet" lang="fr"><p lang="en" dir="ltr">Juve clearly had their best spell early in the second half, while Barça were steady throughout. <a href="https://twitter.com/hashtag/barjuv?src=hash">#barjuv</a> <a href="http://t.co/07XukFFfGk">pic.twitter.com/07XukFFfGk</a></p>&mdash; 11tegen11 (@11tegen11) <a href="https://twitter.com/11tegen11/status/607289682477608960">6 Juin 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Enfin, l'expected goals permet de jauger la valeur d'un joueur, en comparant son nombre de buts par rapport au nombre de buts qu'il peut espérer marquer. Ce calcul est amené à évoluer et à s'affiner dans le temps, mais cette base devrait être utilisable rapidement.

<script type="text/javascript">
    expgField("#expg_field");
    expgByTeams("#expg_by_teams", "/data/exp_goals_by_teams.tsv", "fig. 2 - Expected Goals simple par équipe en 2013/2014 et 2014/2015", {"x1": 20, "y1": 35, "x2": 80, "y2": 56});
    expgByTeams("#expg_v2_by_teams", "/data/exp_goals_v2_by_teams.tsv", "fig. 3 - Expected Goals amélioré par équipe en 2013/2014 et 2014/2015", {"x1": 20, "y1": 33.9, "x2": 75, "y2": 61.4});
</script>
