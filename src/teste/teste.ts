import { sequelize } from '../config/database'; // Ajuste o caminho conforme necessário
import {Cliente} from '../models/cliente'; // Ajuste o caminho conforme necessário
import {Usuario} from '../models/usuario'; // Ajuste o caminho conforme necessário
import DetalhePedido from '../models/detalhePedido'; // Ajuste o caminho conforme necessário
import Pedido from '../models/pedido'; // Ajuste o caminho conforme necessário
import Produto from '../models/produto'; // Ajuste o caminho conforme necessário

async function seedDatabase() {
    try {
        // Sincroniza o modelo com o banco de dados
        await sequelize.sync({ force: true }); // WARNING: Isso apagará todos os dados existentes!

        // Adiciona clientes
        const clientes = await Promise.all([
            Cliente.create({ cliente_nome: 'João Silva', cliente_email: 'joao.silva@example.com' }),
            Cliente.create({ cliente_nome: 'Maria Oliveira', cliente_email: 'maria.oliveira@example.com' }),
            Cliente.create({ cliente_nome: 'Pedro Santos', cliente_email: 'pedro.santos@example.com' }),
            Cliente.create({ cliente_nome: 'Ana Costa', cliente_email: 'ana.costa@example.com' }),
            Cliente.create({ cliente_nome: 'Lucas Almeida', cliente_email: 'lucas.almeida@example.com' }),
            Cliente.create({ cliente_nome: 'Fernanda Lima', cliente_email: 'fernanda.lima@example.com' }),
            Cliente.create({ cliente_nome: 'Roberto Ferreira', cliente_email: 'roberto.ferreira@example.com' }),
            Cliente.create({ cliente_nome: 'Juliana Martins', cliente_email: 'juliana.martins@example.com' }),
            Cliente.create({ cliente_nome: 'Carlos Silva', cliente_email: 'carlos.silva@example.com' }),
            Cliente.create({ cliente_nome: 'Mariana Souza', cliente_email: 'mariana.souza@example.com' }),
        ]);

        // Adiciona produtos de papelaria
        const produtos = await Promise.all([
            Produto.create({ produto_nome: 'Caderno', produto_categoria: 'Papelaria', produto_preco: 10.00 }),
            Produto.create({ produto_nome: 'Caneta', produto_categoria: 'Papelaria', produto_preco: 2.50 }),
            Produto.create({ produto_nome: 'Lápis', produto_categoria: 'Papelaria', produto_preco: 1.20 }),
            Produto.create({ produto_nome: 'Borracha', produto_categoria: 'Papelaria', produto_preco: 0.80 }),
            Produto.create({ produto_nome: 'Papel Sulfite', produto_categoria: 'Papelaria', produto_preco: 20.00 }),
            Produto.create({ produto_nome: 'Marcador de Texto', produto_categoria: 'Papelaria', produto_preco: 3.50 }),
            Produto.create({ produto_nome: 'Grampeador', produto_categoria: 'Papelaria', produto_preco: 15.00 }),
            Produto.create({ produto_nome: 'Pastas', produto_categoria: 'Papelaria', produto_preco: 5.00 }),
            Produto.create({ produto_nome: 'Fita adesiva', produto_categoria: 'Papelaria', produto_preco: 4.00 }),
            Produto.create({ produto_nome: 'Tesoura', produto_categoria: 'Papelaria', produto_preco: 7.00 }),
        ]);

        // Adiciona pedidos
        const pedidos = await Promise.all([
            Pedido.create({ cliente_id: clientes[0].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
            Pedido.create({ cliente_id: clientes[1].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
            Pedido.create({ cliente_id: clientes[2].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
            Pedido.create({ cliente_id: clientes[3].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
            Pedido.create({ cliente_id: clientes[4].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
            Pedido.create({ cliente_id: clientes[5].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
            Pedido.create({ cliente_id: clientes[6].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
            Pedido.create({ cliente_id: clientes[7].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
            Pedido.create({ cliente_id: clientes[8].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
            Pedido.create({ cliente_id: clientes[9].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
        ]);

        // Adiciona detalhes do pedido
        await Promise.all([
            DetalhePedido.create({ pedido_id: pedidos[0].pedido_id, produto_id: produtos[0].produto_id, quantidade: 2, preco: produtos[0].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[0].pedido_id, produto_id: produtos[1].produto_id, quantidade: 5, preco: produtos[1].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[1].pedido_id, produto_id: produtos[2].produto_id, quantidade: 3, preco: produtos[2].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[1].pedido_id, produto_id: produtos[3].produto_id, quantidade: 1, preco: produtos[3].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[2].pedido_id, produto_id: produtos[4].produto_id, quantidade: 10, preco: produtos[4].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[3].pedido_id, produto_id: produtos[5].produto_id, quantidade: 7, preco: produtos[5].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[4].pedido_id, produto_id: produtos[6].produto_id, quantidade: 2, preco: produtos[6].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[5].pedido_id, produto_id: produtos[7].produto_id, quantidade: 4, preco: produtos[7].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[6].pedido_id, produto_id: produtos[8].produto_id, quantidade: 1, preco: produtos[8].produto_preco }),
            DetalhePedido.create({ pedido_id: pedidos[7].pedido_id, produto_id: produtos[9].produto_id, quantidade: 3, preco: produtos[9].produto_preco }),
        ]);

        // Adiciona usuários
        await Promise.all([
            Usuario.create({ usuario_login: 'usuario1', usuario_senha: 'senha123' }),
            Usuario.create({ usuario_login: 'usuario2', usuario_senha: 'senha456' }),
            Usuario.create({ usuario_login: 'usuario3', usuario_senha: 'senha789' }),
            Usuario.create({ usuario_login: 'usuario4', usuario_senha: 'senha000' }),
            Usuario.create({ usuario_login: 'usuario5', usuario_senha: 'senha111' }),
            Usuario.create({ usuario_login: 'usuario6', usuario_senha: 'senha222' }),
            Usuario.create({ usuario_login: 'usuario7', usuario_senha: 'senha333' }),
            Usuario.create({ usuario_login: 'usuario8', usuario_senha: 'senha444' }),
            Usuario.create({ usuario_login: 'usuario9', usuario_senha: 'senha555' }),
            Usuario.create({ usuario_login: 'usuario10', usuario_senha: 'senha666' }),
        ]);

        console.log('Banco de dados alimentado com sucesso!');
    } catch (error) {
        console.error('Erro ao alimentar o banco de dados:', error);
    } finally {
        // Fecha a conexão com o banco de dados
        await sequelize.close();
    }
}

// Executa a função para alimentar o banco de dados
seedDatabase();
