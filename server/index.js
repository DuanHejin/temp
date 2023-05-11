/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-15 11:38:16
 * @LastEditors: 端和金 duanhejin@yozosoft.com
 */
const express = require('express');
const path = require('path');
const app = express();
const handleProduction = require('./utils/handleProduction');
const apiRoutes = express.Router();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// set static resource
app.use(express.static(path.resolve(__dirname, 'public')));
handleProduction(app, express, path);

app.use('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, WithCredentials');
  //允许凭证,解决session跨域丢失问题
  res.header('Access-Control-Allow-Credentials', 'true')
  next();
});

const registTempService = require('./services/temp/tempService');
registTempService(apiRoutes);
const registLoginService = require('./services/mockZhoupu/loginService');
registLoginService(apiRoutes);
const registFileService = require('./services/mockZhoupu/fileService');
registFileService(apiRoutes);
const registStatus0Service = require('./services/mockZhoupu/status0Service');
registStatus0Service(apiRoutes);
const registYozoFileService = require('./services/mockYozo/fileService');
registYozoFileService(apiRoutes);


// make sure regist services before 'app.use(apiRoutes)'
app.use(apiRoutes);

app.listen(3001, () => {
  console.log('server is running on port 3001')
});
