// src/controllers/DetalhePedidoController.ts
import { Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import DetalhePedido from '../models/detalhePedido';

export class DetalhePedidoController {
    // Método para listar detalhes dos pedidos
    static async listarDetalhes(req: Request, res: Response) {
        try {
            const detalhes = await DetalhePedido.findAll();
            res.json(detalhes);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar detalhes do pedido.' });
        }
    }

    // Método para gerar o catálogo de detalhes do pedido em PDF
    static async gerarCatalogoPDF(req: Request, res: Response) {
        try {
            const detalhes = await DetalhePedido.findAll();

            // Configura o cabeçalho de resposta para PDF
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=catalogo_detalhes_pedido.pdf');

            // Cria o documento PDF
            const doc = new PDFDocument();
            doc.pipe(res);

            // Adiciona título ao PDF
            doc.fontSize(20).text('Catálogo de Detalhes do Pedido', { align: 'center' });
            doc.moveDown();

            // Itera sobre os detalhes e adiciona ao PDF
            detalhes.forEach(detalhe => {
                doc.fontSize(12).text(`Detalhe ID: ${detalhe.detalhe_id}`);
                doc.text(`Produto ID: ${detalhe.produto_id}`);
                doc.text(`Quantidade: ${detalhe.quantidade}`);
                doc.text(`Preço: R$ ${detalhe.preco.toFixed(2)}`);
                doc.moveDown();
            });

            // Finaliza o documento PDF
            doc.end();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao gerar o catálogo em PDF dos detalhes do pedido.' });
        }
    }
}
