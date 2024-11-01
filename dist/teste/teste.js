"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database"); // Ajuste o caminho conforme necessário
const cliente_1 = require("../models/cliente"); // Ajuste o caminho conforme necessário
const usuario_1 = require("../models/usuario"); // Ajuste o caminho conforme necessário
const detalhePedido_1 = __importDefault(require("../models/detalhePedido")); // Ajuste o caminho conforme necessário
const pedido_1 = __importDefault(require("../models/pedido")); // Ajuste o caminho conforme necessário
const produto_1 = __importDefault(require("../models/produto")); // Ajuste o caminho conforme necessário
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Sincroniza o modelo com o banco de dados
            yield database_1.sequelize.sync({ force: true }); // WARNING: Isso apagará todos os dados existentes!
            // Adiciona clientes
            const clientes = yield Promise.all([
                cliente_1.Cliente.create({ cliente_nome: 'João Silva', cliente_email: 'joao.silva@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Maria Oliveira', cliente_email: 'maria.oliveira@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Pedro Santos', cliente_email: 'pedro.santos@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Ana Costa', cliente_email: 'ana.costa@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Lucas Almeida', cliente_email: 'lucas.almeida@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Fernanda Lima', cliente_email: 'fernanda.lima@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Roberto Ferreira', cliente_email: 'roberto.ferreira@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Juliana Martins', cliente_email: 'juliana.martins@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Carlos Silva', cliente_email: 'carlos.silva@example.com' }),
                cliente_1.Cliente.create({ cliente_nome: 'Mariana Souza', cliente_email: 'mariana.souza@example.com' }),
            ]);
            // Adiciona produtos de papelaria
            const produtos = yield Promise.all([
                produto_1.default.create({ produto_nome: 'Caderno', produto_categoria: 'Papelaria', produto_preco: 10.00 }),
                produto_1.default.create({ produto_nome: 'Caneta', produto_categoria: 'Papelaria', produto_preco: 2.50 }),
                produto_1.default.create({ produto_nome: 'Lápis', produto_categoria: 'Papelaria', produto_preco: 1.20 }),
                produto_1.default.create({ produto_nome: 'Borracha', produto_categoria: 'Papelaria', produto_preco: 0.80 }),
                produto_1.default.create({ produto_nome: 'Papel Sulfite', produto_categoria: 'Papelaria', produto_preco: 20.00 }),
                produto_1.default.create({ produto_nome: 'Marcador de Texto', produto_categoria: 'Papelaria', produto_preco: 3.50 }),
                produto_1.default.create({ produto_nome: 'Grampeador', produto_categoria: 'Papelaria', produto_preco: 15.00 }),
                produto_1.default.create({ produto_nome: 'Pastas', produto_categoria: 'Papelaria', produto_preco: 5.00 }),
                produto_1.default.create({ produto_nome: 'Fita adesiva', produto_categoria: 'Papelaria', produto_preco: 4.00 }),
                produto_1.default.create({ produto_nome: 'Tesoura', produto_categoria: 'Papelaria', produto_preco: 7.00 }),
            ]);
            // Adiciona pedidos
            const pedidos = yield Promise.all([
                pedido_1.default.create({ cliente_id: clientes[0].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
                pedido_1.default.create({ cliente_id: clientes[1].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
                pedido_1.default.create({ cliente_id: clientes[2].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
                pedido_1.default.create({ cliente_id: clientes[3].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
                pedido_1.default.create({ cliente_id: clientes[4].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
                pedido_1.default.create({ cliente_id: clientes[5].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
                pedido_1.default.create({ cliente_id: clientes[6].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
                pedido_1.default.create({ cliente_id: clientes[7].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
                pedido_1.default.create({ cliente_id: clientes[8].cliente_id, data_pedido: new Date(), status: 'Pendente' }),
                pedido_1.default.create({ cliente_id: clientes[9].cliente_id, data_pedido: new Date(), status: 'Concluído' }),
            ]);
            // Adiciona detalhes do pedido
            yield Promise.all([
                detalhePedido_1.default.create({ pedido_id: pedidos[0].pedido_id, produto_id: produtos[0].produto_id, quantidade: 2, preco: produtos[0].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[0].pedido_id, produto_id: produtos[1].produto_id, quantidade: 5, preco: produtos[1].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[1].pedido_id, produto_id: produtos[2].produto_id, quantidade: 3, preco: produtos[2].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[1].pedido_id, produto_id: produtos[3].produto_id, quantidade: 1, preco: produtos[3].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[2].pedido_id, produto_id: produtos[4].produto_id, quantidade: 10, preco: produtos[4].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[3].pedido_id, produto_id: produtos[5].produto_id, quantidade: 7, preco: produtos[5].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[4].pedido_id, produto_id: produtos[6].produto_id, quantidade: 2, preco: produtos[6].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[5].pedido_id, produto_id: produtos[7].produto_id, quantidade: 4, preco: produtos[7].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[6].pedido_id, produto_id: produtos[8].produto_id, quantidade: 1, preco: produtos[8].produto_preco }),
                detalhePedido_1.default.create({ pedido_id: pedidos[7].pedido_id, produto_id: produtos[9].produto_id, quantidade: 3, preco: produtos[9].produto_preco }),
            ]);
            // Adiciona usuários
            yield Promise.all([
                usuario_1.Usuario.create({ usuario_login: 'usuario1', usuario_senha: 'senha123' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario2', usuario_senha: 'senha456' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario3', usuario_senha: 'senha789' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario4', usuario_senha: 'senha000' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario5', usuario_senha: 'senha111' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario6', usuario_senha: 'senha222' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario7', usuario_senha: 'senha333' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario8', usuario_senha: 'senha444' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario9', usuario_senha: 'senha555' }),
                usuario_1.Usuario.create({ usuario_login: 'usuario10', usuario_senha: 'senha666' }),
            ]);
            console.log('Banco de dados alimentado com sucesso!');
        }
        catch (error) {
            console.error('Erro ao alimentar o banco de dados:', error);
        }
        finally {
            // Fecha a conexão com o banco de dados
            yield database_1.sequelize.close();
        }
    });
}
// Executa a função para alimentar o banco de dados
seedDatabase();
