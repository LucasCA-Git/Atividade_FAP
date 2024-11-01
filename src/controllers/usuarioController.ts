import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuarioService';
import jwt from 'jsonwebtoken';

export class UsuarioController {
    static async criarUsuario(req: Request, res: Response): Promise<void> {
        try {
            const { login, senha } = req.body;
            const usuario = await UsuarioService.criarUsuario(login, senha);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar usuário.' });
        }
    }

    static async autenticarUsuario(req: Request, res: Response): Promise<void> {
        try {
            const { login, senha } = req.body;
            const usuario = await UsuarioService.autenticarUsuario(login, senha);

            if (usuario) {
                const jwtSecret = process.env.JWT_SECRET;
                if (!jwtSecret) {
                    res.status(500).json({ error: 'JWT_SECRET não está definido no .env' });
                    return; // Interrompe a execução se a chave não estiver definida
                }

                const acessToken = jwt.sign(
                    { usuario_id: usuario.usuario_id, usuario_login: usuario.usuario_login },
                    jwtSecret,
                    { expiresIn: '1h' }
                );
                res.status(200).json({ acessToken });
            } else {
                res.status(401).json({ error: 'Credenciais inválidas.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao autenticar usuário.' });
        }
    }

    static async listarUsuarios(req: Request, res: Response): Promise<void> {
        try {
            const usuarios = await UsuarioService.listarUsuarios();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar usuários.' });
        }
    }

    static async buscarUsuarioPorId(req: Request, res: Response): Promise<void> {
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

    static async atualizarUsuario(req: Request, res: Response): Promise<void> {
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

    static async deletarUsuario(req: Request, res: Response): Promise<void> {
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
