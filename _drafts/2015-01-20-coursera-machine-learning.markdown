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

## Linear Regression with One Variable

La fonction permettant d'estimer y en fonction de x est l'appelée l'*hypothèse* (the hypothesis). Une régression linéaire à une seule variable est également appelée *univariate linear regression*.

La *Cost function* est la minimisation de la somme de la différence entre les prédictions et les valeurs réelles au carré, également appelée *Squarred error function*. La courbe représentant cette fonction permet de visualiser facilement la valeur minimale. Les *contour plots* ou *contour figures* permettent de visualer les différentes valeurs de *θ0* et *θ1* provoquant le même minimum pour la *COst function*.

Le *Gradient descent algorithm* permet de minimiser la valeur de la *Cost function*. Cet algorithme utilise la dérivée en un point x d'une courbe et la multiplie par le pas. Puis cette dérivée en un point est soustraite à ce point x et affectée à la valeur de x. Petit à petit, cet algorithme arrive à une valeur de dérivée à 0 qui immobilise la valeur de x.
