##
Para o projeto react - foi utilizado o vite.


#Instalação
##Backend

1 - Entra no diretório

cd backend

2 - Clone o repositório

https://github.com/Dev-Humberto/devnology_teste.git

3 - Instalar pacotes do Composer

composer install

4 - Copie o arquivo de ambiente e edite-o de acordo

cp .env.example .env

5 - Gerar chave de aplicativo

php artisan key:generate

6 - Criar banco de dados e migrar

php artisan migrate
php artisan db:seed

7 - Vinculando a pasta de armazenamento ao público

php artisan storage:link

8 - Iniciar a aplicação

php artisan serve


##Frontend

1 - Entrar no diretório

cd frontend

2 - Instalar as dependencias

npm install --force

3 - Iniciar a aplicaão e copiar a url para um browser

npm run dev

##
Administrador -> username: admin password: Password_T3ste

Utilizador normal -> login / criar uma conta
