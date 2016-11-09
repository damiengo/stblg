---
layout: post
title:  "Prédictions de l'Euro 2016"
date:   2016-06-14 22:22:22
---

Dans le livre *Soccernomics*, les auteurs indiquent que la richesse, l'expérience et la taille de la
population sont des éléments importants pour déterminer la valeur d'une équipe nationale. A partir de
ces informations et quelques autres, voyons dans quelle mesure les matchs de poules de l'Euro 2016
peuvent être prédits, ou plutôt quels pourcentage de victoire, nul ou défaite peuvent y être associés.

Cet article est un essai ayant pour but de tester des librairies de *Machine Learning* supervisé. Avant
le lancement des tests, il est évident que la quantité de données utilisée ne permet pas d'obtenir un
résultat exploitable. Cependant, les éléments récoltés permettent d'obtenir un tendance et des
indications dur les facteurs de prédiction des matchs de l'Euro 2016.

## Récolte des données

L'objectif de ce test est de prédire les résultats de matchs de poules de l'Euro 2016 en utilisant
les données suivantes pour chaque équipe:

 * Le classement FIFA (année précédente)
 * La population (année précédente)
 * Le PIB (année précédente)
 * Le nombre de participations à l'Euro

Pour chaque Euro depuis 1996, ces éléments ont été récoltés pour chaque équipe et utilisés en entrée
de deux outils de prédictions: une classification Random Forest et une autre xgboost.
