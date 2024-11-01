"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produtoController_1 = require("../controllers/produtoController");
const router = (0, express_1.Router)();
// Remove a repetição da rota "/produtos"
router.get('/', produtoController_1.ProdutoController.listarProdutos); // Aqui não precisa do "/produtos"
router.get('/catalogo-pdf', produtoController_1.ProdutoController.gerarCatalogoPDF);
router.post('/', produtoController_1.ProdutoController.criarProduto);
router.get('/:id', produtoController_1.ProdutoController.buscarProdutoPorId);
router.put('/:id', produtoController_1.ProdutoController.atualizarProduto);
router.delete('/:id', produtoController_1.ProdutoController.deletarProduto);
exports.default = router;
