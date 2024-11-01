import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Cliente extends Model {
    public cliente_id!: number;
    public cliente_nome!: string;
    public cliente_email!: string;
}

Cliente.init({
    cliente_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cliente_nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cliente_email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes',
});
