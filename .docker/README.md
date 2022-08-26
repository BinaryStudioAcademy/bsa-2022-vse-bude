# Run PostgreSQL in docker

## Start command

```
docker-compose -f docker-compose.db.yaml up -d
```

## Stop command

```
docker-compose -f docker-compose.db.yaml down
```

### To stop PostgreSQL and remove all data

```
docker-compose -f docker-compose.db.yaml down -v
```

# Run Redis in docker

## Stop command

```
docker-compose -f docker-compose.db.yaml down vsebude_cache
```

### To stop Redis

```
docker-compose -f docker-compose.db.yaml down -v vsebude_cache
```

# Testing Redis connection

For testing availability of redis use next commands:

```
docker exec -it vsebude_cache sh
redis-cli
auth redis_admin vsebude
if there is no error - everything is OK
```
