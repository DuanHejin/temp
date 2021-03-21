class Publisher {
  constructor() {
    this.task = {};
    this.observers = [];
  }

  getTask() {
    return this.task;
  }

  setTask(task) {
    this.task = task;
    this.notify();
  }

  addObserver(ob) {
    this.observers.push(ob);
  }

  removeObserver(ob) {
    this.observers.forEach((row, i) => {
      if (row === ob) {
        this.observers.splice(i, 1);
      }
    });
  }

  notify() {
    this.observers.forEach((ob) => {
      ob.update(this);
    })
  }
}

class Observer {
  constructor() {
    this.task = {};
  }

  update(publisher) {
    this.task = publisher.getTask();
    this.work();
  }

  work() {
    console.log('开始工作');
    console.log('this.task :>> ', this.task);
  }
}

const ob1 = new Observer();
const ob2 = new Observer;

const pb = new Publisher;
pb.addObserver(ob1);
pb.addObserver(ob2);

const task = { value: 'coding...' };
pb.setTask(task);