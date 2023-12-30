const ppt = require("puppeteer");

module.exports = async route => {
        const outputPath = 'src/temp/output.pdf'
    const browser = await ppt.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(route);
    await page.pdf({ path: outputPath, format: 'A4', });
    await browser.close();
}


