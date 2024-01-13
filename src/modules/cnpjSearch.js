
const axios = require("axios").default;

// class CNPJfunctions {
//     constructor() {
//         this.errors = [];
//     }


//     search = async (ownerName, cnpj) => {
//         try {
//             return await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`).then(companyData => {
//                 const { data } = companyData;
//                 const { valid, qsa_data } = this.validateCNPJAndName(data, ownerName);

//                 if (valid) {
//                     return {

//                         dono: ownerName,
//                         razao_social: data.razao_social,
//                         cnpj: data.cnpj,
//                         nome_fantasia: data.nome_fantasia,
//                         endereco: `${data.logradouro} - N°${data.numero} ${data.bairro} - ${data.cep}/${data.uf}`
//                     }
//                 } else {
//                     console.log("#############")
//                 }

//             })

//         } catch (error) {

//         }
//     }

//     validateCNPJAndName = async (data, ownerName) => {
//         const numberOfSocios = data.qsa.length;


//         let counter = 0;

//         for (qsaItem of data.qsa) {

//             if (qsa.nome_socio === ownerName) return {
//                 valid: true,
//                 qsa_data: qsa.nome_socio,
//             }
//             if (counter === numberOfSocios - 1) return {
//                 qsa_valid: false, data: ""
//             }

//             counter++;
//         }
//     }

// }


// module.exports = new CNPJfunctions();
module.exports = {

    search: async (ownerName, cnpj) => {
        try {

            return await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
                .then(company => {

                    const { data } = company;
                    return {
                        dono: ownerName,
                        razao_social: data.razao_social,
                        cnpj: data.cnpj,
                        nome_fantasia: data.nome_fantasia,
                        endereco: `${data.logradouro} - N°${data.numero} ${data.bairro} - ${data.cep}/${data.uf}`
                    }


                })

                .catch(e => {
                    console.error(e)
                });

        } catch (e) {

            let error = (e && e.detalhes) ? e.detalhes : "CNPJ inválido ou erro interno";
            throw new Error(error);
        }

    },

    validateNameCNPJ: async (data, ownerName) => {

    }
};
