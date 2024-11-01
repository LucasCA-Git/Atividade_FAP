import { Router } from 'express';
import { UsuarioController } from '../controllers/usuarioController';

const router = Router();

router.post('/usuarios', UsuarioController.criarUsuario);
router.post('/usuarios/login', UsuarioController.autenticarUsuario);
router.get('/usuarios', UsuarioController.listarUsuarios);
router.get('/usuarios/:id', UsuarioController.buscarUsuarioPorId);
router.put('/usuarios/:id', UsuarioController.atualizarUsuario);
router.delete('/usuarios/:id', UsuarioController.deletarUsuario);

export default router;
