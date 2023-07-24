import { pool } from "../db/index.js";

class login {
  async login(login, password) {
    try {
      const request = `select * from users where login = '${login}' and password = '${password}'`;

      console.log(request);

      const user = (await pool.query(request)).rows;

      if (user.length === 0) {
        throw "user not found";
      }

      return user[0];
    } catch (error) {
      throw error;
    }
  }
}

export const LoginService = new login();
