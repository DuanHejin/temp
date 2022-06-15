/*
 * @Description: javascript的sort()
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2022-06-15 13:53:46
 */

/**
 * 1.基本类型数组sort()时，比较函数中，默认将undefined元素移动至末尾。
 *  e.g.
 * @example
 * ```
 *  const baseArr = [2, 3, undefined, 1, undefined, 7, 6];
 *  baseArr.sort((a, b) => a - b); // [ 1, 2, 3, 6, 7, undefined, undefined ] 
 * ```
 *
 * 2.对象类型数组sort()时，比较函数中，对undefined的默认处理有问题。如果不手动指定先后顺序，将会出现意想不到的结果。
 * e.g.
 * @example
 * ```
 * const objArr = [
 *   { value: 2 },
 *   { value: 3 },
 *   { value: undefined },
 *   { value: 1 },
 *   { value: undefined },
 *   { value: 7 },
 *   { value: 6 },
 * ];
 * objArr.sort((a, b) => a.value - b.value); // [ { value: 2 }, { value: 3 }, { value: undefined }, { value: 1 }, { value: undefined }, { value: 6 }, { value: 7 } ] 
 * ```
 */
export const example = void 0;


const baseArr = [
    "689093 28.22135 高淳老街老蒋便利店2219",
    "6321 31.967334 枫彩园29栋华联生活超市2212",
    "774158 25.863474 木子百货商品店",
    "295429 34.607882 海鲜一号",
    "830 31.983306 周震的店",
    "undefined null 小霞测试商品",
    "1451530 22.767338 芙蓉旺盛便利店",
    "undefined null 福润雅居分店1",
    "undefined null 桥北一号店",
    "977 31.988329 奈飞三体周边店",
    "859 31.984081 老司机",
    "933 31.988183 1108",
    // '1820 31.965787 给你',
    // '867 31.98444 周震测试1',
    // '1424 31.971854 黄柠檬',
    // 'undefined null 测试客户',
    // '915 31.9875 缤瑞',
    // '74039 31.324006 高淳固城湖大闸蟹专卖店2218',
    // 'undefined null 周震（假装是于田）',
    // 'undefined null 突然',
    // '692692 28.180311 世纪联华超市',
    // '938 31.988179 新增客户验证',
    // '859 31.983926 章三卖部',
    // '23853 31.957089 结算总店',
    // '1081 31.990158 zwxtest2客户',
    // 'undefined null 先到期先出',
    // 'undefined null 后到期先出',
    // '858 31.98432 zwxtest客户2',
    // '320903 34.84404 zwx测试新',
    // 'undefined null 最长常常会穿那个号长虹村那会更好刚才那会更好椰果奶茶那个',
    // '857 31.984061 余杰的客户',
    // '857 31.984042 王二小卖部',
    // '929 31.988178 体验第三家客户',
    // '6666 31.956935 河定桥老蔡鸭血粉丝馆2211',
    // '937 31.988196 对账体验客户4',
    // 'undefined null 测试备注',
    // '959 31.988495 对账体验客户55555555',
    // 'undefined null 测测问题',
    // '1820 31.965788 世界上',
    // '19535 32.157484 罗森分店1',
    // 'undefined null 客户2',
    // '1170570 24.479737 桂林好又多123',
    // '7005 31.950371 黄艳艳超市',
    // '944 31.988188 平顶山',
    // '885 31.9843 白云边',
    // 'undefined null 测试0609',
    // '872 31.98435 0609新增客户',
    // '867 31.98433 灿烂烂测试',
    // 'undefined null 客户210809',
    // '925 31.98802 1234',
    // '746 31.984408 拘束',
];
const newArr = baseArr.map((item) => {
    const [distance] = item.split(" ");
    return distance !== "undefined"
        ? { distance: Number(distance) }
        : { distance: undefined };
});

const logArr = (tag, targetArr, ...rest) => {
    console.log(tag, targetArr.map((item) => item.distance).join(", "), rest);
};
logArr("newArr", newArr, `newArr.length`, newArr.length);

const arr = newArr;
let count = 0;
// arr.sort((a, b) => {
//     // logArr(`第${count}次循环之后`, arr, `开始第${++count}次循环`, a.distance, b.distance);
//     if (a.distance && b.distance) {
//         if (a.distance === b.distance) {
//             return 0;
//         } else {
//             return a.distance < b.distance ? -1 : 1;
//         }
//     }
//     if (!a.distance && !b.distance) {
//         return 0;
//     }
//     if (!a.distance) {
//         return -1;
//     }
//     if (!b.distance) {
//         return 1;
//     }
// });
arr.sort((a, b) => {
    logArr(``, [], `开始第${++count}次比较`, a.distance, b.distance);
    return a.distance ? (a.distance < b.distance ? -1 : 1) : -1;
});
logArr("arr", newArr);
