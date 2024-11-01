// src/controllers/PedidoController.ts
import { Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import Pedido from '../models/pedido';
import DetalhePedido from '../models/detalhePedido';

export class PedidoController {
    // Método para listar pedidos
    static async listarPedidos(req: Request, res: Response) {
        try {
            const pedidos = await Pedido.findAll();
            res.json(pedidos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar pedidos.' });
        }
    }

    // Método para gerar o catálogo de pedidos em PDF
    static async gerarCatalogoPDF(req: Request, res: Response) {
        try {
            const pedidos = await Pedido.findAll();

            // Configura o cabeçalho de resposta para PDF
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=catalogo_pedidos.pdf');

            // Cria o documento PDF
            const doc = new PDFDocument();
            doc.pipe(res);

            // Adiciona título ao PDF
            doc.fontSize(20).text('Catálogo de Pedidos', { align: 'center' });
            doc.moveDown();

            // Itera sobre os pedidos e adiciona ao PDF
            pedidos.forEach(pedido => {
                doc.fontSize(12).text(`Pedido ID: ${pedido.pedido_id}`);
                doc.text(`Data: ${pedido.data_pedido}`);
                doc.text(`Status: ${pedido.status}`);
                doc.moveDown();
            });

            // Finaliza o documento PDF
            doc.end();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao gerar o catálogo em PDF dos pedidos.' });
        }
    }
}
