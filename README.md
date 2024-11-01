# Sistema de Gerenciamento de Pedidos

Um sistema simples de gerenciamento de pedidos, que permite o cadastro de clientes, produtos e pedidos. A API é desenvolvida com TypeScript e utiliza um banco de dados para armazenar as informações.

## Sumário

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [API](#api)
- [Contribuições](#contribuições)

## Características

- Cadastro de clientes
- Cadastro de produtos
- Registro de pedidos
- APIs RESTful para interação com o sistema

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **Sequelize**: ORM para facilitar a interação com o banco de dados.
- **MySQL**: Sistema de gerenciamento de banco de dados.

# Sequelize e Configuração do Arquivo .env

## Sequelize

**Sequelize** é um ORM (Object-Relational Mapping) para Node.js que facilita a interação com bancos de dados relacionais, como MySQL, PostgreSQL, SQLite e MSSQL. Ele permite que você trabalhe com dados de forma mais intuitiva, utilizando objetos JavaScript em vez de escrever consultas SQL diretamente. Aqui estão algumas características e benefícios do Sequelize:

- **Modelagem de Dados**: Com Sequelize, você pode definir modelos que representam tabelas no banco de dados, incluindo suas colunas, tipos de dados e relacionamentos (como associações entre tabelas).
  
- **Consultas Simples**: Você pode realizar operações de CRUD (Create, Read, Update, Delete) de forma simplificada. Por exemplo, você pode criar um novo registro chamando um método de instância em um modelo em vez de escrever uma consulta SQL.

- **Sincronização Automática**: O Sequelize permite sincronizar automaticamente seus modelos com o banco de dados, criando ou atualizando as tabelas conforme necessário.

- **Suporte a Transações**: O Sequelize oferece suporte a transações, permitindo que você execute várias operações de banco de dados como uma única unidade de trabalho, garantindo integridade dos dados.

- **Validações e Hooks**: Você pode adicionar validações para os dados antes de serem salvos no banco de dados e usar hooks para executar ações em momentos específicos do ciclo de vida do modelo (como antes ou depois de criar um registro).

## Arquivo .env

## Autenticação

A autenticação no sistema é realizada através de tokens JWT (JSON Web Token). Após o usuário realizar o login com credenciais válidas, a aplicação gera um token de acesso que deve ser enviado em todas as requisições subsequentes que exigem autenticação.

### Configuração do JWT

1. **Variável de ambiente `JWT_SECRET`**: Defina uma variável de ambiente `JWT_SECRET` no arquivo `.env` com uma chave secreta para assinar o token JWT. Esta chave deve ser única e segura.

2. **Expiração do Token**: O token gerado expira em 1 hora. Esse tempo pode ser ajustado conforme necessário.


- **Segurança**: Mantenha credenciais e informações sensíveis fora do código. Assim, você pode evitar que esses dados sejam acidentalmente expostos em um repositório público.

- **Facilidade de Configuração**: Você pode facilmente alterar as configurações sem modificar o código-fonte. Isso é especialmente útil em diferentes ambientes (desenvolvimento, teste, produção).

- **Convenção de Nomenclatura**: O uso de variáveis de ambiente torna claro quais valores podem ser configurados externamente.

### Exemplo de Configuração do .env

Aqui está um exemplo de como seu arquivo `.env` pode ser estruturado:


## Instalação

Siga os passos abaixo para instalar e executar o projeto localmente.

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/SeuUsuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure o banco de dados**:
    - Crie um banco de dados no MySQL.
    - Configure as credenciais no arquivo de configuração (ex.: `ormconfig.json`).

4. **Execute as migrações** (se aplicável):
    ```bash
    npm run typeorm migration:run
    ```

5. **Inicie o servidor**:
    ```bash
    npm start
    ```

## Uso

A API está disponível em `http://localhost:3000`. Você pode usar ferramentas como Postman ou cURL para fazer requisições às rotas da API.

## API

A API fornece as seguintes rotas:

### Usuários

- `POST /usuarios`: Cria um novo usuário.
- `GET /usuarios`: Lista todos os usuários.
- `GET /usuarios/{id}`: Obtém um usuário por ID.
- `PUT /usuarios/{id}`: Atualiza um usuário por ID.
- `DELETE /usuarios/{id}`: Deleta um usuário por ID.

### Produtos

- `POST /produtos`: Cria um novo produto.
- `GET /produtos`: Lista todos os produtos.
- `GET /produtos/{id}`: Obtém um produto por ID.
- `PUT /produtos/{id}`: Atualiza um produto por ID.
- `DELETE /produtos/{id}`: Deleta um produto por ID.

### Pedidos

- `POST /pedidos`: Cria um novo pedido.
- `GET /pedidos`: Lista todos os pedidos.
- `GET /pedidos/{id}`: Obtém um pedido por ID.
- `PUT /pedidos/{id}`: Atualiza um pedido por ID.
- `DELETE /pedidos/{id}`: Deleta um pedido por ID.

### Clientes

- `POST /clientes`: Cria um novo cliente.
- `GET /clientes`: Lista todos os clientes.
- `GET /clientes/{id}`: Obtém um cliente por ID.
- `PUT /clientes/{id}`: Atualiza um cliente por ID.
- `DELETE /clientes/{id}`: Deleta um cliente por ID.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
