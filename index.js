const express = require("express");
const cors = require("cors");
const multer = require("multer");

const port = process.env.PORT || 3001;
const upload = multer({ dest: "uploads/" });
const app = express();
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	app.use(cors());
	next();
});

app.post("/uploadFile", upload.single("htmlInput"), async (req, res) => {
	if (req.file) {
		res.status(200, "aoiahao");
		res.send("O upload ocorreu com sucesso!");
		res.status;
	} else {
		res.send("Ocorreu uma falha no seu upload!");
	}

	res.end();
});

app.listen(port, () => {
	console.log("servidor rodando na ports 3001");
});
