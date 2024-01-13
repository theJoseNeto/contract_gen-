const { join } = require("path")
const express = require('express');
const app = express();
const routes = require("./routes/contract.routes");
const mongoose = require('mongoose');
const configSession = require("./config/session/express.session");
const session = require("express-session");
const flash = require("connect-flash");
const cookieParser = require('cookie-parser');
const connnection = require("./")
const PORT = process.env.PORT || 3000;
// Firebase
const firebaseConfig = require('./config/firebase');
const { initializeApp } = require('firebase/app');
initializeApp(firebaseConfig);

// app 
const pathToimages = join(__dirname, "public")
app.use(express.static(pathToimages))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(session(configSession))
app.use(routes);

// mongoDb 
mongoose.connect(process.env.ATLAS_URI).then(() => app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)));
