const Excel = require('exceljs');
const path = require('path');
const dayjs = require('dayjs');


let time
async function createExcelBySheets(options = {}) {
    const { workbookName = 'test', sheets } = options
  // 创建一个新的工作簿
  let workbook = new Excel.Workbook();

  for (let i = 0; i < sheets.length; i++) {
    const sheet = sheets[i];
    const { name = `Sheet_${i}`, columns, list = [] } = sheet

    const wSheet = workbook.addWorksheet(name)
    wSheet.columns = columns || [ { header: 'path', key: 'path', width: 150 }]
    const rows = list.map((item) => {
        if (Array.isArray(item)) {
            return [...item]

        } else {
            return [item]
        }
    })
    wSheet.addRows(rows)
  }

  if (!time) {
    time = dayjs().format('YYYYMMDD_HHmmss')
  }
  // 写入文件
  const filePath = path.resolve(__dirname, 'output', `${workbookName}_${time}.xlsx`)
  workbook.xlsx.writeFile(filePath)
}

exports.createExcelBySheets = createExcelBySheets


const writeToExcel = async (workbookName, sheets) => {
    const options = {
        workbookName,
        sheets,
    };
    await createExcelBySheets(options);
};
exports.writeToExcel = writeToExcel;
