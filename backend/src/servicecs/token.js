import jwt from "jsonwebtoken";

class Token {
  generateJWT = (userId) => {
    const secret = "3N9SGxP1L9oTDQ0";
    const access = jwt.sign({userId}, secret, { expiresIn: "10h" });
    const refresh = jwt.sign({userId}, secret, { expiresIn: "10h" });
    return {
      access,
      refresh,
    };
  };
}

export const JWTTocken = new Token();
