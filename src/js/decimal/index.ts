/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-12-22 14:16:01
 */
import { Decimal as D } from "decimal.js";

const getValidNum = (val) => {
    if (!val || isNaN(val)) {
        return 0;
    }
    return val;
}


const add = (left: D.Value, right: D.Value) => {
  console.log(`left, right`, left, right);
  (left = getValidNum(left)), (right = getValidNum(right));
  console.log(`left, right`, left, right);
  return new D(left).plus(right).toDP(4).toNumber();
};

const leftStr = "0.0000100001";

console.log(`add`, add(leftStr, 0x11));
