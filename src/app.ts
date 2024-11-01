import express from 'express';
import cors from 'cors';  
import swaggerUi from 'swagger-ui-express';
import routes from './routes'; // Importa as rotas do seu projeto
import swaggerDocument from '../swagger/swagger.json'; // Importa o arquivo Swagger JSON
import { testConnection } from './config/database'; // Importa a função de teste de conexão

const app = express();

// Configuração do CORS
app.use(cors({
  origin: '*', // Permite todas as origens. Ajuste conforme necessário.
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Rotas da API
app.use('/api', routes); // Acesse as rotas pela URL /api

// Configuração do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Testar conexão com o banco de dados e iniciar o servidor
testConnection()
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch((error) => {
        console.error('Erro ao iniciar o servidor:', error);
    });

export default app; // Exporta o app para uso em outros arquivos
