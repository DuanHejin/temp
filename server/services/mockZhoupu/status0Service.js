/*
 * @Description: login模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-15 14:06:37
 * @LastEditors: Please set LastEditors
 */

logReqParamsByUrl = (url, req) => {
    const { query, body } = req;
    console.log(url + " query :>> ", query);
    console.log(url + " body :>> ", body);
    console.log("");
};

// Dependency Injection
const registMockStatusZero = (apiRoutes) => {
    const url = "/saas/pro/stock-init/init";
    apiRoutes.post(url, (req, res) => {
        logReqParamsByUrl(url, req);
        
        res.sendStatus(0);
        // res.status(0).send('status 0 manually')

        // res.json({
        //     code: 0,
        //     message: "",
        // });
    });
};

// interface
const registStatus0Service = (apiRoutes) => {
    registMockStatusZero(apiRoutes);
    console.log("registStatus0Service successfully!");
};

module.exports = registStatus0Service;
