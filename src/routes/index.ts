// src/routes/index.ts
import { Router } from 'express';
import clienteRoutes from './clienteRoutes';
import produtoRoutes from './produtoRoutes';
import pedidoRoutes from './pedidoRoutes';
import detalhePedidoRoutes from './detalhePedidoRoutes';

const routes = Router();

routes.use('/clientes', clienteRoutes);
routes.use('/produtos', produtoRoutes);
routes.use('/pedidos', pedidoRoutes);
routes.use('/detalhes-pedido', detalhePedidoRoutes);

export default routes;
