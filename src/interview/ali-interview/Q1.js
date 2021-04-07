/**
 * 排序后输出 id
 * before 2，意思是排在 id 2 的前面，after 5，意识是排在 id 5 的前面
 * first 意思是排数组最前面，last 意思是排在数组最后面，可能有多个 first 和 last
 * @param {Array<Object>} list
 * @returns {Array<string>}
 * @example
 * [
 *  { id: '1', before: '2' },
 *  { id: '2', before: '3' },
 *  { id: '3', before: '6' },
 *  { id: '5', first: true },
 *  { id: '6', last: true },
 *  { id: '7', before: '5' },
 *  { id: '8', after: '6' },
 * ];
 * 输出为
 * ['7', '5', '1', '2', '3', '6', '8'];
 */
function sort(list) {
  let target = list.find(row => row.first).id;
  const result = [target];
  while (result.length !== list.length) {
    for (let row of list) {
      if (row.before === target) {
        result.unshift(row.id);
        target = row.id;
        break;
      } else if (row.after === target) {
        result.push(row.id);
        target = row.id;
        break;
      }
    }
  }

  return result;
}

const arr = [
  { id: '1', before: '2' },
  { id: '2', before: '3' },
  { id: '3', before: '6' },
  { id: '5', first: true },
  { id: '6', last: true },
  { id: '7', before: '5' },
  { id: '8', after: '6' },
];
const res = sort(arr);
console.log('res :>> ', res);