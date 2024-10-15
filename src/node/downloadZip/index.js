// 使用axios下载zip文件。地址为https://mpss.ivwen.com/cdn/editor-text/v2.2.28.zip
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const downloadZip = async () => {
  const url = 'https://mpss.ivwen.com/cdn/editor-text/v2.2.28.zip';
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  }); // 将文件写入到本地
  const writer = fs.createWriteStream(path.resolve(__dirname, 'v2.2.28.zip'));
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  })
}

downloadZip().then(() => {
  console.log('下载完成')
})
