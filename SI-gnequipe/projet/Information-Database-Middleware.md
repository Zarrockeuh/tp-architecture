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

## Création des tables nécessaires dans la base 

Table "user": 

```SQL
CREATE TABLE public."user"
(
    email character varying(320) NOT NULL,
    password character varying NOT NULL,
    nom character varying(64) NOT NULL,
    prenom character varying(64) NOT NULL,
    PRIMARY KEY (email)
)

TABLESPACE pg_default;

ALTER TABLE public."user" OWNER to airportdbuser;
```

Table "plane": 
```SQL
CREATE TABLE public.plane
(
    id serial NOT NULL,
    nbseats integer NOT NULL,
    brand character varying(255) NOT NULL,
    PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.plane OWNER to airportdbuser;
```

Table "airport":
```SQL
CREATE TABLE public.airport
(
    trigramme character varying(3) NOT NULL,
    name character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    country character varying(255) NOT NULL,
    PRIMARY KEY (trigramme)
)

TABLESPACE pg_default;

ALTER TABLE public.airport OWNER to airportdbuser;
```

Table "flight": 
```SQL
CREATE TABLE public.flight
(
    id serial NOT NULL,
    hdep time without time zone NOT NULL,
    harr time without time zone NOT NULL,
    nbstop integer,
    stop character varying,
    departure character varying(255) NOT NULL,
    arrival character varying(255) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT "foreignDeparture" FOREIGN KEY (departure)
        REFERENCES public.airport (trigramme) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "foreignArrival" FOREIGN KEY (arrival)
        REFERENCES public.airport (trigramme) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.flight
    OWNER to airportdbuser;
```

Table "reservation": 
```SQL
CREATE TABLE public.reservation
(
    id serial NOT NULL,
    useremail character varying(320) NOT NULL,
    planeid serial NOT NULL,
    flightid serial NOT NULL,
    cost double precision NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT "foreignEmail" FOREIGN KEY (useremail)
        REFERENCES public."user" (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "foreignPlane" FOREIGN KEY (planeid)
        REFERENCES public.plane (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "foreignFlight" FOREIGN KEY (flightid)
        REFERENCES public.flight (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.reservation OWNER to airportdbuser;
```

Maintenant que les tables sont insérés en base, on effectue un backup "clean":

```Shell
/usr/bin/pg_dump --file "/emplacementBackup/fileName" --host "127.0.0.1" --port "5432" --username "postgres" --no-password --verbose --role "airportdbuser" --format=c --blobs --encoding "UTF8" "airportdb"
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