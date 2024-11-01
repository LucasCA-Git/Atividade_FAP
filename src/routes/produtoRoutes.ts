import { Router } from 'express';
import { ProdutoController } from '../controllers/produtoController';

const router = Router();

// Remove a repetição da rota "/produtos"
router.get('/', ProdutoController.listarProdutos); // Aqui não precisa do "/produtos"
router.get('/catalogo-pdf', ProdutoController.gerarCatalogoPDF);
router.post('/', ProdutoController.criarProduto);
router.get('/:id', ProdutoController.buscarProdutoPorId);
router.put('/:id', ProdutoController.atualizarProduto);
router.delete('/:id', ProdutoController.deletarProduto);

export default router;
