---
layout: post
title:  "Datacamp pour manipuler les données"
date:   2014-11-28 18:48:00
---

Le site [datacamp](http://www.datacamp.com "Datacamp") offre la possibilité d'apprendre à utiliser l'outil [R](http://www.r-project.org "R") pour manipuler les données. Sur ce site en anglais, on retrouve plusieurs cours répartis en différents niveaux qui permmetent à l'utilisateur  d'apprendre à manipuler les données principalement à l'aide de R, un outil peremttant les calculs statistiques et la génération de graphiques.

Le site datacamp est intéressant car l'apprentissage s'effectue à partir d'exemples concrets, et chaque chapitre est découpé en exercices demandant à l'élève de répondre aux questions en soumettant du code R dans une console d'éxécution.

## Introduction to R

Ce [premier cours](https://www.datacamp.com/courses/introduction-to-r "Introduction to R") est destiné aux débutants et est réalisable en 4 heures selon le site.

### Chapitre 1: Intro to basics

Cette introduction permet de se familiariser avec le fonctionnement de datacamp et du langage R, en apprenant comment affecter des variables et effectuer des opérations simples.

### Chapitre 2: Vectors

Dans ce chapitre on entre dans le vif du sujet avec la présentation des vecteurs, déclarés grace à la fonction `c`:

    vector_var = c("Lundi","Mardi","Mercredi")

Plusieurs autres fonctions d'actions sur les vecteur sont présentées, comme le nommage grâce à `names`, l'addition position par position avec `sum`, la sélection des indices d'un vecteur avec `[2:8]`, où encore l'utilisation d'opérateurs sur un vecteur, tel que:

    vector_win = (10, 20, 30, 40)
    sup_20 = vector_win > 20

Ce dernier exemple retourne un vecteur contenant des booléens à chaque indice, qui déterminent si chaque élément du vecteur est supérieur à 20.

### Chapitre 3: Matrices

Les matrices dans R représentent un tableau à deux dimensions avec le même type de données. Elles sont définies grâce au mot-clé `matrix`, et contiennent plusieurs lignes et colonnes. La déclaration d'une matrice peut se faire grâce aux vecteurs:

    vec1 = c(1,2,3)
    vec2 = c(4,5,6)
    vec3 = c(7,8,9)
    matr = matrix(c(vec1, vec2, vec3), byrow=TRUE, nrow=3)

La navigation dans les matrices est présentée, à l'aide de `[2;4,1:5]`, ou encore `[1,]` pour sélectionner tous les éléments de la première ligne, ou `[,1]` pour sélectionner tous les éléments de la première colonne.


