// 1 Example - if we take the last element and take previous, in console we will have 'third' 'second' 'second'

'use strict';

class List {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(data) {
    const node = { list: this, data, prev: null, next: null };
    node.prev = this.last;
    if (this.length === 0) this.first = node;
    else this.last.next = node;
    this.last = node;
    this.length++;
    return node;
  }

  pop() {
    if (this.length === 0) return null;
    const node = this.last;
    this.last = node.prev;
    node.list = null;
    node.prev = null;
    node.next = null;
    this.length--;
    return node.data;
  }
}

// Usage

const list = new List();
list.push({ name: 'first' });
list.push({ name: 'second' });
list.push({ name: 'third' });

list.last.prev.prev = list.last.prev;

console.dir(list.pop());
console.dir(list.pop());
console.dir(list.pop());

// 2 Purchase && product - information experts, on the two levels out class responsible only for his lines || elements
// and they may be changed independently of each other

class Product {
    constructor(name, price) {
      this.name = name;
      this.productPrice = price;
    }
  
    get price() {
      return this.productPrice;
    }
  }
  
  class Purchase {
    constructor(name, ...collection) {
      this.name = name;
      this.collection = collection;
    }
  
    get price() {
      let price = 0;
      for (const item of this.collection) {
        price += item.price;
      }
      return price;
    }
  }
  
  // Usage
  
  const p1 = new Product('Laptop', 1500);
  const p2 = new Product('Mouse', 25);
  const p3 = new Product('Keyboard', 100);
  const p4 = new Product('HDMI cable', 10);
  const electronics = new Purchase('Electronics', p1, p2, p3, p4);
  
  const p5 = new Product('Bag', 50);
  const p6 = new Product('Mouse pad', 5);
  const textile = new Purchase('Textile', p5, p6);
  
  const purchase = new Purchase('Work kit', electronics, textile);
  
  console.dir(purchase, { depth: null });
  console.log(`Total is ${purchase.price}`);