---
layout: post
title:  "Classement ELO"
date:   2015-09-22 21:59:08
---

<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

<script type="text/javascript">
    MathJax.Hub.Config({
      "HTML-CSS": {
        preferredFont: "STIX"
      }
    });
</script>

La comparaison de deux équipes de football n'est pas toujours chose aisée. Le premier moyen utilisé est
souvent la place au classement du championnat. On utilise parfois également le nombre de buts marqués ou
encaissés. La comparaison des joueurs composant les équipes peut également servir de base comparative.

Si le championnat n'est pas assez avancé et que les équipes ne se sont pas toutes rencontrées, le classement
par point ou le nombre de buts marqués ou encaissés ne permettent pas de comparer objectivement deux équipes.
Le classement Elo, utilisé initialement pour classer les joueurs d'échec, est un outil plus sûr pour comparer
la valeur des équipes.

## Au origines

En 1960, la fédération américaine d'échec adopte le classement Elo pour classer ses joueurs. Ce système inventé
par **Arpad Elo** permet de classer les joueurs en ajoutant ou retirant après chaque match un nombre de points,
calculés en fonction du niveau de leurs adversaires.

Chaque équipe possède un nombre de points en fonction de ses performances passées. Plus le nombre de points est
élevé, plus l'équipe est performante. Lors des confrontations entre équipes, si une équipe obtient des performances
supérieures à son niveau estimé, elle gagné des points Elo, et inversement en cas de contre-performances.

## Fonctionnement

Lorsque deux équipe se rencontrent, une probabilité de gain est calculée à partir du classement de chaque équipe.
La formule suivante détermine cette probabilité de gain:

<math display='block'>
    <mrow>
        <msub>
            <mi>p</mi>
        </msub>
        <mo>=</mo>
        <mfrac>
            <mrow>
                <msub>
                    <mi>1</mi>
                </msub>
            </mrow>
            <mrow>
                <msub>
                    <mi>1</mi>
                </msub>
                <mo>+</mo>
                <msup>
                    <mi>10</mi>
                    <mn>-dr/400</mn>
                </msup>
            </mrow>
        </mfrac>
    </mrow>
</math>

Où dr est la différence de points Elo entre les deux équipes. A partir de cette probabilité, le nombre de points Elo
gagnés ou perdus sont calculés par la formule suivante:

<math display='block'>
    <mrow>
        <msub>
            <mi>&Delta;Elo</mi>
        </msub>
        <mo>=</mo>
        <mrow>
          <mi>(R - p)</mi>
          <mo>*</mo>
          <mi>k</mi>
        </mrow>
    </mrow>
</math>

Où R est le résultat de l'équipe (1 pour une victoire, 0.5 pour un nul et 0 pour une défaite), p est la probabilité de
victoire calculée précédement et k est le coefficient de développement. Pour le classement Elo aux échec, ce coefficient
doit permettre aux nouveaux joueurs d'atteindre rapidement leur niveau réel, il varie donc comme ceci:

 * 40 pour les 30 premières parties
 * 20 tant que le joueur est sous les 2400 points
 * 10 au dessus de 2400 points

Un coefficient élevé permet d'atteindre rapidement la valeur réelle mais subit de nombreuse variations, tandis qu'un
coefficient plus faible converge moins rapidement vers le niveau réel mais est plus stable.

Pour les clubs de football, un classement Elo est déterminé par le site [clubelo.com](http://www.clubelo.com "clubelo.com").
Ce site utilise le coefficient *k = 20*, valeur qui sera la notre puisque les valeurs de ce site seront utilisées dnas les
exemples suivants.

## Exemple d'échange de points

## Plus gros exploits en Ligue 1

## Utilisation d'Elo pour la prédiction
