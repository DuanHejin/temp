// 使用axios检查url状态是否为404
const axios = require("axios");
const { urls } = require("./urls");

const checkUrlStatus = async (url) => {
  try {
    const response = await axios.get(url);
    return `${url} ${response.status}`
  } catch (error) {
    if (error.response) {
      // 请求已发出，服务器以状态码响应
      // 可以根据状态码做相应的处理
      return `${url} ${error.response.status}`
    }
  }
}

const check = async () => {
    const allPromise = Promise.all(urls.map(checkUrlStatus));
    allPromise.then((results) => {
    console.log(results);
    })
    // urls.forEach(async (url) => {
    // const status = await checkUrlStatus(url);
    // console.log(`${url} ${status}`);
}

check()


