FROM mongo:7.0

COPY init-mongo.js /docker-entrypoint-initdb.d/
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=faat

EXPOSE 27017