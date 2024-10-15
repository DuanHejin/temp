const axios = require("axios");
const { languages } = require("./lib/languages");
const { queryStr } = require("./lib/querystr");
const fs = require("fs/promises");
const path = require("path");
const { createExcelBySheets } = require("../excel/create-excel-by-sheets");

let cdnFolderList = [];

const getMatchedList = (lang, contents = "") => {
    const reg = new RegExp(
        `//[^\\s]{1,10}${lang}/(([\\w\\d]+/){1,2}|[\\w\\d]+..{1,10})`,
        "g"
    );
    const res = contents.match(reg);
    const set = new Set(res);
    const matchedList = Array.from(set);
    return matchedList;
};

const writeToExcel = async (workbookName, sheets) => {
    const options = {
        workbookName,
        sheets,
    };
    await createExcelBySheets(options);
};

const QUERY_CODES_URL = "https://kooder.meipian.cn/search/codes";

/**
 * 获取全部页数信息
 * @param {*} params
 * @returns
 */
const getTotalInfo = async (params) => {
    const totalInfoParams = {
        ...params,
        p: 1,
    };
    const {
        data: { total_pages, page_index, page_size },
    } = await axios.get(QUERY_CODES_URL, { params: totalInfoParams });
    return { total_pages, page_index, page_size };
};

/**
 * 按分片查询
 * @param {*} params
 */
const getInfoBySlice = async (slice = [], lang) => {
    const resAll = await Promise.all(slice);

    // let test = true
    // if (test) {
    //     return
    // }

    for (let i = 0; i < resAll.length; i++) {
        const res = resAll[i];
        const {
            data: { total_pages, page_index, page_size, objects },
        } = res;

        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            const {
                repository,
                name,
                location,
                url: fileUrl,
                contents,
            } = object;
            const { id: repoId, name: repoName, url: repoUrl } = repository;
            // 排除指定的文件
            const excluedFileList = ["package-lock.json", "Dockerfile"];
            if (excluedFileList.includes(name)) {
                continue;
            }
            // 排出指定的repository
            const excludeRepoList = ["svn", "wangdongyang", "chaijianxiang"];
            const isIgnoreRepo = excludeRepoList.some((key) =>
                repoUrl?.includes(key)
            );
            if (isIgnoreRepo) {
                continue;
            }

            const matchedList = getMatchedList(lang, contents);
            if (!matchedList.length) {
                continue;
            }
            cdnFolderList = cdnFolderList.concat(matchedList);
            // 去重
            cdnFolderList = Array.from(new Set(cdnFolderList));
        }
    }
};

const getInfo = async (params) => {
    const { total_pages, page_index, page_size } = await getTotalInfo(params);
    console.log(
        `|----     lang total_pages, page_index, page_size `,
        params.lang,
        total_pages,
        page_index,
        page_size
    );

    const mock = (params) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`|----    params`, params);
                resolve();
            }, 100);
        });
    };

    const all = new Array(total_pages).fill(0).map((_, index) => {
        const newParams = { ...params, p: 1 + index };
        // return mock({ params: newParams });
        return axios.get(QUERY_CODES_URL, { params: newParams });
    });

    // 分组查询，提高搜索效率
    // 将all按SIZE_PER_SLICE分组，生成多组promise对象
    const SIZE_PER_SLICE = 1;
    const slices = [];

    for (let i = 0; i < all.length; i += SIZE_PER_SLICE) {
        slices.push(all.slice(i, i + SIZE_PER_SLICE));
    }

    for (let i = 0; i < slices.length; i++) {
        const slice = slices[i];

        let LENGTH = slice.length;
        const logKey = `No.${i + 1}, ${LENGTH}_promiseall query`;
        console.time(logKey);
        await getInfoBySlice(slice, params.lang);
        console.timeEnd(logKey);
    }
};

const getCdnFolderByLangs = async (q = queryStr["meipian.me"]) => {
    const targetLangs = [
        languages.CSS,
        // languages.HTML,
        // languages.JSON,
        // languages.JSX,
        // languages.JavaScript,
        // languages.Sass,
        // languages.Vue,
        // languages.Java,
        // languages["Objective C"],
        // languages.Go,
        // languages.PHP,
    ];

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
        queryStr["meipian.me"],
        // queryStr["ivwen.com"],
        // queryStr["meip0.me"],
    ];
    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i];
        await getCdnFolderByLangs(domain);
    }
};

// getCdnFolderByLangs()

/**
 * @deprecated kooder不支持并发查询，直接使用write-json.js脚本
 */
getCdnFolderByDomain();
