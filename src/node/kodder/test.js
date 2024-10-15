// 读取src/node/kodder/format-output/20240704_160738_uniqueResult.txt文件内容，并打印出来
const fs = require('fs');

fs.readFile('src/node/kodder/format-output/20240704_160738_uniqueResult.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})
