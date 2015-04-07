---
layout: post
title:  "Shots on target"
date:   2015-04-07 22:47:08
---

<style>

    .bar {
      fill: steelblue;
    }

    .bar:hover {
      fill: brown;
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

<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

<script type="text/javascript" src="/js/posts/2015-04-07-shots-on-target.js"></script>

<script type="text/javascript">
    MathJax.Hub.Config({
      "HTML-CSS": {
        preferredFont: "STIX"
      }
    });
</script>

Les **tirs cadrés**, ou *shots on target (SoT)* en anglais, sont l'une des données statistique les plus présentes dans les analyses ou présentations de matchs de football. Le nombre de tirs cadrés est un indicateur intéressant pour savoir si une équipe est dangeureuse, car sans intervention efficace de l'équipe adverse, le tir se termine en but.

Cette statistique s'applique généralement à une équipe mais également aux joueurs. En utilisant ce chiffre en ratio avec une autre mesure, il est possible d'obtenir des mesures intéressantes pour comparer les équipes ou les joueurs.

## Ratio du nombre de tirs cadrés

Le ratio du nombre de tirs cadrés s'exprime en divisant le nombre de tirs cadrés par le nombre total de tirs, soit:

<math display='block'>
    <mrow>
        <msub>
            <mi>Ratio</mi>
            <mn>tirs cadrés</mn>
        </msub>
        <mo>=</mo>
        <mfrac>
            <mrow>
                <msub>
                    <mi>Nombre</mi>
                    <mn>Tirs cadrés</mn>
                </msub>
            </mrow>
            <mrow>
                <msub>
                    <mi>Nombre</mi>
                    <mn>Tirs au but</mn>
                </msub>
            </mrow>
        </mfrac>
    </mrow>
</math>

Un tir cadré est un tir que l'on peut qualifier de qualité, car le tireur a pu tenter sa chance en atteignant le but. Un ratio élevé illustre l'aptitude d'une équipe à se procurrer des occasions de qualité, ayant plus de chances de se transformer en but.

<div id="sot_teams"></div>

Le graphique ci-dessus (fig. 1) présente le pourcentage de tirs cadrés par équipe à la 31ème journée de Ligue 1 2014/2015. Le classement du pourcentage de tirs cadrés n'est pas identique au classement par points. Il représente tout de même la place globale au classement par points, **Guingamp** et **Bastia** étant plus haut que leur place par points avec une présence dans le top 5. Le **PSG** domine clairement le classement, la dernière place de **Toulouse** représente bien les maux de l'équipe, l'arrivée de *Dominique Arribagé* aux commandes de l'équipe va peut être modifier la donne.

## Pourcentage du nombre de but

Ce ratio est également intéressant car il illustre la capacité des joueurs d'une équipe à se procurer des occasions franches, ou à cadrer des frappes dans des positions difficiles. Il est compliqué de séparer d'un côté l'apport d'un jeu d'équipe rodé permettant d'avoir une occasion franche, et de l'autre côté l'aptitude d'un joueur qui saura se défaire du marquage et obtenir une occasion nette, ou alors un joueur adroit qui aura plus de capacité à cadrer un tir jugé difficile.

Cependant, le pourcentage de tirs cadrés pour un joueur est un élément intéressant pour déterminer ses aptitudes techniques. En couplant ce chiffre avec le nombre de buts marqués, on obtient un graphique intéressant présentant l'efficacité d'un joueur devant le but.

<div id="sot_players"></div>

Le graphique ci-dessus (fig. 2) illsutre bien le lien entre le taux de tirs cadrés et le nombre de buts. **André-Pierre Gignac** semble avoir un taux de tirs assez bas compte tenu du nombre de buts marqués, ayant cadré 44% de ses tirs pour 18 buts inscrits. Il est le seul joueur de Ligue 1 à plus de 100 tirs cette saison, avec 118 tirs, le second étant **Ibrahimovic** avec 85 tirs au but.

Le joueur le plus précis cette saison est **Christophe Mandanne** avec un taux de 63% de tirs cadrés (9 buts). Avec **Claudio Beauvue** ayant 50% de tirs cadrés pour 12 buts, les deux joueurs sont l'illustration du bon classement général de **Guignamp** au nombre de tirs cadrés.

<script type="text/javascript">
    sotByTeams("#sot_teams");
    sotByPlayers("#sot_players");
</script>
