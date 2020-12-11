# Architecture distribuée 

## Information Databse
Infos nécessaire à la configuration de la base et du middleware.
- Database : airportdb
- User (Unix) : airportuser
- Password (Unix) : airportpassword
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

Requête SQL de création de la database
```SQL
CREATE DATABASE airportdb
    WITH 
    OWNER = aiportdbuser
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

GRANT ALL ON DATABASE airportdb TO aiportdbuser;
```