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

## Start command

```
docker-compose -f docker-compose.redis.yaml up -d
```

## Stop command

```
docker-compose -f docker-compose.redis.yaml down
```

### To stop Redis

```
docker-compose -f docker-compose.redis.yaml down -v
```