const fs = require("fs/promises");
const { Router } = require("express");
const routes = Router();
const { join } = require("path");
const { index, contract1, contract2, contract3 } = require("../controllers/contractController");
const { selectContractType } = require("../controllers/redirectController");
const { gencontract } = require("../controllers/contractController");
const pdf = require("../controllers/attachmentController");
const { createdContract } = require("../controllers/contractController");
const { loginRequired } = require("../middlewares/loginRequired");
const { signup, signupPage } = require("../controllers/registerController");
const { signin, signinpPage } = require("../controllers/loginController");
const ejs = require("ejs");

routes.get("/juridico", async (req, res) => {
    const pathToFile = join(__dirname, "../views/created_contracts/contractType1.ejs");

    const filecontent = await fs.readFile(pathToFile, 'utf-8', (err, data) => {
        if (err) {
            return "";
        } else {
            return data
        }
    });



    await res.render('./juridico.ejs', { contract: filecontent });

});

routes.get("/select", (req, res) => {
    const aprovado = req.query.aprovado
    const negado = req.query.negado;
    
    if (aprovado) res.send("Aprovado")
    else if (negado) res.send("Negado")
    else res.redirect("back")
})

routes.get("/juridico-login", (req, res) => {
    res.render("auth/loginJuridico.ejs", {message: null})
});



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
