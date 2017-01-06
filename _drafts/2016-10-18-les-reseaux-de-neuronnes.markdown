---
layout: post
title:  "Les réseaux de neuronnes"
date:   2016-10-18 22:14:28
---

## [How to learn Neural Networks in 2015](https://medium.com/learning-new-stuff/how-to-learn-neural-networks-758b78f2736e#.ms213zu6w)

 * neurone -> fonction avec plusieurs entrées
        -> retourne une sortie
 * synapse -> 1 entrée du neurone ou 1 sortie (1 flèche du réseau)
 * entrée  -> une feature (ex: nombre de mots en majuscule dans un email)
 * poid    -> importance d'une entrée

 * en sortie du synapse, l'entrée est multipliée par le poids
 * en entrée du neurone, les sorties des synapses sont sommées entre elles et avec le biais

 * backpropagation -> en partant de la fin, mise à jour des poids en utilisant le jeu de données de test

## [Neural Networks Demystified](https://www.youtube.com/playlist?list=PLiaHhY2iBX9hdHaRr6b7XevZtgZRa1PoU) &#10003;

 * Normaliser les données pour avoir une échelle unique entre les entrées et les sorties
 * Cost function : quelle est l'importance de l'erreur entre la prédiction et la réalité lors de l'entrainement du reseau
 * L'objectif est de minimiser la cost function en modifiant les poids
 * Gradient descent : utiliser la dérivée de la fonction en fonction du poinds pour s'approcher de 0
 * La dérivée de somme est égale à la somme des dérivées
 * Eviter l'overfitting : tester le réseau sur 10 fois plus de données que de poids

## [A Step by Step Backpropagation Example](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/) &#10003;

 * Le but de la backpropagation est de déterminer l'impact des différents poids sur l'erreur finale
 * Pour réaliser la backpropagation, on calcule l'impact de chaque poids sur l'erreur finale, soit la dérivée partielle de l'erreur selon le poids
 * Par exemple, pour w5, la dérivée partielle vaut la dérviée partielle de l'erreur selon la sortie o1,
 multipliée par la dérivée partielle de la sortie o1 selon le réseau net o1, multipliée par la dérivée partielle du réseau net o1 selon le poids w5

## [Hacker's guide to neural network](http://karpathy.github.io/neuralnets/#chapter-2-machine-learning) &#10003;

 * Numerical gradient: dérivée de chaque entrée indépendemment. A chaque changement d'une entrée, il faut recalculer toutes les dérivées
 * Numerical gradient: (circuit(x+h, y, z) - circuit(x, y, z)) / h
 * Analytic gradient: calcul de la dérivée pour connaitre l'impact d'un changement d'une entrée sur le résultat
 * Chain rule: le chainage permet de ré-utiliser le gradient de la sortie pour l'impacter sur le gradient courant
 * Cost function: mesure l'importance de l'erreur du classifier. Si l'entrainement est bien classifié, le coût est 0

## [CS231n Convolutional Neural Networks for Visual Recognition](http://cs231n.github.io/)

### [Image Classification](http://cs231n.github.io/classification/)

 * Nearest Neighbor Classifier: 38.6% avec L1 distance, 35.4% avec L2 distance 
 * k - Nearest Neighbor Classifier: utiliser la moyenne des voisins pour déterminer la classe
 * Hyperparameter: quel nombre choisir pout k? Quel type type de fonction de distance choisir (L1, L2, etc)
 * Séparer le jeu de test en 2: un jeu d'entrainement (98%) et un jeu de validation (2%) des hyperparameters
 * Cross-validation: valider n fois avec n jeux d'entrainement et de validation différents
 * [A Few Useful Things to Know about Machine Learning](http://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf)

## [Have fun with ML: dolphin recognition](https://github.com/humphd/have-fun-with-machine-learning)

## [Topics in Computer Vision (CSC2523)](http://www.cs.utoronto.ca/~fidler/teaching/2015/CSC2523.html)

## [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/chap1.html)

* Livre sur les réseaux de neuronnes

## [A Neural Network in 11 lines of Python (Part 1)](http://iamtrask.github.io/2015/07/12/basic-python-network/) &#10003;

 * Deep Learning: ajouter des couches dans le réseaux de neuronnes

## [A Neural Network in 13 lines of Python (Part 2)](https://iamtrask.github.io/2015/07/27/python-network-part2/) &#10003;

 * Gradient descent: application du gradient aux différents poids
 * La backpropagation n'optimise pas, l'erreur est déplacée de la fin du réseau vers les poids
 * Optimisation 1: ajout d'un paramètre alpha et optimisation de celui-ci
 * Optimisation 2: modifier la taille de la hidden layer

## [Implementing a Neural Network from scratch](http://www.wildml.com/2015/09/implementing-a-neural-network-from-scratch/) &#10003;

 * ==> Tester le mini-batch
 * [NN LeCun](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)

## [CS231N - Convolutional Neural Networks](https://youtu.be/yp9rwI_LZX8?list=PL16j5WbGpaM0_Tj8CRmurZ8Kk1gEBc7fg&t=455)

## Se tenir informé

 * [WildML](http://www.wildml.com/)
 * [Colah's blog](http://colah.github.io/)
