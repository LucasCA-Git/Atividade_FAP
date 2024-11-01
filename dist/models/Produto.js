"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Produto extends sequelize_1.Model {
}
Produto.init({
    produto_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    produto_nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    produto_categoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    produto_preco: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    tableName: 'produtos',
    timestamps: false,
});
exports.default = Produto;
