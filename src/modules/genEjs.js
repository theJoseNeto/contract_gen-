const fs = require('fs');
const path = require('path');

async function createEJSFile(internalEjsContent, fileName, dir) {
    const filePath = path.join(__dirname, `${dir}/${fileName}.ejs`);
    fs.writeFileSync(filePath, internalEjsContent, (err) => err ? console.error(err) : null);
}




module.exports = createEJSFile;
