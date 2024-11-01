"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/pedidoRoutes.ts
const express_1 = require("express");
const pedidoController_1 = require("../controllers/pedidoController");
const router = (0, express_1.Router)();
router.get('/', pedidoController_1.PedidoController.listarPedidos);
router.get('/catalogo-pdf', pedidoController_1.PedidoController.gerarCatalogoPDF); // Nova rota para gerar PDF
exports.default = router;
