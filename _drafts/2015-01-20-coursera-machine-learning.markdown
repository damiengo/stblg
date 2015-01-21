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
