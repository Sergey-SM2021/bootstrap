import { LoginService } from "../servicecs/login.js";
import { JWTTocken } from "../servicecs/token.js";

class Login {
  async login(req, res) {
    const { login, password } = req.body;
    try {
      const user = await LoginService.login(login, password);      
      const {access} = JWTTocken.generateJWT(user.id)
      res.send(access);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export const LoginController = new Login();
