#Lojavirtual

Descrição:
- Gestor de uma loja virtual que realizar cadastro, listagem, edição, busca e remoção de produtos.
- O sistema conta com uma interface amigável, fácil acesso e também possui validações com mensagens de retorno para o usuário.

Tecnologias utilizadas:

FRONT:
- Angular 4 com o Angular CLI 1.4
- Reactive Forms (Angular 4)
- Observables (Angular 4)
- Typescript
- NodeJs
- NPM
- Angular Material para Angular 4
- Testes unitários com Jasmine e Karma
- Swagger API

BACK:
- Spring Boot (Framework Java)
- JPA Repository
- RESTFul WebServices
- JUnit 4
- Mockito
- Swagger
- Banco de dados H2 (para facilitar a execução do projeto)

Requerimentos do sistema:
- Maven
- JRE 8 ou superior
- NPM versão 3.10.10 ou superior
- Node 6.10.2 ou superior
- Conexão com a internet

Instalação:
- Executar o comando NPM "npm install" na raíz da pasta FRONT
- Executar o comando Maven "mvn clean install" na raíz da pasta BACK

Execução:
- Executar o comando NPM "ng serve" na raíz da pasta FRONT.
 Obs.: para executar em uma porta específica acrescentar o parâmetro "--port" como no seguinte exemplo: "ng serve --port 3000".
- Executar o comando Maven "mvn spring-boot:run" na raíz do projeto BACK

FRONT:
- Acessar ao sistema através do endereço abaixo. A porta pode ser diferente de acordo com sua escolha:
- http://localhost:4200/

BACK:
- Acesso a API da aplicação através do Google Chrome ou outro browser
- http://localhost:7001/ws-lojavirtual/api/swagger-ui.html

Executar os testes unitários na aplicação do FRONT
- execute o comando "ng test" na raíz da pasta FRONT.

Obs.: Foi utilizado o banco de dados H2 para facilitar a instalação do projeto, porém também foram realizados testes utilizando o PostgreSQL 9.4 e a aplicação teve o mesmo comportamento