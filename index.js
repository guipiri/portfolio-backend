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

app.post("/uploadFiles", upload.array("htmlInput", 50), async (req, res) => {
	console.log(req.files);
	res.end();
});

app.listen(port, () => {
	console.log("servidor rodando na ports 3001");
});
