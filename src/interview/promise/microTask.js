const queryInventoryDelGood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('p1 is error');
            resolve(1);
        }, 500);
    });
};

const queryHandleInvenSearchGood = () => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        // throw new Error('zzz');
        reject('p2 is error');
        // }, 500);
    });
};

const callQueryInventoryDelGood = async callback => {
    try {
        const res1 = await queryInventoryDelGood();
        console.log(`|----    res1`, res1);
        callback && callback();
        return Promise.resolve(res1);
    } catch (error) {
        console.log(`|----    testP1 error`, error);
    }
};

// const test = () => {
//     try {
//         callQueryInventoryDelGood(async () => {
//             const res2 = await queryHandleInvenSearchGood();
//             console.log(`|----    res2`, res2);
//         });
//         // .then(resP1 => {
//         //     console.log(`|----    resP1`, resP1);
//         // });
//     } catch (error) {
//         console.log(`|----    error`, error);
//     }
// };

// test();

const test2 = async () => {
    try {
        const resP1 = await callQueryInventoryDelGood();
        console.log(`|----    Date.now()`, Date.now());
        console.log(`|----    resP1`, resP1);
        const res2 = await queryHandleInvenSearchGood();
        console.log(`|----    res2`, res2);
    } catch (error) {
        console.log(`|----    error`, error);
    }
};

test2();
