# Deployments

## Prerequisites

Install nodejs on the server

```
curl -sSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt install -y nodejs
node --version
npm --version
```

Install nginx on the server

```
sudo apt update
sudo apt install nginx
```

## Deploy

1. Clone repository to /home/ubuntu/vse-bude
2. Copy nginx.conf from app folder to server

```
cp nginx.conf /etc/nginx/nginx.conf
```

3. Start (or restart) nginx

```
sudo service nginx start
sudo service nginx restart
```

4. Run deployment command

```
./scripts/deploy.sh
```
