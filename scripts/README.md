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
./scripts/deploy.sh
```

[Useful link](https://gist.github.com/ZaHuPro/2ecdb934a7362e979e3aa5a92b181153)

## Generate SSL Certs

1. Install certbot

```
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot
```

2. Generate certificates.

```
certbot certonly --manual
```

3. When verification is requested create file with specified name (from the url) in folder `/var/www/acme-challenge` with required data. Uncomment alias in nginx config and restart nginx. Don't forget to comment back alias when certificates are generated.

4. Use cron job for automatic renewal

A. Navigate to the /etc/cron.d directory.

```
cd /etc/cron.d/
```

B. Create a new file called certbot.

```
touch certbot
```

C. Open the Certbot file and paste the following config:

```
SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

0 */12 * * * /usr/bin/certbot renew && systemctl restart nginx
```

D. Restart the cron service.

```
systemctl restart cron
```
