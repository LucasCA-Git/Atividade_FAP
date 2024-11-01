// src/routes/pedidoRoutes.ts
import { Router } from 'express';
import { PedidoController } from '../controllers/pedidoController';

const router = Router();

router.get('/', PedidoController.listarPedidos);
router.get('/catalogo-pdf', PedidoController.gerarCatalogoPDF); // Nova rota para gerar PDF

export default router;
