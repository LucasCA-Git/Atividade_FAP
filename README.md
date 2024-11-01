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

- TypeScript
- Node.js
- Express
- TypeORM
- MySQL (ou outro banco de dados SQL)

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
