// src/routes/detalhePedidoRoutes.ts
import { Router } from 'express';
import { DetalhePedidoController } from '../controllers/detalhePedidoController';

const router = Router();

router.get('/', DetalhePedidoController.listarDetalhes);
router.get('/catalogo-pdf', DetalhePedidoController.gerarCatalogoPDF); // Nova rota para gerar PDF

export default router;
