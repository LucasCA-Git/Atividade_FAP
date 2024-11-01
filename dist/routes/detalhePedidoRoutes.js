"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/detalhePedidoRoutes.ts
const express_1 = require("express");
const detalhePedidoController_1 = require("../controllers/detalhePedidoController");
const router = (0, express_1.Router)();
router.get('/', detalhePedidoController_1.DetalhePedidoController.listarDetalhes);
router.get('/catalogo-pdf', detalhePedidoController_1.DetalhePedidoController.gerarCatalogoPDF); // Nova rota para gerar PDF
exports.default = router;
