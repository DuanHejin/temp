/**
 * 将数组转换成树状结构
 * @param {Array} arr
 * @returns {Object}
 * @example
 * [
 *   { id: '1', name: 'i1' },
 *   { id: '2', name: 'i2', parentId: '1' },
 *   { id: '4', name: 'i4', parentId: '3' },
 *   { id: '3', name: 'i3', parentId: '2' },
 *   { id: '5', name: 'i5', parentId: '3' },
 * ]
 * 转换后
 * {
 *   id: '1',
 *   name: 'i1',
 *   children: [
 *     { id: '2', name: 'i2', parentId: '1', children: [...] },
 *   ]
 * }
 */
function convert2Tree(arr) {
  const root = arr.find(row => !row.parentId);
  let result   = root;
  
  const findChild = (arr, parentId, result) => {
    let childs = arr.filter(c => c.parentId === parentId);
    if (!!childs.length) {
      result.children = childs;
      for(let child of childs) {
        findChild(arr, child.id, child);
      }
    }
  }
  
  findChild(arr, root.id, result);
  
  return result;
}