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
const detalhePedido_1 = __importDefault(require("../models/detalhePedido"));
class DetalhePedidoService {
    // Método para listar todos os detalhes de pedidos
    listarDetalhes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield detalhePedido_1.default.findAll();
            }
            catch (error) {
                console.error('Erro ao listar detalhes do pedido:', error);
                throw new Error('Não foi possível listar os detalhes do pedido.');
            }
        });
    }
}
exports.default = new DetalhePedidoService();
