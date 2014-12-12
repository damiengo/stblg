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

Quelques fonction graphique sont présentées: `barplot` pour un graphique en barres (à utiliser avec *table*), `mosaicplot` pour des mosaïques, `boxplot` pour créer une *boîte à moustaches*, `hist` pour un histogramme, `plot` pour des points simples.

### Chapitre 2: Probability

Ce chapitre propose d'examiner le principe de la *main chaude* en *NBA* en prenant l'exemple d'un match de *Kobe Bryant* joué en 2009. La *main chaude* permettrait à un joueur d'enchaîner les paniers plus facilement si sa série en cours de paniers marqué est bonne.

Une fonctione est directement mise à disposition la fonction [calc_streak](http://rstudio-pubs-static.s3.amazonaws.com/13989_27a3853c492c4001a2105b1d657ff1ca.html "Fonction calc_streak") permettant de calculer le nombre de paniers consécutifs. Grâce au graphique en barres (*barplot*), il est possible de visualiser aisément la distribution des différentes séries de paniers.

Si le principe de la *main chaude* est vrai, cela signifie que les paniers marqués sont **dépendants**. A l'inverse, les paniers sont **indépendants** si ce principe n'est pas vérifié. Cette vérification peut être réalisée en comparant les données du match de *Kobe Bryant* avec celle d'un joueur dont les paniers sont totalement indépendants. Des paniers indépendants sont totalement aléatoires, la fonction `sample` de R permet de générer un liste de paniers aléatoirement, avec une probabilité de marquer un panier de 45%, qui est le taux de réussite lors de son match de 2009 (le paramètre *size = 133* représente le nombre de paniers inscrits par le joueur des *Lakers* ce soir là):

    outcomes = c("H", "M")
    sample(outcomes, size = 133, replace = TRUE, prob=c(0.45, 0.55))

En comparant les graphiques en barre de *Kobe Bryant* et du joueur au paniers *indépendants*, on constate que ceux-ci se ressemblent fortement. Avec cette courte étude, il serait possible de conclure que le principe de la main chaude n'existe pas.

### Chapitre 3: Foundations for inference: Sampling distributions

En se basant sur les données de ventes de maisons d'une ville des USA, ce chapitre permet de manipuler principalement la commande `sample`, qui permet d'extraire un échantillon d'une grande liste de données:

    samp50 = sample(games, 50)

Cet exemple extrait 50 matchs au hasard dans la liste.

Grâce aux boucles, il est possible d'extraire plusieurs fois une liste aléatoire d'éléments pour ensuite en calculer la moyenne (par exemple). L'utilisation de l'histogramme permet enfin de vérifier visuellement la tendance de cette moyenne.

Il est intéressant de noter la fonction `rep(NA, 800)`, qui initialise un vecteur de 800 éléments avec la valeur *NA* (équivalent de *vide* dans **R**).

### Chapitre 4: Foundation for inference: Confidence intervals

Ce chapitre permet de vérifier la précision des échantillons du chapitre précédent, en se basant sur des **intervalles de confiance**.

Pour calculer l'intervalle de confiance, il est necéssaire de connaitre l'*erreur type* (standard error). Celle-ci est calculée à partir de la formule suivante:

    se = sd(samp)/sqrt(60)

Où *samp* est l'échantillon de données, `sd` permet de calculer l'écart type et *60* le nombre de valeurs dans l'échantillon.

Pour calculer un intervalle de confiance de 95%, il faut ajouter et soustraire 1.96 fois l'erreur type de la moyenne de l'échantillon, soit:

    lower = sample_mean - 1.96 * se
    upper = sample_mean + 1.96 * se

Les valeurs `lower` et `upper` obtenues sont les bornes minimale et maximale de cet intervalle de confiance.

### Chapitre 5: Inference for numerical data

Dans ce chapitre, la commande `na.omit` est présentée pour supprimer les valeurs vide (NA) d'un jeu de données. La partie la plus importante du chapitre concerne l'*inférence statistique*, qui permet de déterminer des caractéristiques inconnue d'une population à partir d'un échantillon de cette population.

Une fonction `inference` créée pour le cours masque la mécanique de génération de l'inférence.

Une autre fonction, `by`, est présentée pour grouper un élément de catégorie avec un élément numérique:

    by(weight, habit, mean)

Cet exemple groupe le poids par habitude, en appliquant la fonction `mean` sur la valeur du poids.

En fin de chapitre, une analyse de la variance (ANOVA) est réalisée pour verifier que plusieurs échantillons sont issus d'une même population.

### Chapitre 6: Inference for categorical data

Ce chapitre reprend l'inférence statistique mais en se basant sur des données de catégorie. Un calcul de proportion des données extraite est réalisé à l'aide des commande `subset` et `nrow`. Un exemple de calcul de la *marge d'erreur* est donnée, celui étant en fait la moyenne des bornes haute et basse de l'intervalle de confiance.

### Chapitre 7: Introduction to linear regression

A partir du célèbre ouvrage *Moneyball*, ce chapitre propose une introduction à la *régression linéaire*, qui permet de déterminer la corrélation plus ou moins forte entre deux variable. La première commande intéressante est `cor`, qui permet de trouver le coefficient de corrélation entre deux variables:

    cor(runs, at_bats)

L'exemple précédent permet de trouver la corrélation entre les points et les passages à la batte.

La fonction `lm` (*linear model*), permet de déterminer les données de régression linéaire entre deux variables:

    lm(runs ~ at_bats, data = mlb11)

En utilisant la fonction `summary` sur cette régression, il est possible de connaitre les données de cette régression.

Graphiquement, une régression linéaire peut être représentée par la fonction `plot`. La ligne de régression peut être tracée à l'aide de la fonction suivante:

    abline(lm(runs ~ at_bats, data=mlb11))


