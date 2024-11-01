import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Usuario extends Model {
    public usuario_id!: number;
    public usuario_login!: string;
    public usuario_senha!: string;
}

Usuario.init({
    usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    usuario_login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    usuario_senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
});
