# Deployments

Install nginx on the server

```
sudo apt update
sudo apt install nginx
```

Copy nginx.conf from app folder to server

```
cp nginx.conf /etc/nginx/nginx.conf
```

Start nginx

```
sudo service nginx start
```

Stop nginx

```
sudo nginx -s quit
```

Restart nginx

```
sudo service nginx restart
```
