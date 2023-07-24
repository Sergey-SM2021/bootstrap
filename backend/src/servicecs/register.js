import { pool } from "../db/index.js";

class register {
  async register(login, password) {
    try {
      const userWithSameData = await (await pool.query(`select * from users where login = '${login}'`)).rowCount
      if (userWithSameData) {
        throw "юзер с таким логином уже создан"
      } 
      await pool.query(
        `insert into users (login, password) values ('${login}', '${password}')`
      );
      return "user was created";
    } catch (error) {
      throw error;
    }
  }
}

export const registerService = new register();
