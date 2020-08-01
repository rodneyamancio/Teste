/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 04/03/2020
 * Author: Glaucia Lemos
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  //connectionString: process.env.DATABASE_URL,
  connectionString: "postgres://jkctbchpzrxzcd:555b0512b1183e7e5815f66c2c3de90b32f8da97bc7d27f24af1e5a0041cd6bd@ec2-54-243-67-199.compute-1.amazonaws.com:5432/drsdhk3jlnjuo",
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};