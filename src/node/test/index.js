 
/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2022-04-01 15:44:21
 */

const http = require("https");
const fs = require("fs");
// const url = "https://www.zhoupu123.com/saas/commons/newsinfo/159";
const url = "https://www.npmjs.com/package/cheerio";
http.get(url, (res) => {
    let resData = "";
    res.on("data", function (chunk) {
        resData += chunk;
        // console.log(`|----    resData`, resData);
    });
    res.on("end", function () {
        console.log(resData);
        // fs.writeFile('index.html', resData);
        fs.writeFileSync('news.txt', resData, undefined);
    });
});
