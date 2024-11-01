import { Router } from 'express';
import { ClienteController } from '../controllers/clienteController';

const router = Router();

router.post('/clientes', ClienteController.criarCliente);
router.get('/clientes', ClienteController.listarClientes);
router.get('/clientes/:id', ClienteController.obterClientePorId);
router.put('/clientes/:id', ClienteController.atualizarCliente);
router.delete('/clientes/:id', ClienteController.deletarCliente);

export default router;
