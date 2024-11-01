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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const clienteService_1 = require("../services/clienteService");
class ClienteController {
    static criarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, email } = req.body;
                const cliente = yield clienteService_1.ClienteService.criarCliente(nome, email);
                res.status(201).json(cliente);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao criar cliente.' });
            }
        });
    }
    static listarClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield clienteService_1.ClienteService.listarClientes();
                res.json(clientes);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao listar clientes.' });
            }
        });
    }
    static obterClientePorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteId = Number(req.params.id);
                const cliente = yield clienteService_1.ClienteService.obterClientePorId(clienteId);
                if (cliente) {
                    res.json(cliente);
                }
                else {
                    res.status(404).json({ error: 'Cliente não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao obter cliente.' });
            }
        });
    }
    static atualizarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteId = Number(req.params.id);
                const { nome, email } = req.body;
                const clienteAtualizado = yield clienteService_1.ClienteService.atualizarCliente(clienteId, nome, email);
                if (clienteAtualizado) {
                    res.json(clienteAtualizado);
                }
                else {
                    res.status(404).json({ error: 'Cliente não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao atualizar cliente.' });
            }
        });
    }
    static deletarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteId = Number(req.params.id);
                const deletado = yield clienteService_1.ClienteService.deletarCliente(clienteId);
                if (deletado) {
                    res.status(204).send(); // No content
                }
                else {
                    res.status(404).json({ error: 'Cliente não encontrado.' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao deletar cliente.' });
            }
        });
    }
}
exports.ClienteController = ClienteController;
