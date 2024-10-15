// 读取format-output目录下的20240704_160738_uniqueResult.txt文件内容
const fs = require("fs/promises");
const path = require("path");
const { domainBucketMap } = require("./lib/domain-bucket-map");
const { writeToExcel } = require("../excel/create-excel-by-sheets");

const analyze = async (filePath) => {
    const fileContent = await fs.readFile(filePath, "utf8");
    const lines = fileContent.split("\n");

    let bucketUrlSet = new Set();
    let noBucketUrlSet = new Set();

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.startsWith("//")) {
            continue;
        }
        // 去除line开头的两个//
        let url = line.split("//")[1];

        let bucket = "";

        // 如果url中包含域名，则将域名对应的bucket赋值给bucket
        for (const domain of Object.keys(domainBucketMap)) {
            if (url.includes(domain)) {
                bucket = domainBucketMap[domain];
                continue;
            }
        }

        // 如果url中不包含users/，且不包含user/
        const reg = /(users|user)\/.+/;
        if (!reg.test(url)) {
            // 保留url中域名和第1个pathname部分
            url = url.split("/")[0] + "/" + url.split("/")[1];
        }

        // 取第一个/之后的所有内容
        const arr = url.split("/");
        arr.splice(0, 1, "");
        url = arr.join("/");

        const bucketUrlStr = `${bucket}_x_${url}`;

        if (bucket) {
            bucketUrlSet.add(bucketUrlStr);
        } else {
            noBucketUrlSet.add(bucketUrlStr);
        }
    }

    const transStrToArr = (str) => {
        const arr = str.split("_x_");
        return arr;
    };

    const columns = [
        { header: "bucket", key: "bucket", width: 20 },
        { header: "url", key: "url", width: 50 },
    ];
    const sheets = [];
    const sheet1 = {
        name: "bucketUrlList",
        columns,
        list: Array.from(bucketUrlSet).map(transStrToArr),
    };
    const sheet2 = {
        name: "noBucketUrlList",
        columns,
        list: Array.from(noBucketUrlSet).map(transStrToArr),
    };

    sheets.push(sheet1);
    sheets.push(sheet2);

    await writeToExcel("bucketUrlList", sheets);
};

let filePath = path.join(
    __dirname,
    "format-output",
    "20240704_160738_uniqueResult.txt"
);
analyze(filePath);
