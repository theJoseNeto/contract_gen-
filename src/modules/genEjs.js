const fs = require('fs');
const path = require('path');

async function createEJSFile(internalEjsContent, fileName) {

    const filePath = path.join(__dirname, `../views/created_contracts/${fileName}.ejs`);


    fs.writeFileSync(filePath, internalEjsContent, (err) => err ? console.error(err) : null);

}



module.exports = createEJSFile;
