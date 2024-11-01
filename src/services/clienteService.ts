import { Cliente } from '../models/cliente';

export class ClienteService {
    static async criarCliente(nome: string, email: string) {
        return await Cliente.create({ cliente_nome: nome, cliente_email: email });
    }

    static async listarClientes() {
        return await Cliente.findAll();
    }

    static async obterClientePorId(clienteId: number) {
        return await Cliente.findByPk(clienteId);
    }

    static async atualizarCliente(clienteId: number, nome: string, email: string) {
        const cliente = await Cliente.findByPk(clienteId);
        if (cliente) {
            cliente.cliente_nome = nome;
            cliente.cliente_email = email;
            await cliente.save();
            return cliente;
        }
        return null;
    }

    static async deletarCliente(clienteId: number) {
        const cliente = await Cliente.findByPk(clienteId);
        if (cliente) {
            await cliente.destroy();
            return true;
        }
        return false;
    }
}
