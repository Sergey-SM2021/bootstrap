// eslint-disable-next-line
const jsonServer = require("json-server")
// eslint-disable-next-line
const fs = require("fs")
// eslint-disable-next-line
const path = require("path")
const server = jsonServer.create()
// eslint-disable-next-line
const router = jsonServer.router(path.resolve(__dirname,"db.json"))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use((req, res, next)=> new Promise((resolve, reject) => {setTimeout(()=>{
	resolve(res)
	next()
},1500)}))

server.use((req, res, next) => {
	if (!req.headers.authorization) res.status(403).json("Invalid authorization")
	next()
})

server.post("/login", (req, res) => {
	const {login, password} = req.body
	// eslint-disable-next-line
	const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json")))
	const user = db.users.find(el => el.login === login && el.password === password)
	if (!user) res.status(403).json("Invalid password")
	res.send(user)
})

server.use(router)
server.listen(3000)