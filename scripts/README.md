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

Create folder `/home/ubuntu/env` with files `backend.env` and `frontend.env` (.env files)

## Deploy

1. Clone repository to `/home/ubuntu/vse-bude`
2. Run deployment command

```
sudo ./scripts/deploy.sh
```

[Useful link](https://gist.github.com/ZaHuPro/2ecdb934a7362e979e3aa5a92b181153)
