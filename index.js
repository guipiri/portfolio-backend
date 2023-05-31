const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require('fs');
const { log } = require("console");

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
	log(req.files);
	res.end();
});


app.get("/excludeFiles",  (req, res) => {
	let excludeFile = fs.readdirSync('./uploads', {});

	if (excludeFile[0]) {
		log(excludeFile)
		log(`Apagando ${excludeFile.length} files...`);

		excludeFile.forEach((file) => {
			fs.rmSync(`./uploads/${file}`)})
		log('Arquivos apagados.', `Agora tem ${fs.readdirSync('./uploads', {}).length} arquivos em /uploads`);
		res.send(`Arquivos apagados. Agora tem ${fs.readdirSync('./uploads', {}).length} arquivos em /uploads`)
	} else {
		log('Não tem arquivos a serem excluídos!');
		res.send('Não tem arquivos a serem excluídos!');
		res.end();
	}
})


app.listen(port, () => {
	console.log("servidor rodando na ports 3001");
});
