# Choix fonctionnels et techniques 
Pour réaliser ce TP, nous décidons de faire une expression du besoin claire afin d'en définir les choix techniques qui s'y accorderont.

## Expresion du besoin 
L'objectif est de mettre à disposition une application qui permet aux utilisateurs d'accèder à la liste des vols, de réserver des billets d'avion et voir ce qu'il a déjà réservé. Pour cela, nous partons du principe que cette application doit être à la fois __accessible sur place, chez lui et pas de contraintes de devices.__ 


## Choix techniques 

Selon nous, l'architecture 3-tiers (Client + FrontEnd + BackEnd) semble le plus adapté. Pour une portabilitée au maximum sur tout les appareils, nous allons créer une application web.

- Frontend : Angular Frontend 
- Backend : Angular 
- Database : PostgreSQL
- Liaision backend <-> database : GraphQL

Afin d'assurer la portabilitée au maximum de l'application et sa saccalabilitée nous décidons de nous orienté vers une architecture microservice. Celui-ci s'articulira autour de {Container  docker couplé à un K8s ??} ainsi que d'un storage déporté pour s'assurer que les containers sont stateless. 