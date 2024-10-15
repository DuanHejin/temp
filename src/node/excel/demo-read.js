const Excel = require("exceljs");
const path = require("path");
const fs = require("fs");

const readExcel = async (filePath) => {
    // 使用exceljs加载工作簿
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filePath);
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

        // 打印去重后的数据
        console.log(uniqueColumnA);
    });
};

let fileName = "meipian.me_20240703_173353.xlsx";
// 要读取的Excel文件路径
let filePath = path.resolve(__dirname, "output", fileName);
readExcel(filePath);
