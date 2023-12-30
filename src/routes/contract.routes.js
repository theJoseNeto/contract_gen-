const { Router } = require("express");
const routes = Router();
const { index, contract1, contract2, contract3 } = require("../controllers/contractController");
const { selectContractType } = require("../controllers/redirectController");
const { gencontract } = require("../controllers/contractController");
const pdf = require("../controllers/attachmentController");
const { createdContract } = require("../controllers/contractController");
const { loginRequired } = require("../middlewares/loginRequired");
const { signup, signupPage } = require("../controllers/registerController");
const { signin, signinpPage } = require("../controllers/loginController");

routes.get("/cadastro", signupPage);
routes.post("/signup", signup);
routes.get("/entrar", signinpPage);
routes.post('/signin', signin)
routes.get("/", (req, res) => res.redirect("/contracts"));
routes.get("/contracts", loginRequired, index);
routes.get("/select_route", loginRequired, selectContractType);
routes.get("/contract_1", loginRequired, contract1);
routes.post("/gen_contract1", loginRequired, gencontract);
routes.get("/download_file", loginRequired, pdf.downloadPdf);
routes.get("/prestacaoServico", loginRequired, createdContract);
routes.get("/error", (req, res) => res.render("errors.ejs"));

module.exports = routes;
