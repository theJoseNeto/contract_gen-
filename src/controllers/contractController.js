const cnpjConsulta = require("../modules/cnpjSearch");
const contract_content = require("../data/contract.data");
const genPdf = require("../modules/pdfgen");
const createEJSFile = require("../modules/genEjs");

module.exports = {
    index: (req, res) => {
        res.render("index.ejs", { title: "Bem-vindo(a)" })
    },

    contract1: (req, res) => {
        res.render("./contract_types/ct_1.ejs")
    },

    contract2: (req, res) => {
        res.render("./contract_types/ct_2.ejs")
    },

    contract3: (req, res) => {
        res.render("./contract_types/ct_3.ejs")
    },

    gencontract: async (req, res) => {

        const { dono, razao_social, cnpj, nome_fantasia, endereco } = await cnpjConsulta.search(req.body.cnpj);
        const { cpf, rg, email } = req.body;
        const fileName = "contractType1"

        const ejsContent = contract_content(dono, endereco, cpf, rg, email)
        await createEJSFile(ejsContent, fileName)

        await genPdf("http://localhost:3000/prestacaoServico");
        await res.redirect(`/download_file?fileName=${fileName}`);
    },

    createdContract: async (req, res) => {
        res.render("created_contracts/contractType1")
    }
};

