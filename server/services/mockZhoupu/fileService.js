/*
 * @Description: login模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-15 14:06:37
 * @LastEditors: duanhejin
 */

logReqParamsByUrl = (url, req) => {
  const { query, body } = req;
  console.log(url + ' query :>> ', query);
  console.log(url + ' body :>> ', body);
  console.log('');
};

// Dependency Injection
const registFileUpload = (apiRoutes) => {
  const url = "/file/upload";
  apiRoutes.post(url, (req, res) => {
    logReqParamsByUrl(url, req);

    res.json({
      code: 0,
      message: ''
    });
  });
};

// interface
const registFileService = (apiRoutes) => {
  registFileUpload(apiRoutes);
  console.log("registFileService successfully!");
};

module.exports = registFileService;
