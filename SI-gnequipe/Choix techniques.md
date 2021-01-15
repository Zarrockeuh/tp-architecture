# Choix fonctionnels et techniques 
Pour réaliser ce TP, nous décidons de faire une expression du besoin claire afin d'en définir les choix techniques qui s'y accorderont.

## Expresion du besoin 
L'objectif est de mettre à disposition une application qui permet aux utilisateurs d'accèder à la liste des vols, de réserver des billets d'avion et voir ce qu'il a déjà réservé. Pour cela, nous partons du principe que cette application doit être à la fois __accessible sur place, chez lui et pas de contraintes de devices.__ 


## Choix techniques 

Selon nous, l'architecture 3-tiers (Client + FrontEnd + BackEnd) semble le plus adapté. Pour une portabilitée au maximum sur tout les appareils, nous allons créer une application web.

- Frontend : Nginx + Angular Frontend 
- Backend : NodeJS + express 
- Database : PostgreSQL
- Liaision backend <-> database : Sequelize

Afin d'assurer la portabilitée au maximum de l'application et sa saccalabilitée nous décidons de nous orienter vers une architecture microservice. Cette architecture repose essentiellement sur les containers dockers et docker-compose afin d'assurer un déploiement simple. 

Afin de déployer l'application vous avez deux solutions. 

### 1ère Solution :

La 1ère solution afin de déployer simplement cette application est d'utiliser la couche docker et docker-compose. 

1. Cloner le répertoire 

```sh
git clone git@github.com:Ronan-V/tp-architecture.git
```
2. Installer Docker et Docker-Compose

L'objectif n'étant pas de faire un tutoriel supplémentaire à ceux existants, veuillez vous reporter à la documentation très bien construire sur https://docs.docker.com/compose/install/ 

3. Déployer les contenaires. 

Rendez-vous dans le dosier projet 
```sh
cd SI-gnequipe/projet/
```

Puis lancez la commande suivante :
```sh
docker-compose up --build
```
Cela créera directement les conteneurs en suivant les directives du fichier YAML.

4. Profitez !

Pour accèder à l'application, ouvrez votre navigateur et rendez-vous sur http://localhost:8081/

### 2ème Solution : 

Dans un cadre de développement, vous pouvez aussi déployer de manière local chacun des composants. Le choix NGINX/HTTPD etc... ne nous regarde point dans ce cadre, aussi à vous de déployer le front de la manière que vous le souhaitez. 

1. Créer la base 

Pour créer la base de l'application, il vous suffira d'installer un moteur de base PG V12 et d'utiliser le fichier se trouvant dans "SI-gnequipe/projet/postgres/dump_tp.sql"
N'oubliez pas de l'activer au redemarrage et d'autoriser les connexions extérieures dans le fichier pg_hba.conf

2. Backend

Si vous modifiez la configuration (ou déporter la base), commencez par modifier le fichier présent dans "SI-gnequipe/projet/nodejs-backend/config/db.config.js" avec les informations nécessaires (Les users/password sont ceux au sens Postgres et non UNIX).
Par la suite, rendez-vous dans "SI-gnequipe/projet/nodejs-backend" et exécutez les commandes suivantes :

```sh
npm update && npm install
node server.js
```
Cela installera les dépendances nécessaire au serveur nodeJS et lancera le serveur.

3. Frontend 

Pour lancer le Front, la procédure est presque similaire, rendez-vous dans "SI-gnequipe/projet/code/" et exécutez :

```sh
npm update && npm install
npm install -g @angular/cli
ng serve --port=8081
```

Vous installerez les dépendances nécessaires et le CLI d'angular permettant de lancer un serveur de développement.
