const puppeteer = require('puppeteer')
const PAGE_WIDTH = '160mm', PAGE_HEIGHT = '234.5mm'
console.log('|---- puppeteer.executablePath(): ', puppeteer.executablePath())

let purl = '', pwidth = 300, pheight = 400, poutput = ''

// purl = 'https://www.meipian.cn/55v3dvqc'
purl = 'http://127.0.0.1:5502/src/node/puppeteer/index.html'

const url = purl || '',
    width = pwidth ? `${pwidth}mm` : PAGE_WIDTH,
    height = pheight ? `${pheight}mm` : PAGE_HEIGHT,
    outputPath = poutput || './output.pdf'

;(async () => {
    try{
        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox'], timeout: 500000})
        const page = await browser.newPage()
        await page.goto(url, {waitUntil: 'networkidle0', timeout: 500000})
        // await sleep(5000)
        await page.pdf({
            path: outputPath,
            scale: 1,
            printBackground: true,
            width: width,
            height: height,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            },
            '-webkit-print-color-adjust': 'exact'
        })
        await page.close()
        await browser.close()
        console.log('success')
    }catch(e){
        console.log(e)
    }
})()

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
