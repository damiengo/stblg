---
layout: post
title:  "Les réseaux de neuronnes pour calculer les expG"
date:   2017-01-16 17:15:28
---

L'intelligence artificielle prend beaucoup d eplace aujourd'hui, et un outil de modélisation
à le vent en poupe: les réseaux de neuronnes. Nommés *neural network* en anglais, ces réseaux
permettent d'analyser des images, repérer du texte, ou encore comprendre le langage humain.

Dans le même temps, la communauté d'analystes active sur *twitter* utilise depuis quelques
années une mesure de la qualité des occasions créées appelé *expected goals*, ou *expg*, ou *xG*.

Cet article décrit comment un réseau de neuronnes peut calculer les *expected goals*.

## Qu'est ce que les expG

Les expected goals, abbrégés expG ou xG, représentent la propbabilité qu'un tir se tranforme en but.
Pour chaque tir, une valeur entre 0 et 1 est calculée à l'aide d'une méthode de calcul. Cette méthode
n'est pas fixe mais utilise necéssairement des paramètres en entrée pour calculer une valeur en sortie.

Les paramètres utilisés peuvent être la distance au but, l'angle par rapport à celui-ci, si le tir est
effectué de la tête, à la suite d'un centre, etc. Voici un article expliquant plus en détails le principe
des expected goals.

Pour l'exercice d'aujourd'hui, nous allons utiliser un réseau de neuronne comme outil de calcul.

## Les réseaux de neuronnes

Dans le monde de l'intelligence artificielle et du machine learning, les réseaux de neuronnes
(neural network en anglais) sont très à la mode. Des exemples apparaissent cahque jours pour reconnaitres
des images, des dessins, du texte, du son, etc. Ce type d'algorithme a de multiples applications, nous allons
l'utiliser pour calculer les expected goals au football.

Pour ce faire, voici une explication du fonctionnement d'un réseau de neuronnes.

### Le réseau

Le réseau de neuronnes est un ensemble de noeuds reliés entres eux. Chaque noeud possède plusieurs
entrées, et une sortie. Les lien entre les noeuds, qui sont appelés synapse, apportent un poids aux valeurs
transittant sur ces liens.

### Les neuronnes

 * 1 - Réseau simple: erreur par différence, pas de scaling de features, sigmoid
 * 2 - Améliorations: erreur RMSE, scaling de features, tanh et softmax, nombre de neuronnes, biais, régularisation, mini-batch
                      (Régression linéaire)[http://briandolhansky.com/blog/artificial-neural-networks-linear-regression-part-1]

 * Difficile d'avoir des résultats concluants avec RMSE
