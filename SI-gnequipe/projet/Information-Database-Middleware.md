# Architecture distribuée 

## Information Databse
Infos nécessaire à la configuration de la base et du middleware.
- Database : airportdb
- User (Postgres) : airportdbuser
- Database (Postgres) : airportdbpassword

## Configuration de la database
Requête SQL de la création de l'utilisateur dédié :
```SQL
CREATE ROLE airportdbuser WITH
	LOGIN
	SUPERUSER
	NOCREATEDB
	CREATEROLE
	NOINHERIT
	REPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'xxxxxx';
```

Requête SQL de création de la database :
```SQL
CREATE DATABASE airportdb
    WITH 
    OWNER = aiportdbuser
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

GRANT ALL ON DATABASE airportdb TO aiportdbuser;
```

## Insertions des données essentielles à l'applications 

Insertion des aéroports dans la table "airport":

```SQL
INSERT INTO airport VALUES 
('JFK', 'Aeroport international - John-F.-Kennedy', 'New York', 'USA'), 
('CDG', 'Aeroport Roissy Charles de Gaules', 'Paris', 'FRANCE'),
('DTW', 'Aeroport metropolitain de Detroit', 'Detroit', 'USA')
;
```

Insertion des avions dans la table "plane": 

```SQL
INSERT INTO plane (nbseats, brand) VALUES 
(50,'Boeing'),
(50,'Airbus'),
(40,'Airbus'),
(100,'Airbus')
;
```

Insertion des vols dans la table "flight":

```SQL
INSERT INTO flight (hdep, harr, nbstop, stop, departure, arrival) VALUES
('12:00:00', '20:35:00',NULL,NULL,
(SELECT trigramme FROM airport WHERE city='Paris'),
(SELECT trigramme FROM airport WHERE city='New York')), 
('13:00:00', '21:50:00',NULL,NULL,
(SELECT trigramme FROM airport WHERE city='Paris'),
(SELECT trigramme FROM airport WHERE city='Detroit')),
('09:00:00', '10:50:00',NULL,NULL,
(SELECT trigramme FROM airport WHERE city='Detroit'),
(SELECT trigramme FROM airport WHERE city='New York')),
('20:00:00', '04:35:00',NULL,NULL,
(SELECT trigramme FROM airport WHERE city='New York'),
(SELECT trigramme FROM airport WHERE city='Paris')),
('20:20:00', '08:00:00',1,
(SELECT trigramme FROM airport WHERE city='Detroit'),
(SELECT trigramme FROM airport WHERE city='New York'),
(SELECT trigramme FROM airport WHERE city='Paris'))
;
```

Maintenant que les données de bases sont insérés en base, on effectue un backup "data-inserted":

```Shell
/usr/bin/pg_dump --file "/emplacementBackup/fileName" --host "127.0.0.1" --port "5432" --username "postgres" --no-password --verbose --role "airportdbuser" --format=c --blobs --section=pre-data --section=data --section=post-data --encoding "UTF8" "airportdb"
```