import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { sequelize } from '../config/database';

dotenv.config();

async function createDatabaseIfNotExists() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  const databaseName = process.env.DB_NAME || 'pedidos';

  try {
    const [rows] = await connection.query('SHOW DATABASES LIKE ?', [databaseName]) as [mysql.RowDataPacket[], mysql.FieldPacket[]];
    
    if (rows.length === 0) {
      await connection.query(`CREATE DATABASE \`${databaseName}\`;`);
      console.log(`Banco de dados '${databaseName}' criado com sucesso.`);
    } else {
      console.log(`Banco de dados '${databaseName}' já existe.`);
    }
  } catch (error) {
    console.error('Erro ao criar o banco de dados:', error);
  } finally {
    await connection.end();
  }
}

async function initializeDataSource() {
  try {
    await sequelize.sync();
    console.log('DataSource inicializado com sucesso e tabelas sincronizadas.');
  } catch (error) {
    console.error('Erro ao inicializar o DataSource:', error);
  }
}

async function setup() {
  await createDatabaseIfNotExists();
  await initializeDataSource();
}

setup().catch(error => console.error('Falha na configuração:', error));
