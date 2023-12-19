const { Router } = require("express");
const routes = Router();
const { index, contract1, contract2, contract3 } = require("../controllers/contractController");
const { selectContractType } = require("../controllers/redirectController");
const { gencontract } = require("../controllers/contractController");
const { download_pdf } = require("../controllers/attachmentController");
const { createdContract } = require("../controllers/contractController");
const { signinpPage, signin } = require("../controllers/registerController");
const { signupPage, signup } = require("../controllers/loginController");
const { loginRequired } = require("../middlewares/loginRequired");

routes.get("/", (req, res) => res.redirect("/contracts"));
routes.get("/contracts", loginRequired, index);
routes.get("/select_route", loginRequired, selectContractType);
routes.get("/contract_1", loginRequired, contract1);

routes.get("/cadastro", signinpPage);
routes.get("/entrar", signupPage);

routes.post("/signin", signin);
routes.post("/signup", signup)

routes.post("/gen_contract1", loginRequired, gencontract);
routes.get("/download_file", loginRequired, download_pdf);
routes.get("/prestacaoServico", loginRequired, createdContract);

routes.get("/teste", loginRequired, (req, res) => {

    res.send("logado")
})



module.exports = routes;
