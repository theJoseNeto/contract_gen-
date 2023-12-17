const { Router } = require("express");
const routes = Router();
const { index, contract1, contract2, contract3 } = require("../controllers/contractController");
const { selectContractType } = require("../controllers/redirectController");
const { gencontract } = require("../controllers/contractController");
const { download_pdf } = require("../controllers/attachmentController");
const { createdContract } = require("../controllers/contractController");
const { signinpPage, signin } = require("../controllers/registerController");
const { signupPage, signup } = require("../controllers/loginController");

routes.get("/", (req, res) => res.redirect("/contracts"));
routes.get("/contracts", index);
routes.get("/select_route", selectContractType);
routes.get("/contract_1", contract1);

routes.get("/cadastro", signinpPage);
routes.get("/entrar", signupPage);

routes.post("/signin", signin);
routes.post("/signup", signup)

routes.post("/gen_contract1", gencontract);
// routes.post("/gen_contract2", gencontract);
// routes.post("/gen_contract3", gencontract);
routes.get("/download_file", download_pdf);
routes.get("/prestacaoServico", createdContract);

module.exports = routes;
