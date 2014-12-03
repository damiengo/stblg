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

### Chapitre 4: Factors

Les facteurs sont des variables de type catégorie, qu'il est possible d'extraire d'un vecteur à l'aide de la fonction `factor`.

    gender_vec = ("Male", "Female", "Female", "Male")

Ce vecteur retourne les facteurs *Male* et *Female* avec la fonction `factor`. Le paramètre *ordered* permet de trier l'ordre des facteurs, et la fonction `summary` permet de résumer le nombre de valeurs dans chaque facteurs.

Les facteurs sont un bon moyen de grouper des résultats par type de variable, et de manipuler ces types de variable.

### Chapitre 5: Data frames

Les *data frames* dans R représentent une liste de données de types hétérogènes, commes des entiers, booléens, chaines de caractères. On peut rapprocher ces *data frames* d'une table de base de données ou d'un fichier de données CSV par exemple. 

Il existe plusieurs moyens de créer des *data frames*, par exemple en agrégant une liste de vecteurs de taille identique, ou en lisant un fichier de données CSV.

    teams  = c("Rennes", "Nantes", "Lorient", "Brest", "Guingamp")
    points = c(10, 9, 6, 6, 8)
    ch = data.frame(teams, points)

La fonction `subset` est intéressante dans le cadre de l'utilisation des *data frames*, puisqu'elle permet d'extraire une sous-partie d'un jeu de données en fonction de la valeur d'une variable.

    sup9 = subset(ch, subset=(ch$points > 9))

### Chapitre 6: Lists

Une liste permet d'assembler un ensemble de variables relatives à une données, en y associant des clés:

    player = list(name="Name", bearth=1986, pos="Forward")

L'accès aux éléments de la liste est effectué grâce au signe *$*:

    name = player$name

Une liste peut contenir des types primitifs ainsi que des vecteurs, matrices, data frames ou d'autres listes.

### Avis

Ce cours est pratique pour apprendre les bases de R et se familiariser avec la syntaxe. Il demande peu de temps et aucune recherche hors du site n'est necéssaire, les exercices s'enchainent donc très rapidement.

## Data analysis and statistical inference

Ce cours destiné aux débutant est réalisable en 9 heures. Il propose d'apprendre à utiliser des données pour réaliser des analyses et extraire des informations avec des exemples concrets.

### Chapitre 0: Introduction to R

Ce chapitre d'introduction au langage R permet d'entrer directement dans le vif du sujet en analysant des données réelles de naissances par années aux Etats-Unis. Des fonctions de lecture de fichier comme `read.table` sont présentées, ou la fonction `plot` qui permet de créer un graphique à partir de données:

    plot(years, presents, type="l")

Hormis ces commandes basiques, des questions à choix multiple permettent de valider les connaissances de l'étudiant.

### Chapitre 1: Introduction to Data

A partir de données sur la santé aux USA, ce chapitre permet de manipuler les données d'un *data frame* comme cela a été présenté au cours précédent. La fonction `table` est intéressante pour sommer les occurences en groupant par catégorie:

    table(players$goals)

L'exemple précédent retourne le nombre de joueurs ayant marqué chaque nombre de buts.

Quelques fonction graphique sont présentées: `barplot` pour un graphique en barres, `mosaicplot` pour des mosaïques, `boxplot` pour créer une *boîte à moustaches*, `hist` pour un histogramme, `plot` pour des points simples.
