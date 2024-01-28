# Message-board
Laravel React Message board app

## 環境
* Laravel: 10.42.0
* mysql: 8.0.26
* PHP: 8.2-apache-buster

## 環境構築
### 初期環境構築

```
cp .env-copy .env
docker-compose build
docker-compose up

# Laravelの設定
docker exec -it laravel bash
chmod 777 -R storage/

```

## ログインコマンド

```
php
docker exec -it laravel bash

mysql
docker exec -it message-board-mysql mysql -u root -p
```