const { Router } = require("express");

/*
 * @Description: login模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-15 14:06:37
 * @LastEditors: 端和金 duanhejin@yozosoft.com
 */
const ctx = '';

let count = 0;

logReqParamsByUrl = (url, req) => {
    const { query, body } = req;
    console.log(url + ' query :>> ', query);
    console.log(url + ' body :>> ', body);
    console.log('');
  };
  
  // Dependency Injection
  const registCloseFile = (/** @type {Router} */apiRoutes) => {
    const url = ctx + "/api/weboffice/close";
    apiRoutes.post(url, (req, res) => {
      count++;
      logReqParamsByUrl(url, req);

      console.log('count :>> ', count);
      // res.sendStatus(500)
      // if (count < 3) {
        // res.sendStatus(500)
        res.json({
          code: 10000,
          message: '业务异常啊啊啊啊啊啊啊啊啊'
        })
        return;
      // }
  
      res.json({
        code: 0,
        message: 'success111'
      });
    });
  };
  
  // interface
  const registFileService = (apiRoutes) => {
    registCloseFile(apiRoutes);
    console.log("registFileService successfully!");
  };
  
  module.exports = registFileService;
  