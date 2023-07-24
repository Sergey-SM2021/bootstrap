import express from "express";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import profileRouter from "./routes/profile.js";
import { RegisterRouter } from "./routes/register.js";
import { LoginRouter } from "./routes/login.js";
import { auth } from "./middleware/auth.js";

var app = express();

app.use(express.json());

app.use(auth);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/profile", profileRouter);
app.use("/register", RegisterRouter);
app.use("/login", LoginRouter);

app.listen(3000);
