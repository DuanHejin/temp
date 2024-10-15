const axios = require("axios");


const httpExportPdf = async ({ mask_id, user_id } = {}) => {
    const params = {
        mask_id,
        user_id,
    };
    const URL = "http://127.0.0.1:41000/pdf/article";
    const { data } = await axios.post(URL, params);
    console.log(`|----    data`, data);
};

// const reqParams = {
//     mask_id: "e5o2zzk5",
//     user_id: "71121808",
// }
const reqParams = {
    mask_id: "8odo3udw", // 测试ios会员海量图片
    user_id: "30404399", // 如何取一个拉风的昵称
};

const COUNT = 10;

// for (let i = 0; i < COUNT; i++) {
//     httpExportPdf(reqParams);
// }

const httpScreenshotBadge = async ({ target, text } = {}) => {
    const params = {
        target,
        text,
    };
    const URL = "http://127.0.0.1:41000/screenhot/badge";
    const { data } = await axios.post(URL, params);
    console.log(`|----    data`, data);
};
const reqScreenshotParams = {
    text: "如何取一个拉风的昵称",
};
httpScreenshotBadge(reqScreenshotParams);

// for (let i = 0; i < COUNT; i++) {
//     httpScreenshotBadge(reqScreenshotParams);
// }
