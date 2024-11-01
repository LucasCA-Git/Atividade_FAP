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
exports.UsuarioService = void 0;
const usuario_1 = require("../models/usuario");
class UsuarioService {
    static criarUsuario(login, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usuario_1.Usuario.create({ usuario_login: login, usuario_senha: senha });
        });
    }
    static autenticarUsuario(login, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield usuario_1.Usuario.findOne({ where: { usuario_login: login, usuario_senha: senha } });
            return usuario ? true : false;
        });
    }
    static listarUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usuario_1.Usuario.findAll();
        });
    }
    static buscarUsuarioPorId(usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usuario_1.Usuario.findByPk(usuarioId);
        });
    }
    static atualizarUsuario(usuarioId, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield usuario_1.Usuario.findByPk(usuarioId);
            if (!usuario)
                return null;
            usuario.usuario_login = dados.login;
            usuario.usuario_senha = dados.senha;
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
