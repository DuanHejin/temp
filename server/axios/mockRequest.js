/*
 * @Author: 端和金 duanhejin@yozosoft.com
 * @Date: 2022-12-23 10:39:47
 * @LastEditors: 端和金 duanhejin@yozosoft.com
 * @LastEditTime: 2022-12-23 13:57:21
 * @FilePath: \temp\server\axios\mockRequest.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const axios = require("axios");

const BASE_URL = "http://127.0.0.1:3001";

const testPost = async () => {
    const url = "/api/weboffice/close";
    const config = {
        baseURL: BASE_URL,
        url,
        method: "post",
        data: {
            name: 'test'
        },
        params: {
            queryKey: '111'
        }
    };
    const { status, data, code } = await axios.request(config);
    console.log("status, data :>> ", status, data);
};

testPost();
