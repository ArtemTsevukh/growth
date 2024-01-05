const v8 = require('node:v8');
const fs = require('node:fs').promises;

// bad

class Person {
    constructor(fileName, name, surname) {
      Object.defineProperty(this, 'fileName', {
        enumerable: false,
        writable: true,
        value: fileName,
      });
      this.name = name;
      this.surname = surname;
    }
  
    save() {
      const v8Data = v8.serialize(this);
      return fs.writeFile(this.fileName, v8Data);
    }
  
    async read() {
      const v8Data = await fs.readFile(this.fileName);
      const object = v8.deserialize(v8Data);
      Object.assign(this, object);
    }
  }
  
  // Usage
  
  (async () => {
    const person1 = new Person('./data/100.v8', 'Rene', 'Descartes');
    await person1.save();
  
    const person2 = new Person('./data/100.v8');
    await person2.read();
    console.dir(person2);
  })();

  // good


class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  }
  
  class Storage {
    constructor(path = '.') {
      this.path = path;
    }
  
    save(id, object) {
      const v8Data = v8.serialize(object);
      const v8File = `${this.path}/${id}.v8`;
      return fs.writeFile(v8File, v8Data);
    }
  
    async read(id) {
      const v8File = `${this.path}/${id}.v8`;
      const v8Data = await fs.readFile(v8File);
      const { name, surname } = v8.deserialize(v8Data);
      return new Person(name, surname);
    }
  }
  
  // Usage
  
  (async () => {
    const storage = new Storage('./data');
  
    const person1 = new Person('Rene', 'Descartes');
    await storage.save(100, person1);
  
    const person2 = await storage.read(100);
    console.dir(person2);
  })();