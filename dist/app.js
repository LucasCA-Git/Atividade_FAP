"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./routes")); // Importa as rotas do seu projeto
const swagger_json_1 = __importDefault(require("../swagger/swagger.json")); // Importa o arquivo Swagger JSON
const database_1 = require("./config/database"); // Importa a função de teste de conexão
const app = (0, express_1.default)();
// Configuração do CORS
app.use((0, cors_1.default)({
    origin: '*', // Permite todas as origens. Ajuste conforme necessário.
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express_1.default.json());
// Rotas da API
app.use('/api', routes_1.default); // Acesse as rotas pela URL /api
// Configuração do Swagger
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
// Testar conexão com o banco de dados e iniciar o servidor
(0, database_1.testConnection)()
    .then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
})
    .catch((error) => {
    console.error('Erro ao iniciar o servidor:', error);
});
exports.default = app; // Exporta o app para uso em outros arquivos
