const Excel = require('exceljs');
const path = require('path');
const fs = require('fs');

async function createExcel() {
  // 创建一个新的工作簿
  let workbook = new Excel.Workbook();

  // 添加一个工作表
  let sheet = workbook.addWorksheet('My Sheet');

  // 添加表头
  sheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'dob', width: 15 },
  ];

  // 添加数据行
  sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
  sheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });
  // 写入文件
  const filePath = path.resolve(__dirname, 'output', 'MyExcel.xlsx')
  await workbook.xlsx.writeFile(filePath);
}

// 运行函数
createExcel();
