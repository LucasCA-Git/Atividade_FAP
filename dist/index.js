"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app")); // Importa o app configurado
const database_1 = require("./config/database"); // Importa a função de teste de conexão
const PORT = process.env.PORT || 3000;
// Testar conexão com o banco de dados e iniciar o servidor
(0, database_1.testConnection)()
    .then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
})
    .catch((error) => {
    console.error('Erro ao iniciar o servidor:', error);
});
