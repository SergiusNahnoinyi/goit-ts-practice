// Задати правильні TS типи для класичних типів JS
let age: number;
age = 50;

let userName: string;
userName = 'Max';

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number) => a;
callback = (a) => { return 100 + a };

// Задати тип для змінної, в яку можна зберегти будь-яке значення
let anything: any;

anything = -20;
anything = 'Text';
anything = {};

// Виправити код зі змінною unknown, щоб можна було зберегти змінну з текстом
let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

// Зробити незмінний масив із суворо описаними типами
let person: [string, number];

person = ['Max', 21];

// Описати умову для змінної enum, що відображає статус завантаження. Завантажується (LOADING) і завантажена (READY)
enum Status { LOADING, READY };

let page {
  load: Status.LOADING
}

if (page.load === Status.LOADING) {
  console.log('Status: ', Status.LOADING);
}

if (page.load === Status.READY) {
  console.log('Status: ', Status.READY);
}

// Зробити змінну, яка може приймати рядок або число
let union: string | number;

union = 'Text';
union = 10;

// Зробити змінну, яка може приймати тільки одне значення з двох 'enable' або 'disable'
let literal: 'enable' | 'disable';

literal = 'disable';

// Вказати типи для наступних функцій
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Створити свій тип данних на основі отриманих
type Page =  {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}