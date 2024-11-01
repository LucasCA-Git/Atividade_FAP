import { Request, Response } from 'express';
import { ClienteService } from '../services/clienteService';

export class ClienteController {
    static async criarCliente(req: Request, res: Response) {
        try {
            const { nome, email } = req.body;
            const cliente = await ClienteService.criarCliente(nome, email);
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar cliente.' });
        }
    }

    static async listarClientes(req: Request, res: Response) {
        try {
            const clientes = await ClienteService.listarClientes();
            res.json(clientes);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar clientes.' });
        }
    }

    static async obterClientePorId(req: Request, res: Response) {
        try {
            const clienteId = Number(req.params.id);
            const cliente = await ClienteService.obterClientePorId(clienteId);
            if (cliente) {
                res.json(cliente);
            } else {
                res.status(404).json({ error: 'Cliente não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter cliente.' });
        }
    }

    static async atualizarCliente(req: Request, res: Response) {
        try {
            const clienteId = Number(req.params.id);
            const { nome, email } = req.body;
            const clienteAtualizado = await ClienteService.atualizarCliente(clienteId, nome, email);
            if (clienteAtualizado) {
                res.json(clienteAtualizado);
            } else {
                res.status(404).json({ error: 'Cliente não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar cliente.' });
        }
    }

    static async deletarCliente(req: Request, res: Response) {
        try {
            const clienteId = Number(req.params.id);
            const deletado = await ClienteService.deletarCliente(clienteId);
            if (deletado) {
                res.status(204).send(); // No content
            } else {
                res.status(404).json({ error: 'Cliente não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar cliente.' });
        }
    }
}
