FROM postgres:12.5-alpine 

COPY dump_tp.sql /docker-entrypoint-initdb.d

USER postgres

EXPOSE 5432

CMD ["postgres"]
    