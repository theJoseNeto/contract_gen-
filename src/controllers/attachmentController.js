
const { join } = require("path")
const { access, unlink, constants } = require("fs")


module.exports = {
    download_pdf: async (req, res) => {
        const outputPath = join(__dirname, "../temp/output.pdf")

        try {

            const { fileName } = req.query;
            await res.setHeader('Content-Type', 'application/pdf');
            await res.setHeader('Content-Disposition', `attachment; filename=${fileName}.pdf`);
            await res.sendFile(outputPath);

        } catch (error) {

            // TODO: Tratar erros corretamente.

        } finally {


            access(outputPath, constants.F_OK, (err) => {
                if (err) {
                    console.error(`O arquivo ${outputPath} não existe.`);
                    return;
                }

                unlink(outputPath, (err) => {
                    if (err) {
                        console.error('Erro ao deletar o arquivo:', err);
                        return;
                    }
                    console.log(`O arquivo ${outputPath} foi deletado com sucesso.`);
                });
            });

        }

    }
}