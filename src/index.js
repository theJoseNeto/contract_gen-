const firebaseConfig = require('./config/firebase');
const express = require('express');
const app = express();
const routes = require("./routes/contract.routes");
const mongoose = require('mongoose');

// Firebase
const { initializeApp } = require('firebase/app');
initializeApp(firebaseConfig);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3000;

// mongoDb 
mongoose.connect(process.env.ATLAS_URI)

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    })
  });




