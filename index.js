const express = require("express");
const cors = require("cors");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const port = process.env.PORT || 3001;
const app = express();
// app.use(express.json());
app.use(cors());

app.post("/uploadFile", upload.single("htmlInput"), (req, res) => {
	console.log(req.file);
	res.end();
});

app.listen(port, () => {
	console.log("servidor rodando na ports 3001");
});
