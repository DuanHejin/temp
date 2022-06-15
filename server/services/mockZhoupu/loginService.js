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
const registSendMobileCode = (apiRoutes) => {
  const url = "/oauth/send-mobile-code";
  apiRoutes.post(url, (req, res) => {
    logReqParamsByUrl(url, req);

    // // error
    // res.json({
    //   code: 1,
    //   message: '获取验证码异常信息1'
    // });

    res.json({
      code: 0,
      message: ''
    });
  });
};

const registAppLogin = (apiRoutes) => {
  const url = "/oauth/app-login";
  apiRoutes.post(url, (req, res) => {
    logReqParamsByUrl(url, req);
    // 传输
    //   {
    //     "loginType": "smscode", // smscode验证码、password密码
    //     "mobile": "", // 手机号
    //     "smsCode": "", // 验证码，loginType为smscode时填写
    //     "password": "",  // 密码，loginType为password时填写
    //     "ncSessionId": "",  // 人机验证，可配置开启关闭
    //     "ncSig": "",
    //     "ncToken": ""
    //  }

    // // error
    // res.json({
    //   code: 1,
    //   message: '登录异常信息1'
    // });

    res.json({
      code: 0,
      data: {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidWlkIjo0MzkzNywidXNlcl9uYW1lIjoiMTgwMDAwMDAwMDAiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjEzNzI0ODQ2LCJhdXRoVXVpZCI6ImU2MGIzNTM2LWU3YmMtNGU3Yy04YjgwLWI1Y2FhZTM4N2Y0ZiIsImp0aSI6ImU1Nzc5N2Q4LWIwNDEtNDlhZS1iMDEzLWMyM2VmZWRlYzQ4MCIsImNsaWVudF9pZCI6ImF1dGhfY2xpZW50In0.WakP5_8QqCvKsdnZDDXAAb1MWE42qwVHqIQYFhj7fE4",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidWlkIjo0MzkzNywidXNlcl9uYW1lIjoiMTgwMDAwMDAwMDAiLCJzY29wZSI6WyJhbGwiXSwiYXRpIjoiZTU3Nzk3ZDgtYjA0MS00OWFlLWIwMTMtYzIzZWZlZGVjNDgwIiwiZXhwIjoxNjE2MzA5NjQ2LCJhdXRoVXVpZCI6ImU2MGIzNTM2LWU3YmMtNGU3Yy04YjgwLWI1Y2FhZTM4N2Y0ZiIsImp0aSI6IjJhZjUwZWE0LTkwNTktNDkzMy1hNGJiLWY4OTRmNThiYjcyYiIsImNsaWVudF9pZCI6ImF1dGhfY2xpZW50In0.-eFescRfzQCm2sdhhV2CzPzmUHbx8Ld9HrIpT3-OuBk",
        "expireIn": 7198,
        "buid": 43937,
        "authUuid": "e60b3536-e7bc-4e7c-8b80-b5caae387f4f",
        "tokenType": "bearer"
      },
      msg: "执行成功"
    });
  });
};

const registGetUserInfo = (apiRoutes) => {
  const url = "/oauth/user-info";
  apiRoutes.get(url, (req, res) => {
    logReqParamsByUrl(url, req);

    res.status(500).json({
      code: 100005,
      msg: "accessToken已失效"
    });

    // return;
    // res.json({
    //   code: 0,
    //   data: {
    //     "userInfoList": [{
    //       uid: 1000,
    //       cid: 10000107,
    //       cname: '内蒙古喜丫丫食品有限公司',
    //       roleList: [{
    //         code: 'SALESMAN', name: '业务员'
    //       }],
    //     }],
    //     "vitalsGrayVersion": "1.0.0",
    //   },
    //   msg: "执行成功"
    // });
  });
};

// interface
const registLoginService = (apiRoutes) => {
  registSendMobileCode(apiRoutes);
  registAppLogin(apiRoutes);
  registGetUserInfo(apiRoutes);
  console.log("registLoginService successfully!");
};

module.exports = registLoginService;
