import { Usuario } from '../models/usuario';
import bcrypt from 'bcrypt';

export class UsuarioService {
    static async criarUsuario(login: string, senha: string) {
        // Cria um novo usuário e retorna
        const hashedSenha = await bcrypt.hash(senha, 10); // Hasheando a senha
        return await Usuario.create({ usuario_login: login, usuario_senha: hashedSenha });
    }

    static async autenticarUsuario(login: string, senha: string) {
        // Busca o usuário pelo login
        const usuario = await Usuario.findOne({ where: { usuario_login: login } });
        if (usuario && await bcrypt.compare(senha, usuario.usuario_senha)) {
            return usuario; // Retorna o usuário se as credenciais forem válidas
        }
        return null; // Retorna null se as credenciais forem inválidas
    }

    static async listarUsuarios() {
        // Retorna todos os usuários
        return await Usuario.findAll();
    }

    static async buscarUsuarioPorId(usuarioId: number) {
        // Busca o usuário pelo ID
        return await Usuario.findByPk(usuarioId);
    }

    static async atualizarUsuario(usuarioId: number, dados: { login: string; senha: string }) {
        const usuario = await Usuario.findByPk(usuarioId);
        if (!usuario) return null;

        usuario.usuario_login = dados.login;
        usuario.usuario_senha = await bcrypt.hash(dados.senha, 10); // Hasheando a nova senha
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
