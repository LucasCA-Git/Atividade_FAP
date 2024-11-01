import express from 'express';
import cors from 'cors';  
import swaggerUi from 'swagger-ui-express';
import routes from './routes'; // Importa as rotas do seu projeto
import swaggerDocument from '../swagger/swagger.json'; // Importa o arquivo Swagger JSON
import { testConnection } from './config/database'; // Importa a função de teste de conexão
import dotenv from 'dotenv'; // Importa dotenv para usar variáveis de ambiente

dotenv.config(); // Carrega as variáveis de ambiente

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

const jwt = require('jsonwebtoken');

const authenticateToken = (req: { headers: { [x: string]: any; }; user: any; }, res: { sendStatus: (arg0: number) => any; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): any; new(): any; }; }; }, next: () => void) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    const jwtSecret = process.env.JWT_SECRET; // Obtém a chave do .env

    if (!jwtSecret) {
        return res.status(500).send('JWT Secret não está definido.');
    }

    jwt.verify(token, jwtSecret, (err: any, user: any) => {
        console.log(err);

        if (err) return res.sendStatus(403);

        req.user = user;

        next();
    });
};

module.exports = { authenticateToken }; 
