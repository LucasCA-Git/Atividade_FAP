import { Usuario } from '../models/usuario';

export class UsuarioService {
    static async criarUsuario(login: string, senha: string) {
        return await Usuario.create({ usuario_login: login, usuario_senha: senha });
    }

    static async autenticarUsuario(login: string, senha: string) {
        const usuario = await Usuario.findOne({ where: { usuario_login: login, usuario_senha: senha } });
        return usuario ? true : false;
    }

    static async listarUsuarios() {
        return await Usuario.findAll();
    }

    static async buscarUsuarioPorId(usuarioId: number) {
        return await Usuario.findByPk(usuarioId);
    }

    static async atualizarUsuario(usuarioId: number, dados: { login: string; senha: string }) {
        const usuario = await Usuario.findByPk(usuarioId);
        if (!usuario) return null;

        usuario.usuario_login = dados.login;
        usuario.usuario_senha = dados.senha;
        await usuario.save();

        return usuario;
    }

    static async deletarUsuario(usuarioId: number) {
        const usuario = await Usuario.findByPk(usuarioId);
        if (!usuario) return null;

        await usuario.destroy();
        return usuario;
    }
}
