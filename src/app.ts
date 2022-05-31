// ---------- Завдання ------------

// Побудувати будинок, в який може зайти лише власник з ключами

// ---------- Рішення ------------

// Створюємо об'єкт Key:
// * додаємо приватну властивість signature.
// * під час створення об'єкта генеруємо випадкове число та зберігаємо його у signature.
// * метод getSignature повертає випадкове число з signature.
class Key {
  private signature: number;

  constructor () {
    this.signature = Math.random();
  }

  getSignature (): number {
    return this.signature;
  }
}

// Створюємо об'єкт Person:
// * конструктор приймає приватний ключ класу Key і зберігає його як key.
// * метод getKey повертає key.
class Person {
  constructor(private key: Key) { }
  
  getKey (): Key {
    return this.key;
  }
}

// Створємо абстрактний клас House з наступною логікою:
// * властивість door може бути закрита або відкрита.
// * властивість key - об'єкт класу Key.
// * конструктор приймає аргумент класу Key і зберігає його як key.
// * метод comeIn додає об'єкт класу Person у властивість tenants і це спрацьовує, якщо door відкрита.
// * абстрактний метод openDoor приймає аргумент класу Key.
abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor (protected key:Key) {}

  comeIn (person: Person):void {
    if (!this.door) {
      throw new Error('Door is close');
    }

    this.tenants.push(person);
    console.log('Person inside');
  }

  abstract openDoor (key:Key): boolean;
}

// Cтворюємо class MyHouse, що наслідує House:
// * створюємо метод openDoor.
// * оскільки він приймає ключ, то звіряємо збережений ключ.
// * якщо key дорівнює ключу з аргументу, то відкриваємо двері.
class MyHouse extends House {
  openDoor (key:Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }
    return this.door = true;
  }
}

// Створюємо ключ:
const key = new Key();

// Створюємо будинок і власника:
const house = new MyHouse(key);
const person = new Person(key);

// Відкриваємо двері, якщо ключ підходить:
house.openDoor(person.getKey());

// Власник потрапляє всередину:
house.comeIn(person);