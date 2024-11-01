import app from './app'; // Importa o app configurado
import { testConnection } from './config/database'; // Importa a função de teste de conexão

const PORT = process.env.PORT || 3000;

// Testar conexão com o banco de dados e iniciar o servidor
testConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao iniciar o servidor:', error);
    });
