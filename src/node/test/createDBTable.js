/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2022-04-29 16:05:20
 */

const { Sequelize } = require("sequelize");
// 建立连接时 传递数据库名 用户名 密码
const sequelize = new Sequelize(
    "zhangl_nodejs",
    "zhangl_nodejs",
    "SQ2ZBh0bV3q4tVky",
    {
        host: "192.168.100.63",
        port: "3306",
        dialect: "mysql",
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.error("Connect failed", err);
    });

const Project = sequelize.define(
    "t_news_dhj",
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    },
    {
        freezeTableName: true,
    }
);
sequelize.sync({ force: true });
// (async function () {
//     await Project.sync({ force: true });
// })();
