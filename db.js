import pg from 'pg'

const pool = new pg.Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: '5432',
    database: 'blockchain',
});

export default pool;
