const express = require("express");
const path = require("path");//Verifica las rutas

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));//Queremos a public como una carpeta de recursos estaticos

const PORT = process.env.PORT || 3000;

app.listen(PORT);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,"views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname,"views/login.html"));
});