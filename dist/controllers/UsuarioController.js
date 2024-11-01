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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const usuarioService_1 = require("../services/usuarioService");
class UsuarioController {
    // Método para criar um usuário
    static criarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, senha } = req.body;
                const usuario = yield usuarioService_1.UsuarioService.criarUsuario(login, senha);
                res.status(201).json(usuario);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao criar usuário.' });
            }
        });
    }
    // Método para autenticar um usuário
    static autenticarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, senha } = req.body;
                const autenticado = yield usuarioService_1.UsuarioService.autenticarUsuario(login, senha);
                if (autenticado) {
                    res.status(200).json({ message: 'Autenticado com sucesso!' });
                }
                else {
                    res.status(401).json({ error: 'Credenciais inválidas.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao autenticar usuário.' });
            }
        });
    }
    // Método para listar usuários
    static listarUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield usuarioService_1.UsuarioService.listarUsuarios();
                res.json(usuarios);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao listar usuários.' });
            }
        });
    }
    // Método para buscar um usuário por ID
    static buscarUsuarioPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioId = Number(req.params.id);
                const usuario = yield usuarioService_1.UsuarioService.buscarUsuarioPorId(usuarioId);
                if (usuario) {
                    res.json(usuario);
                }
                else {
                    res.status(404).json({ error: 'Usuário não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao obter usuário.' });
            }
        });
    }
    // Método para atualizar um usuário
    static atualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioId = Number(req.params.id);
                const { login, senha } = req.body;
                const usuarioAtualizado = yield usuarioService_1.UsuarioService.atualizarUsuario(usuarioId, { login, senha });
                if (usuarioAtualizado) {
                    res.json(usuarioAtualizado);
                }
                else {
                    res.status(404).json({ error: 'Usuário não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao atualizar usuário.' });
            }
        });
    }
    // Método para deletar um usuário
    static deletarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioId = Number(req.params.id);
                const usuarioDeletado = yield usuarioService_1.UsuarioService.deletarUsuario(usuarioId);
                if (usuarioDeletado) {
                    res.status(204).send(); // No content
                }
                else {
                    res.status(404).json({ error: 'Usuário não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao deletar usuário.' });
            }
        });
    }
}
exports.UsuarioController = UsuarioController;
