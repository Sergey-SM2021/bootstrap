import { pool } from "../db/index.js";

class profile {
  async getProfile(id) {
    return (await pool.query(`select * from users where id = ${id}`)).rows;
  }
}

export const ProfileService = new profile();
