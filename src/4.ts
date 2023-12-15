

// Класс Key представляет ключ с определенной подписью.
class Key {
    private signature: string; // Приватное свойство для хранения подписи ключа
  
    constructor() {

      this.signature = Math.random().toString(36).substring(7);
    }
  
    public getSignature() {
      return this.signature; 
    }
  }
  
  class Person {

    private key: Key; 
  
    constructor(key: Key) {
      this.key = key; 
    }
  
    public getKey() {
      return this.key; 
    }
  }
  
  abstract class House {
    private tenants: Person[] = []; 


    protected door: boolean = false; 
    protected key: Key; и
  
    public abstract openDoor(key: Key): void; 
  
    public comeIn(person: Person) {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person is coming in.');
      } else {
        console.log('Door is closed.');
      }
    }
  }
  
  class MyHouse extends House {
    constructor(key: Key) {
      super();
      this.key = key; 
    }
  
    public openDoor(key: Key) {
      if (this.key.getSignature() === key.getSignature()) {
        this.door = true;
        console.log('Door is opened.');
      } else {
        console.log('Invalid key.');
      }
    }
  }
  
  const key = new Key(); 
  const house = new MyHouse(key); 
  const person = new Person(key); 
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  