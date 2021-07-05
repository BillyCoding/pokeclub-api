<h1 align="center">
<img  src="https://i.ibb.co/vYcqjPL/Dashboard.png" width="800"/>
</h1>
<br />

### Sobre o projeto

Este modelo foi realizado para demonstrar como utilizar o Back-end com NodeJs e Typeorm.

Para esta demonstração utilizei a API pública de pokemons [PokeAPI](https://pokeapi.co/docs/v2).

### Pré-requisitos

Antes de seguirmos para as configurações e uso do projeto, é ideal que você tenha o ambiente configurado para executar aplicações em NodeJs, para isso você pode seguir o guia do link abaixo:

[Ambiente Node JS](https://nodejs.org/en/)

### Instalação

1. Para instalar e utilizar o projeto é bem simples, basta baixar o projeto no computador com o ambiente configurado e executar o comando "yarn" para instalar as bibliotecas.

2. É necessário ter um banco de dados em PostgresSQL com as seguintes condições:

```
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "123456",
  "database": "pokeclub_postgres",
```

Obs: Pode utilizar o docker para hospedar o banco de dados. O comando para criar o ambiente com o docker:

```
docker run --name pokeclub_postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
```

3. Em seguida é só executar o comando a seguir para iniciar o projeto:

```
yarn dev:server
```

Com isso o projeto já estará funcionando pronto para testes.

<details style="margin:8px 0">
<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Feito com</summary>
<section>
AS tecnologias usadas para fazer essa template:

- [NodeJs](https://nodejs.org/en/) - Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web;
- [TypeOrm](https://typeorm.io) - Devido a esse distanciamento de paradigmas entre a Aplicação OOP e a Base de Dados Relacional, surgiu conceito de ORM, Object-Relational Mapping, que atua como um intermediador entre as duas frentes, mapeando os objetos e entidades da Aplicação para a Base de Dados, ou vice e versa;
- [Swagger](https://swagger.io) - Swagger é uma linguagem de descrição de interface para descrever APIs RESTful expressas usando JSON;
- [Postgres](https://pgsql.io/) - PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

</section>
</details>

<details style="margin:8px 0">

<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Estrutura de Arquivos</summary>
<section>
A estrutura de arquivos está da seguinte maneira:

```bash
YourApp
├── src/
│   ├── config/
│   │   └── api.ts
│   │   └── auth.ts
│   ├── database/
│   │   └── migrations
│   │   └── index.ts
│   ├── errors/
│   │   ├── AppError.ts
│   ├── middleware/
│   │   └── ensureAuthenticated.ts
│   ├── models/
│   │   ├── Users.ts
│   ├── routes/
│   │   ├── index.ts
│   │   ├── pokemon.routes.ts
│   │   ├── session.routes.ts
│   │   ├── users.routes.ts
│   ├── service/
│   │   ├── CreateSessionService.ts
│   │   ├── CreateUsersService.ts
│   ├── server.ts
│   ├── swagger_output.json
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierrc.js
├── swagger.js
├── commitlint.config.js
├── package.json
└── tsconfig.json
```

</section>
</details>

<details style="margin:8px 0">
<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Edição</summary>
<section>
Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para armazenar arquivos de configuração da aplicação;

  - **database** - Diretório onde ficam as migrations e direcionamentos do banco de dados;

  - **errors** - Diretório onde serão criados os arquivos de tratativa de erros;

  - **middlewares** - Diretório onde serão criados os arquivos de middlewares;

  - **models** - Diretório onde será criada todos os modelos do banco de dados.

  - **routes** - Diretório onde são criadas e configuradas as rotas da aplicação.

  - **service** - Diretório onde são criadas as services da aplicação.

  - **swagger_output.json** - Arquivo gerado pelo swagger para apresentar a documentação da API;

  - **server.ts** - Arquivo responsável por centralizar o código do diretório `src` , nele é configurado o uso das `rotas`, a porta e o host da aplicação;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__` ;

- **commitlint.config.js** - Arquivo que configura o commitizen para padronização dos commits;

- **tsconfig.json** - Arquivo de configuração do TypeScript no Editor, ele é o responsável por ativar o Auto Complete de códigos TypeScript na aplicação;

- **swagger.js** - Arquivo de configuração do Swagger, nele o comando para criação do swagger é configurado;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.
</section>
</details>

<!-- <p style="font-size: 18px; font-weight: bold; margin: 4px 0">Licença</p> -->

### Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- <p style="font-size: 14px; font-weight: bold; margin-top: 48px">Agradecemos por visitar nossa template :D </p> -->
