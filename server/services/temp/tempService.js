/*
 * @Description: temp模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-05-15 14:06:37
 * @LastEditors: duanhejin
 */

let count = 0;
// Dependency Injection
const registGetUserInfo = (apiRoutes) => {
  const url = "/get/user/info";
  apiRoutes.get(url, (req, res) => {
    const searchTerm = req.query["searchTerm"];
    let time = 0;
    while (time < 400) {
      time = Math.random() * 1000;
    }

    setTimeout(() => {
      res.json({
        id: 1,
        name: "user-test",
        city: 10,
        count: count++,
        searchTerm,
      });
    }, time);
  });
};

const registGetCity = (apiRoutes) => {
  const url = "/get/city";
  apiRoutes.get(url, (req, res) => {
    const city = req.query["city"];
    console.log("city :>> ", city);
    res.json({ id: 10, name: "city-test" });
  });
};

const registDelayRes = (apiRoutes) => {
  const url = "/delayRes";
  apiRoutes.get(url, (req, res) => {
    const index = req.query["index"];
    // const time = index == 2 ? 2000 : 500;
    const time = 100;
    setTimeout(() => {
      res.json({ timestamp: Date.now() });
    }, time);
  });
};

// interface
const registTempService = (apiRoutes) => {
  registGetUserInfo(apiRoutes);
  registGetCity(apiRoutes);
  registDelayRes(apiRoutes);
  console.log("registTempService successfully!");
};

module.exports = registTempService;
