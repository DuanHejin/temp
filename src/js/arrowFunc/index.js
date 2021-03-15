const showName = (name) => {
  console.log('this :>> ', this);
  console.log('name :>> ', name);
}

const a = 'a';

showName('test');


const obj = {
  name: 'obj'
};

showName.call(obj, 'aaa')
