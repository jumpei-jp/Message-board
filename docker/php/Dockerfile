FROM php:8.2-apache-buster

RUN apt-get update

# composerのインストール
COPY --from=composer /usr/bin/composer /usr/bin/composer

# other tools install
RUN apt-get install -y vim \
&& apt-get install -y \
git \
unzip

# ドキュメントルートをpublic配下に指定
ENV APACHE_DOCUMENT_ROOT /var/www/html/message-board/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# ドライバのインストール
RUN docker-php-ext-install pdo_mysql mysqli

## mod_rewriteを有効化する
RUN cd /etc/apache2/mods-enabled \
    && ln -s ../mods-available/rewrite.load