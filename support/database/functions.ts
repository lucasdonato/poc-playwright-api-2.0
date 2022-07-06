const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    connectionLimit: 10,
    queueLimit: 0
});


async function executeQuery(sql: string) {
    try { pool.query(sql) }
    catch (error) { throw error }
}

export async function deleteFuncionarioLog() {
    await executeQuery('SELECT*FROM funcionario_log')
}