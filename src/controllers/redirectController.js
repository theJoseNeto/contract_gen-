module.exports = {
    selectContractType: (req, res) => {
        const { opcao } = req.query;
        res.redirect(`/${opcao}`);
    }
}