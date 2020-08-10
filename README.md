# Backend

É um projeto desenvolvido com o intuito de conseguir filtrar usuários em sua plataforma, utilizando autenticações, e CRUD, com integração do banco de dados mongo.
O administrador do sistema será capaz de editar qualquer usuário, desativar ou ativar o usuário da plataforma.
O usuário é capaz de alterar suas informações e visualizar a mesma.
## Começando

Para executar o projeto é necessario ter todas as dependencias

### Requisitos

 - Node

 
### Iniciando 
```
$ git clone https://github.com/viniciusleal34/backend.git
```
```
$ cd backend
```
```
$ npm install
```
```
$ nodemon /src/index.js 
```


##Exemplos de testes

### Rotas

 - http://localhost:3000/users/todos ("Buscando todos os usuarios":
 o USUARIO DEVE POSSUIR O TOKEN 9999, PARA PODER ACESSAR ESSA ROTA. Essa rota exibe todos os usuarios registrados)[GET]
 
 - http://localhost:3000/auth/authenticated (Utilizada para se autenticação no sistema)[POST]
 
 - http://localhost:3000//auth/register (Utilizada para criar um novo usuário no sistema)[POST]
 
 - http://localhost:3000/users/:id (Utilizada para atualização de usuário) [PUT]
 
 



## Autores

* **Vinicius Leal**

## Licença
 
 -Nenhuma

## Agradecimentos

* Mind Consulting
