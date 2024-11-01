"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
const express_1 = require("express");
const clienteRoutes_1 = __importDefault(require("./clienteRoutes"));
const produtoRoutes_1 = __importDefault(require("./produtoRoutes"));
const pedidoRoutes_1 = __importDefault(require("./pedidoRoutes"));
const detalhePedidoRoutes_1 = __importDefault(require("./detalhePedidoRoutes"));
const routes = (0, express_1.Router)();
routes.use('/clientes', clienteRoutes_1.default);
routes.use('/produtos', produtoRoutes_1.default);
routes.use('/pedidos', pedidoRoutes_1.default);
routes.use('/detalhes-pedido', detalhePedidoRoutes_1.default);
exports.default = routes;
