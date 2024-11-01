"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class DetalhePedido extends sequelize_1.Model {
}
DetalhePedido.init({
    detalhe_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    pedido_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    produto_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    quantidade: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    preco: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    tableName: 'detalhes_pedido',
    timestamps: false,
});
exports.default = DetalhePedido;
