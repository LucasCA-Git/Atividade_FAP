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
exports.PedidoController = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const pedido_1 = __importDefault(require("../models/pedido"));
class PedidoController {
    // Método para listar pedidos
    static listarPedidos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pedidos = yield pedido_1.default.findAll();
                res.json(pedidos);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao listar pedidos.' });
            }
        });
    }
    // Método para gerar o catálogo de pedidos em PDF
    static gerarCatalogoPDF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pedidos = yield pedido_1.default.findAll();
                // Configura o cabeçalho de resposta para PDF
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=catalogo_pedidos.pdf');
                // Cria o documento PDF
                const doc = new pdfkit_1.default();
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
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao gerar o catálogo em PDF dos pedidos.' });
            }
        });
    }
}
exports.PedidoController = PedidoController;
