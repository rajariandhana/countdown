# Countdown

Try [here](https://countdown.uqcloud.net)

I created a useless app.
![alt text](thumbnail.png)

```sh
ssh -A sXXXXXXX@moss.labs.eait.uq.edu.au
triton inst create --wait --name ZONE-NAME --network zones webproject z1-small
ssh root@countdown.zones.eait.uq.edu.au
# will be in /root
bash setup.sh
```

`setup.sh`
```sh
git clone https://github.com/rajariandhana/countdown.git
cd countdown
npm install
npm run build

rm /var/www/htdocs/index.html
rm -rf /var/www/htdocs/assets
mv ./dist/* /var/www/htdocs
```