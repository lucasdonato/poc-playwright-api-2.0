const mysql = require('mysql2');
const shell = require('shelljs');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    connectionLimit: 10,
    queueLimit: 0,
});

async function executeQuery(sql: string) {
    try { pool.query(sql) }
    catch (error) { throw error }
}

export async function deleteFuncionarioLog() {
    await executeQuery('SELECT*FROM funcionario_log')
}

export async function dropDatabase() {

    console.log('limpando o banco de dados...')

    const { DB_USER, DB_PASS, DB_PORT, DB_HOST, DATABASE } = process.env
    const SQL = `mysql -u ${DB_USER} -p${DB_PASS} --port ${DB_PORT} -h ${DB_HOST} ${DATABASE} < support/database/dropDatabase.sql`

    await shell.exec(SQL)

    console.log('banco de dados limpo com sucesso!!!')
}