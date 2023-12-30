const { join } = require('path');
const { access, unlink, constants } = require('fs/promises');



class PdfDownloader {
    async downloadPdf(req, res) {
        const outputPath = join(__dirname, '../temp/output.pdf');

        try {
            const { fileName } = req.query;

            if (fileName && outputPath) {
                await res.setHeader('Content-Type', 'application/pdf');
                await res.setHeader('Content-Disposition', `attachment; filename=${fileName}.pdf`);
                await res.sendFile(outputPath);
            } else {
                req.flash('Error', 'Parece que estamos enfrentando alguns problemas, tente novamente.');
                const message = req.flash('Error');
                return res.render('/contracts', { message });
            }
        } catch (error) {
            console.error('Erro ao enviar o arquivo PDF:', error);
            res.status(500).redirect('/error');
        } finally {
            try {
                await access(outputPath, constants.F_OK);
                await unlink(outputPath);
            } catch (err) {
                console.log(err); // Entender o que ocorre aqui, qual o fluxo corrido até chegar aqui e baseado nisso tomar uma decisão;
            }
        }
    }
}

module.exports = new PdfDownloader();

/*
TODO: 
    - Listar todos os erros que podem ocorrer neste controller
        Erro no req.query 
    
        
    - Tratar erro por erro com flash messages e redirecionamento nativo do express 
    - Tratar erros na manipulação de arquivos  


 */
