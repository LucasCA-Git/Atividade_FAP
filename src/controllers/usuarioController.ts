import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuarioService';

export class UsuarioController {
    // Método para criar um usuário
    static async criarUsuario(req: Request, res: Response) {
        try {
            const { login, senha } = req.body;
            const usuario = await UsuarioService.criarUsuario(login, senha);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar usuário.' });
        }
    }

    // Método para autenticar um usuário
    static async autenticarUsuario(req: Request, res: Response) {
        try {
            const { login, senha } = req.body;
            const autenticado = await UsuarioService.autenticarUsuario(login, senha);
            if (autenticado) {
                res.status(200).json({ message: 'Autenticado com sucesso!' });
            } else {
                res.status(401).json({ error: 'Credenciais inválidas.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao autenticar usuário.' });
        }
    }

    // Método para listar usuários
    static async listarUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await UsuarioService.listarUsuarios();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar usuários.' });
        }
    }

    // Método para buscar um usuário por ID
    static async buscarUsuarioPorId(req: Request, res: Response) {
        try {
            const usuarioId = Number(req.params.id);
            const usuario = await UsuarioService.buscarUsuarioPorId(usuarioId);
            if (usuario) {
                res.json(usuario);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter usuário.' });
        }
    }

    // Método para atualizar um usuário
    static async atualizarUsuario(req: Request, res: Response) {
        try {
            const usuarioId = Number(req.params.id);
            const { login, senha } = req.body;
            const usuarioAtualizado = await UsuarioService.atualizarUsuario(usuarioId, { login, senha });
            if (usuarioAtualizado) {
                res.json(usuarioAtualizado);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar usuário.' });
        }
    }

    // Método para deletar um usuário
    static async deletarUsuario(req: Request, res: Response) {
        try {
            const usuarioId = Number(req.params.id);
            const usuarioDeletado = await UsuarioService.deletarUsuario(usuarioId);
            if (usuarioDeletado) {
                res.status(204).send(); // No content
            } else {
                res.status(404).json({ error: 'Usuário não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar usuário.' });
        }
    }
}
