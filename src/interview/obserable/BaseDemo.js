class Publisher {

  constructor() {
    this.obs = [];
  }

  addObserver(ob) {
    this.obs.push(ob);
  }

  removeObserver(ob) {
    this.obs.forEach((item, i) => {
      if (item === ob) {
        this.obs.splice(i, 1);
      }
    });
  }

  notify() {
    this.obs.forEach((ob) => {
      ob.update(this);
    });
  }
}

class Observer {

  update(publisher) {
    console.log('publisher :>> ', publisher);
  }
}

const ob1 = new Observer();
const ob2 = new Observer();

const pb = new Publisher;
pb.addObserver(ob1);
pb.addObserver(ob2);
pb.notify();
