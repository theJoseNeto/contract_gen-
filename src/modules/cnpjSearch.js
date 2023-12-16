const consultar = require("consultar-cnpj");

module.exports = {

    search: async (cnpj) => {
        try {
            const empresa = await consultar(cnpj);
            const data = {
                dono: empresa.socios[0].nome,
                razao_social: empresa.razao_social,
                cmpj: empresa.estabelecimento.cnpj,
                nome_fantasia: empresa.estabelecimento.nome_fantasia,
                endereco: `${empresa.estabelecimento.tipo_logradouro} ${empresa.estabelecimento.logradouro} N° ${empresa.estabelecimento.numero} - ${empresa.estabelecimento.bairro} (${empresa.estabelecimento.cep})/${empresa.estabelecimento.estado.sigla}`
            }

            return data;

        } catch (error) {
            return error
            // TODO: Caso dê erro tratar o erro corretamente

        }

    }
};

