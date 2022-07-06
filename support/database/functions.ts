const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'app-db.cavalo.q4dev.com.br',
    user: 'admin',
    password: '123456',
    database: 'cavalo_tagplus',
    port: '3306',
    connectionLimit: 10,
    queueLimit: 0
});


async function executeQuery(sql: string) {
    try {
        pool.query(sql)
    } catch (error) {
        throw error
    }
}

export async function deleteFuncionarioLog() {
    await executeQuery('SELECT*FROM funcionario_log')
}