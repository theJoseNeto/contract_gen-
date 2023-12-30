module.exports = {
    
    selectContractType: (req, res) => {
        const { opcao } = req.query;
        res.redirect(`/${opcao}`);
    }
}

/*
TODO: 
    - Tratar erros de redirecionamento 
    - Pesquisar se há métodos de abusar desta rota e corrigir possívies falhas de segurança 
*/