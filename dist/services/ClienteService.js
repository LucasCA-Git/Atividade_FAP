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
exports.ClienteService = void 0;
const cliente_1 = require("../models/cliente");
class ClienteService {
    static criarCliente(nome, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cliente_1.Cliente.create({ cliente_nome: nome, cliente_email: email });
        });
    }
    static listarClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cliente_1.Cliente.findAll();
        });
    }
    static obterClientePorId(clienteId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cliente_1.Cliente.findByPk(clienteId);
        });
    }
    static atualizarCliente(clienteId, nome, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield cliente_1.Cliente.findByPk(clienteId);
            if (cliente) {
                cliente.cliente_nome = nome;
                cliente.cliente_email = email;
                yield cliente.save();
                return cliente;
            }
            return null;
        });
    }
    static deletarCliente(clienteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield cliente_1.Cliente.findByPk(clienteId);
            if (cliente) {
                yield cliente.destroy();
                return true;
            }
            return false;
        });
    }
}
exports.ClienteService = ClienteService;
