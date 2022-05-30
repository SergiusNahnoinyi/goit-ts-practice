// Задати правильні TS типи для класичних типів JS
var age;
age = 50;
var userName;
userName = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return a; };
callback = function (a) { return 100 + a; };
// Задати тип для змінної, в яку можна зберегти будь-яке значення
var anything;
anything = -20;
anything = 'Text';
anything = {};
// Виправити код зі змінною unknown, щоб можна було зберегти змінну з текстом
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// Зробити незмінний масив із суворо описаними типами
var person;
person = ['Max', 21];
// Описати умову для змінної enum, що відображає статус завантаження. Завантажується (LOADING) і завантажена (READY)
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var page, _a = void 0, Status = _a.load, LOADING = _a.LOADING;
if (page.load === Status.LOADING) {
    console.log('Status: ', Status.LOADING);
}
if (page.load === Status.READY) {
    console.log('Status: ', Status.READY);
}
// Зробити змінну, яка може приймати рядок або число
var union;
union = 'Text';
union = 10;
// Зробити змінну, яка може приймати тільки одне значення з двох 'enable' або 'disable'
var literal;
literal = 'disable';
// Вказати типи для наступних функцій
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
