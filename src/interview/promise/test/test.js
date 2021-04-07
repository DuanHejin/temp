console.log(11);

// var p1 = new Promise(function (resolve, reject) {
//     console.log('tcsh');
//     // setTimeout(() => {
//     //     resolve('ok');
//     // }, 2000);
//     reject('fail')
// });



// console.log(p1)



// p1.then(function (result) {
//     console.log('成功', result);
//     // return result;
// },function(reason){
//     console.log('失败', reason);
// })

// p1.then(function (result) {
//     console.log('成功', result);
//     return result + 'okokok';
// }, null).then(function (result) {
//     console.log('成功1', result);
// }, null)


// p1.then(function (result) {
//     console.log('成功', result);
//     return new Promise((resolve,reject)=>{
//         reject('nonono');
//     })
// },function(fail){
//     console.log('失败：',fail)
// }).then(function (result) {
//     console.log('成功1', result);
// },function (fail) {
//     console.log('失败2', fail);
// }).



// p1.then(function (result) {
//     console.log('成功', result);
//     // return result;
// }).then(function (result) {
//     console.log('成功1', result);
// }).catch(function (err) {
//     console.log('失败', err);
// }); 



var query = function (interval) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (interval === 1000) reject('aaa'+interval);
            resolve(interval);
        }, interval);
    })
}

// console.log(333,query(4000))
// query(4000).then((res)=>{
//     console.log(11,res)
// },(err)=>{
//     console.log('00',err)
// })


Promise.all([query(4000), query(1000), query(2000)]).then(function (result) {
    console.log('all成功', result);
}, function (reason) {
    console.log('all失败', reason);
});

// Promise.allSettled([query(4000), query(1000), query(2000)]).then(function (result) {
//     console.log('all成功', result);
// }, function (reason) {
//     console.log('all失败', reason);
// });
console.log(2222);