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
const pedido_1 = __importDefault(require("../models/pedido"));
const detalhePedido_1 = __importDefault(require("../models/detalhePedido"));
class PedidoService {
    // Método para listar todos os pedidos
    listarPedidos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield pedido_1.default.findAll();
            }
            catch (error) {
                console.error('Erro ao listar pedidos:', error);
                throw new Error('Não foi possível listar os pedidos.');
            }
        });
    }
    // Método para obter detalhes de um pedido específico
    obterDetalhesDoPedido(pedidoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield detalhePedido_1.default.findAll({ where: { pedido_id: pedidoId } });
            }
            catch (error) {
                console.error('Erro ao obter detalhes do pedido:', error);
                throw new Error('Não foi possível obter os detalhes do pedido.');
            }
        });
    }
}
exports.default = new PedidoService();
