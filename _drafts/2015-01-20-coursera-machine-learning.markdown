---
layout: post
title:  "Coursera: Machine Learning"
date:   2015-01-20 20:08:00
---

Coursera propose un cours en ligne consacré au Machine Learning. Ce cours de l'université de *Stanford* est présenté par *Andrew NG*, et se déroule sur 3 mois.

## Semaine 1

### Introduction

Andrew présente dans cette introduction les domaines d'application du Machine Learning. Ils vont des acteurs du web cherchant à mieux connaître les internautes aux médecins effectuant des recherches sur les maladies ou la génétique. Deux définitions d'Arthur Samuel et Tom Mitchell sont présentées.

Le *Supervised Learning* est une sorte de Machine Learning dans lequel les bonnes réponses sont connues par les machines. Les régressions et les classifications sont abordées pour distinguer les différentes sortes de représentations de données.

Le *Unsupervised Learning* est une seconde sorte d'appliquer le Machine Learning, à partir de données dont on ne connait pas les bonnes ou mauvaises réponses. Il peut d'agir de grouper des éléments entre eux selon certains critères, ou de séparer des données (comme des flux audio).

### Linear Regression with One Variable

La fonction permettant d'estimer y en fonction de x est l'appelée l'*hypothèse* (the hypothesis). Une régression linéaire à une seule variable est également appelée *univariate linear regression*.

La *Cost function* est la minimisation de la somme de la différence entre les prédictions et les valeurs réelles au carré, également appelée *Squarred error function*. La courbe représentant cette fonction permet de visualiser facilement la valeur minimale. Les *contour plots* ou *contour figures* permettent de visualer les différentes valeurs de *θ0* et *θ1* provoquant le même minimum pour la *COst function*.

Le *Gradient descent algorithm* permet de minimiser la valeur de la *Cost function*. Cet algorithme utilise la dérivée en un point x d'une courbe et la multiplie par le pas. Puis cette dérivée en un point est soustraite à ce point x et affectée à la valeur de x. Petit à petit, cet algorithme arrive à une valeur de dérivée à 0 qui immobilise la valeur de x. Le terme *"Batch" gradient descent* est utilisé pour indiquer que chaque itération de l'aglorithme utilise toutes les valeurs de l'exemple.

### Linear Algebra Review

Ce rappel présente les matrices et les vecteurs, qui sont respectivement représentés par des les en majuscules et miniscules. Lorsque l'on indexe une entrée d'une matrice, on indique toujours le numéro de ligne en premier, puis le numéro de colonne.

Une addition de matrice est possible uniquement si les matrices sont de la même dimension. Chaque élément à chaque position est additionné. Il est possible de multiplier une matrice par un nombre en multipliant chaque élément de la matrice par ce nombre.

La mutliplication d'une matrice par un vecteur est possible uniquement si le nombre de colonnes de la matrice est égale au nombre de ligne du vecteur. Chaque élément de la ligne de la matrice est multiplié par l'élément correspondant du vecteur, et tous ces éléments multipliés sont ensuite ajoutés pour former le résultat de la ligne. Le résultat est un vecteur dont le nombre de lignes est égal au nombre de lignes du vecteur ayant servi à la multiplication.

La multiplication de deux matrices reprend la multiplication d'une matrice et d'un vecteur, en multipliant chaque colonne du second vecteur par les lignes de la première matrice. La matrice en résultat possèdera en nombre de lignes le nombre de lignes de la première matrice, et en nombre de colonnes le nombre de colonnes de la seconde matrice. La multiplication de matrices n'est pas commutative (on ne peut pas changer l'ordre des matrices) mais associative (on peut commencer par n'importe quelle multiplication dans le cas d'une opération avec plus de 2 matrices). La matrice d'identité est carrée et contient uniquement des 0, hormis sur la plus grande diagonale qui possède des 1.

L'inverse d'une matrice est une nouvelle matrice qui si on la multiplie avec la matrice d'origine retourne la matrice identité. Il est difficile de la calculer manuellement. La transposition d'une matrice est la "rotation" d'une matrice vers la droite selon une droite diagonale passant au milieu de la matrice. Ainsi A(ij) = B(ji).

## Semaine 2

### Linear Regression with Multiple Variables

Ce chapitre présente les régressions linéaires à plusieurs variables, permettant de pondérer l'impact de chacunes de variables sur le résultat final. L'algorithme *gradient descent* est utilisé pour calculer la régression linéaire. Il s'agit du même algorithme que celui utilisé pour la régression linéaire simple, on multiplie simplement la partie sommée par X(i)j.

Le *feature scaling* permet d'accélérer l'algorithme *gradient descent* en enlevant la moyenne des valeurs à la valeur calcuclée, et en divisant ce résultat par l'écart entre les bornes supérieure et inférieure du jeu de données.

Le *learning rate* peut être difficile à ajuster pour obtenir un résultat rapide et concluant. Un taux trop petit ralenti la recherche alors qu'un taux trop grand peut rater la recherche de la valeur idéale. Il est important d'afficher la courbe de J(θ).

Les régressions polynomiales permettent de modéliser une régression à l'aide de fonctions différentes d'une simple équation linéaire, en utilisant des racines carrées, mise au carré, cube, etc.

L'utilisation de l'équation normale est une autre possibilité pour calculer une régression linéaire, en utilisant la transposition et l'inversion de matrices. Jusqu'à un nombre de *features* inférieur à 10000, cette méthode est avantageuse, au dessus de cette valeur, le *gradient descent* sera plus rapide car l'ivnersion et la transposition de matrice prennent du temps. S'il n'est pas possible d'inverser une matrice, il faut tenter de supprimer les *features* redondantes, ou de supprimer des *features* car il y en a trop par rapport au jeu de données utilisé.
 
### Octave Tutorial
 
Cette section permet d'apprendre les fonctions de base d'octave pour manipuler les nombres, les matrices, les graphiques, les vecteurs de calcul.

## Semaine 3

### Logistic Regression

La *logistic regression* est un algorithme similaire à la *linear regression*, mais pour des valeurs discrètes. La *sigmoid function* ou *logistic function* est de type 1/x, et son résultat est obligatoirement compris entre 0 et 1.

Le *decision boundary* permet de séparer les données où y=0 et y=1. Il n'est pas forcément linéaire et est représenté par une équation polynomiale. La *cost function* va permettre de déterminer les paramètres *θ* de l'équation. L'algorithme de minimisation de la *cost function* pour une *logistic regression* est le même que pour la *linear regression*, au détail prêt que la fonction h(x) est différente.

Le *gradient descent* n'est pas le seul algorithme utilisable pour calculer une régression, des algorithmes plus performant et plus complexes existent. Il faut utiliser les librairies à disposition et ne pas les développer soi-même vu leur complexité.

La régression *un contre tous* permet de considérer plus de 2 éléments de régression, et à pour objectif d'effectuer une régression en isolant chacun des élements contre les k-1 autres.

### Regularization

L'*overfitting* décrit une régression où il y a trop de *features* qui donnent une équation correcte vis à vis des éléments de l'échantillon, mais ne permettent pas de prédire de nouveaux éléments (souvent une équaion polynomiale avec trop de paramètres). La *regularization* permet d'ajuster un *overfitting* en ajoutant un paramètre lambda à la *cost function*.

La *regularization* d'une régression linéaire ou une équation normale reprend la fonction J(θ), en y ajoutant l'élément de régularisation avec lambda. La *regularization* d'une *logistic regression* consiste à soustraire lambda/m * θj à l'équation de base.

## Semaine 4

### Neural Networks: Representation

Dans le domaine du *machine learning*, le *Neural Network* a été utilisé depuis les années 80, ayant pour but de simuler la capacité d'apprentissage du cerveau. L'implémentation vectorisée est aussi appelée *Forward propagation*.

## Semaine 5

### Neural Network: Learning

Le *Backpropagation algorithm* permet de détecter les erreurs des noeuds à chaque couche (sauf pour la première couche). Ce chapitre explique la transformation de matrice en vecteur et inversement, à l'aide de *reshape*. Le *numerical gradient computation* doit donner le même résultat que le *Backpropagation algorithm*, mais il est plus lent. Il sert uniquement de validation pour le premier algorithme. La *Random initialisation* permet de casser la symétrie.

## Semaine 6

### Advice for Applying Machine Learning

Ce chapitre est uile pour gagner du temps dans le debugging et l'amélioration des algorithmes de *Machine Learning*. Le *Diagnostic* est un test qui permet de savoir ce qui fonctionne ou pas dans l'algorithme, et permet de l'améliorer. Il peut prendre du temps à implémenter, mais le gain de temps final est tout de même important. Le test peut s'effectuer sur une sous-partie des données, en extrayant 30% de celles-ci au hasard.

La comparaison des courbes de *training error* et *cross validation error* permettent de définir si c'est un problème de *bias* ou de *variance*.

| Fix high variance        | Fix high bias               |
|--------------------------|-----------------------------|
| More training examples   | Getting aditionnal features |
| Smaller sets of features | Adding polynomial features  |
| Increasing lambda        | Decreasing lambda           |

### Machine Learning System Design

Plusieurs possibilités sont réalisables pour créer un algorithme de *Machine Learning*, il faut les analyser avant de se lancer dans l'implémentation d'un algorithme. La première version de l'algorithme doit être développée très rapidement pour ensuite pour faire une analyse d'erreur et savoir quels sont les points à améliorer par la suite.