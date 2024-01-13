const cnpjConsulta = require("../modules/cnpjSearch");
const contract_content = require("../data/contract.data");
const genPdf = require("../modules/pdfgen");
const createEJSFile = require("../modules/genEjs");
const { getAuth } = require("firebase/auth");

module.exports = {

    index: (req, res) => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) { return res.render("index.ejs", { title: "", message: "" }) }
        else return res.redirect("/singnup");
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

        try {
            const { nome, cpf, rg, email, cnpj } = req.body;
            const { dono, endereco } = await cnpjConsulta.search(nome, cnpj);

            const fileName = "contractType1"
            const filePath = "../views/created_contracts"

            const ejsContent = contract_content(dono, endereco, cpf, rg, email)
            // TODO: Armazenar o conteúdo desse contrato criado no banco de dados   
          
            await createEJSFile(ejsContent, fileName, filePath)

            await genPdf("http://localhost:3000/prestacaoServico");
            await res.redirect(`/download_file?fileName=${fileName}`);

        } catch (error) {
            console.error(error)
        }
    },

    createdContract: async (req, res) => {
        res.render("created_contracts/contractType1")
    }
};
