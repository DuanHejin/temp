const axios = require("axios");
const { languages } = require("./lib/languages");
const { queryStr } = require("./lib/querystr");
const { createExcelBySheets } = require("../excel/create-excel-by-sheets");

let cdnFolderList = [];

const getMatchedList = (params, contents = "") => {
    // const reg = /\/\/[^\s]{1,10}meipian.me\/(([\w\d]+\/){1,2}|[\w\d]+\..{1,10})/g
    // const reg = new RegExp(
    //     `//[^\\s]{1,10}${params.q}/(([\\w\\d]+/){1,2}|[\\w\\d]+..{1,10})`,
    //     "g"
    // );

    // 只查询指定的path
    const includePathList = [
        "ebook",
        "grab",
        "lifetime_90d",
        "mina",
        "music",
        "outer",
        "print_list",
        "print",
        "qq",
        "user"
    ];
    const includePathReg = includePathList.join('|')
    const reg = new RegExp(
        `//[^\\s]{1,10}${params.q}/(${includePathReg})/[^\\s]*[\\w\\d]+\.[\\w\\d]{1,10}`,
        "g"
    );
    const res = contents.match(reg);
    const set = new Set(res);

    // console.log(`|----    res`, res);
    const matchedList = Array.from(set).filter((str) => {
        return includePathList.some(path => str.includes(`${path}/`));
    })

    return matchedList;
};

const writeToExcel = async (workbookName, sheets) => {
    const options = {
        workbookName,
        sheets,
    };
    await createExcelBySheets(options);
};

const getInfo = async (params) => {
    const url = "https://kooder.meipian.cn/search/codes";
    const {
        data: { total_pages, page_index, page_size, objects },
    } = await axios.get(url, { params });
    console.log(
        `|----     lang total_pages, page_index, page_size `,
        params.lang,
        total_pages,
        page_index,
        page_size
    );
    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const { repository, name, location, url: fileUrl, contents } = object;
        const { id: repoId, name: repoName, url: repoUrl } = repository;
        // 排除指定的文件
        if (["package-lock.json", "Dockerfile"].includes(name)) {
            continue;
        }
        // 排出指定的repository
        const isIgnoreRepo = ["svn", "wangdongyang", "chaijianxiang"].some((key) => repoUrl?.includes(key))
        if (isIgnoreRepo) {
            continue;
        }

        const matchedList = getMatchedList(params, contents);
        if (!matchedList.length) {
            continue;
        }
        cdnFolderList = cdnFolderList.concat(matchedList);
        // 去重
        cdnFolderList = Array.from(new Set(cdnFolderList));

    }

    // 递归
    if (total_pages && page_index && page_index < total_pages) {
        params.p = params.p + 1;
        await getInfo(params);
    }

};

const getCdnFolderByLangs = async (q = queryStr["meipian.me"]) => {
    const targetLangs = [
        languages.CSS,
        languages.HTML,
        languages.JSON,
        languages.JSX,
        languages.JavaScript,
        languages.Sass,
        languages.Vue,
        languages.Java,
        languages["Objective C"],
        languages.Go,
        languages.PHP,
    ];
    // const targetLangs = [languages.JSON]

    const sheets = [];

    for (let i = 0; i < targetLangs.length; i++) {
        const lang = targetLangs[i];
        const params = {
            q: q,
            p: 1,
            lang: lang,
        };
        cdnFolderList = [];
        await getInfo(params);

        const sheet = {
            name: params.lang,
            list: cdnFolderList,
        };
        sheets.push(sheet);
    }

    await writeToExcel(q, sheets);
};

const getCdnFolderByDomain = async () => {
    const domains = [
        // queryStr["meipian.me"],
        // queryStr["ivwen.com"],
        queryStr["meip0.me"],
    ];
    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i];
        await getCdnFolderByLangs(domain);
    }
};

// getCdnFolderByLangs()

getCdnFolderByDomain();
