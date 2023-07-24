import { registerService } from "../servicecs/register.js";

class Register {
  async register(req, res) {
    const { login, password } = req.body;
    try {
      const user = await registerService.register(login, password);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("не удалось создать новог пользователя");
    }
  }
}

export const RegisterController = new Register();
