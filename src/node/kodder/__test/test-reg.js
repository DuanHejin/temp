
const arr = [
    "//ss2.meipian.me/12345.png",
    "//ss2.meipian.me/app/",
    "//ss2.meipian.me/app/12345.png",
    "//ss2.meipian.me/app/img",
    "//ss2.meipian.me/app/img/",
    "//ss2.meipian.me/app/img/12345.png",
    "//ss2.meipian.me/app/img/other",
    "//ss2.meipian.me/app/img/other/",
    "//ss2.meipian.me/app/img/other/xxxx.png",
    '//ss2.meipian.me/75495004476/36cf8e3d8f092094ecb5fe777b8479d5","author":"兜美丽人丽丽","visit_count":"2","praise_count":"0","comment_count":"0","cover_img_url":"report/',
    "//ss2.meipian.me/theme/v2/img/defaulthead.png?imageMogr2/blur/50x50'}'https://ss2.meipian.me/theme/v2/img/defaulthead.png?imageMogr2/blur/"
];

const testReg = (params = []) => {
    params.forEach((str) => {
        let matched = [];
        let reg;
        // reg = new RegExp(`\/\/.+\.meipian.me\/[^\s]+`, "g");
        // reg = new RegExp(`.meipian.me\/(.*\/){1,2}`, "g");
        reg = /\/\/[^\s]{1,10}meipian.me\/(([\w\d]+\/){1,2}|[\w\d]+\..{1,10})/g
        const regex = new RegExp(`//[^\\s]{1,10}meipian.me/(([\\w\\d]+/){1,2}|[\\w\\d]+..{1,10})`, 'g')
        matched = str.match(reg);
        console.log(`|----    matched`, matched);
    });
};

testReg(arr)
