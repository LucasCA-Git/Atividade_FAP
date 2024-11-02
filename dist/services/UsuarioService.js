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
exports.UsuarioService = void 0;
const usuario_1 = require("../models/usuario");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsuarioService {
    static criarUsuario(login, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            // Cria um novo usuário e retorna
            const hashedSenha = yield bcrypt_1.default.hash(senha, 10); // Hasheando a senha
            return yield usuario_1.Usuario.create({ usuario_login: login, usuario_senha: hashedSenha });
        });
    }
    static autenticarUsuario(login, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            // Busca o usuário pelo login
            const usuario = yield usuario_1.Usuario.findOne({ where: { usuario_login: login } });
            if (usuario && (yield bcrypt_1.default.compare(senha, usuario.usuario_senha))) {
                return usuario; // Retorna o usuário se as credenciais forem válidas
            }
            return null; // Retorna null se as credenciais forem inválidas
        });
    }
    static listarUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            // Retorna todos os usuários
            return yield usuario_1.Usuario.findAll();
        });
    }
    static buscarUsuarioPorId(usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Busca o usuário pelo ID
            return yield usuario_1.Usuario.findByPk(usuarioId);
        });
    }
    static atualizarUsuario(usuarioId, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield usuario_1.Usuario.findByPk(usuarioId);
            if (!usuario)
                return null;
            usuario.usuario_login = dados.login;
            usuario.usuario_senha = yield bcrypt_1.default.hash(dados.senha, 10); // Hasheando a nova senha
            yield usuario.save();
            return usuario;
        });
    }
    static deletarUsuario(usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield usuario_1.Usuario.findByPk(usuarioId);
            if (!usuario)
                return null;
            yield usuario.destroy();
            return usuario;
        });
    }
}
exports.UsuarioService = UsuarioService;
