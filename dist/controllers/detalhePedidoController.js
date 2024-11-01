"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalhePedidoController = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const detalhePedido_1 = __importDefault(require("../models/detalhePedido"));
class DetalhePedidoController {
    // Método para listar detalhes dos pedidos
    static listarDetalhes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detalhes = yield detalhePedido_1.default.findAll();
                res.json(detalhes);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao listar detalhes do pedido.' });
            }
        });
    }
    // Método para gerar o catálogo de detalhes do pedido em PDF
    static gerarCatalogoPDF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detalhes = yield detalhePedido_1.default.findAll();
                // Configura o cabeçalho de resposta para PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=catalogo_detalhes_pedido.pdf');
                // Cria o documento PDF
                const doc = new pdfkit_1.default();
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
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao gerar o catálogo em PDF dos detalhes do pedido.' });
            }
        });
    }
}
exports.DetalhePedidoController = DetalhePedidoController;
