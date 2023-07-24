import pg from "pg";

const Pool = pg.Pool

export const pool = new Pool({
    host:"127.0.0.1",
    user:"pgql2003",
    password:"pgql2003",
    database:"bootstrap"
})