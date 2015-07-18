---
layout: post
title:  "Expected Goals"
date:   2015-06-23 22:27:08
---

<style>
  .hexagon {
    fill: none;
    stroke: #000;
    stroke-width: .2px;
  }
</style>

<script type="text/javascript" src="/js/posts/2015-06-23-expected-goals.js"></script>

Après le [TSR](/2015/01/28/total-shots-ratio/ "Total Shots Ratio"), le [ShT](/2015/04/07/shots-on-target/ "Shots On Target") et le [PDO](/2015/05/28/pdo/ "PDO"), voici une autre donnée statistique en vogue dans la communauté d'analyste du football:
l'ExpG ou expected goals. Ce chiffre, parfois abrégé xG, représente le nombre de buts qu'une équipe ou un joueur peut éspérer marquer en fonction de ses tirs.

Ainsi, pour chacun des tirs d'une équipe, une probabilité de marquer est données. A la différence des statistiques citées en début d'article, l'ExpG n'a pas de formule de calcul précise:
chaque personne peut apporter sa propre formule à partir des éléments qui semblent pertinents pour ce calcul.

## Exemple simple

Le schéma suivant (fig. 1) illustre l'ExpG des tirs en fonctions de la position sur le terrain (x et y), et du type de tir (du pied ou de la tête). Les penaltys sont exclus du calcul.
La méthode de génération de ces valeurs a consisté en une régression logique réalisée via la librairie [scikit-learn](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html "Scikit Learn").

<div id="expg_field"></div>

## Lien avec les buts réels

L'expected goal à l'avantage de tenir compte de la qualité du tir, en comparaison au nombre de tirs ou nombre de tirs cadrés, pour lesquels seuls comptent le nombre de tirs.
Ainsi, il est possible d'établir un lien entre l'ExpG d'une équipe et son nombre de buts réellement marqués. En additionnant l'ExpG de chaque tir d'une équipe et en le comparant
avec le nombre de buts marqués, voici le graphique obtenu (fig. 2):



## Utilisation

Nous verrons dans un article suivant comment utiliser ce chiffre pour analyser le résultat des matchs en Ligue 1.

http://peterbeshai.com/buckets/app/#/leagueView/2014

<script type="text/javascript">
    expgField("#expg_field");
</script>
