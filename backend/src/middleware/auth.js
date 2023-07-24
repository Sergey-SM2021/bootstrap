export const auth = (req, res, next) => {
  console.log(req.headers);
  if (!req.headers["authorization"]) {
    res.status(401).send("not auth")
  } else {
    next();
  }
};
