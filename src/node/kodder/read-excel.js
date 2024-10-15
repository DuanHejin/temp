const Excel = require("exceljs");
const path = require("path");
const fs = require("fs/promises");
const dayjs = require('dayjs');

const readExcel = async (filePath) => {
    // 使用exceljs加载工作簿
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filePath);

    const allColummnA = [];
    // 遍历所有sheets
    workbook.eachSheet((sheet, sheetId) => {
        console.log(`Sheet ${sheetId} - ${sheet.name}`);

        // 读取A列的数据
        const columnA = [];
        sheet
            .getColumn("A")
            .eachCell({ includeEmpty: true }, (cell, number) => {
                columnA.push(cell.value);
            });
        // 处理A列的数据，例如去重
        const uniqueColumnA = Array.from(new Set(columnA));

        allColummnA.push(...uniqueColumnA);
    });

    const uniqueAllColumnA = Array.from(new Set(allColummnA));
    return uniqueAllColumnA;
};

let time;
const readAllExcel = async () => {
    if (!time) {
        time = dayjs().format("YYYYMMDD_HHmmss");
    }

    const dir = path.resolve(__dirname, "../excel/output");
    const fileNames = await fs.readdir(dir);
    const xlsxNames = fileNames.filter((fileName) =>
        fileName.endsWith(".xlsx")
    );
    let result = []
    for (let i = 0; i < xlsxNames.length; i++) {
        const xlsxName = xlsxNames[i];
        const filePath = path.resolve(dir, xlsxName);
        const uniquePaths = await readExcel(filePath);
        result = result.concat(uniquePaths)
    }

    const uniqueResult = Array.from(new Set(result))
    let tplStr = uniqueResult.join("\n");
    const formatOutputDir = path.resolve(
        __dirname,
        "./format-output",
        `${time}_uniqueResult.txt`
    );
    await fs.writeFile(formatOutputDir, tplStr);
};

readAllExcel();
