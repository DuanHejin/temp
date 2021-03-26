const p1 = {
  name: 'Tom',
  age: 5,
  hobbies: ['Eating', 'Playing'],
};

const proxyObj = (obj) => {
  return new Proxy(obj, {
    get(obj, key) {
      if (key === 'name') {
        return 'name is ' + obj[key];
      }
      return obj[key];
    },
    set(obj, key, val) {
      if (key === 'hobbies') {
        obj[key] = [...obj[key], val];
        return;
      }
      obj[key] = val;
    }
  });
}

const newP1 = proxyObj(p1);
console.log('newP1.name :>> ', newP1.name);

newP1.hobbies = 'Playing with Jerry';
console.log('newP1.hobbies :>> ', newP1.hobbies);

newP1.age = 10;
console.log('newP1.age :>> ', newP1.age);