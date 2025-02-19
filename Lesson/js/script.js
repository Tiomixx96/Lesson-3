// --------------------------//
// --------------------------//
// області видимості
// --------------------------//
// --------------------------//

// const a = 5;

// if (true) {
//   const b = 10;
//   console.log(b);
// }

// console.log("Global scope", b);
// --------------------------//
// --------------------------//
// Цикли
// --------------------------//
// --------------------------//

// while

// let a = 0;

// while (a < 5) {
//   a++;
//   console.log(a);
// }

// let a = 0;

// while (a) {
//   console.log("a", a);
//   a--;
// }

// do while

// do {
//   console.log(a);
//   a++;
// } while (a < 5);

//for

// for (let a = 0; a < 3; a++) {
//   console.log(a);
// }

// break && continue

// let summ = 0;

// while (true) {
//   let value = +prompt("Enter the number");
//   if (!value) break;
//   summ += value;
// }

// console.log("Summ", summ);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// --------------------------//
// --------------------------//
// масиви
// --------------------------//
// --------------------------//

// let arr = ["apple", "pie", "crown"];
// console.log(arr[1]);

// arr[2] = "lemon";
// console.log(arr[2]);

// arr[3] = "cherry";
// console.log(arr);

// console.log(arr.length);

// push - добавляет элемент в конец массива
// pop - удаляет последний элемент
// Shift / unshift - работают с первым элементом

// arr.push("lemon");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("lemon");
// console.log(arr);

// Старый метод перебора массива
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Новый метод перебора (не даёт доступа к индексу)
// for (let item of arr) {
//   console.log(item);
// }

// Если нужен индекс то используем for in так как for of не даёт доступа к индексу
// for (let key in arr) {
//   console.log(key);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[1][1]);

// -------------------------------------------------------------------
// Массивы нельзя сравнивать друг с другом.
// Единственный вариант сравнения это перебор и сравнивать каждый элемент
// -------------------------------------------------------------------

// --------------------------//
// --------------------------//
// методи присвоєння
// --------------------------//
// --------------------------//

// Примитивы копируются по значению. Тоесть тут сделал бумажки - всем раздал, изменил 1 бумажку и у других не изменилось.
// -------------------------------------------------------------------

// let a = 5;
// let b = 5;
// console.log(a);

// a = 10;

// console.log(a);
// console.log(b);
// -------------------------------------------------------------------

// Сложные типы копируются по ссылке. Тоесть создал бумажку, положил её в комнату и раздал всем ключ от комнаты. Когда сделал изменения в бумажке - все увидели изменение в комнате.
// -------------------------------------------------------------------

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);
// console.log(arr);
// console.log(arr2);
// -------------------------------------------------------------------

// --------------------------//
// --------------------------//
// методи масиву
// --------------------------//
// --------------------------//

// Тут остается empty если удалить через Delete. Поэтому так делать нельзя.
// -------------------------------------------------------------------
// let arr = ["a", "b", "c", "d", "f"];
// delete arr[2];
// console.log(arr);
// -------------------------------------------------------------------

// let arr = ["a", "b", "c", "d", "f"];
// Для удаления элементов используем splice(с какого элемента, сколько элементов)
// -------------------------------------------------------------------
// arr.splice(1, 3);

// console.log(arr);
// -------------------------------------------------------------------

// Slice(с какого индекса, сколько єлементов) метод который копирует массив с определенных элементов и возвращает новый массив.
// -------------------------------------------------------------------
// console.log(arr.slice(1, 3));
// -------------------------------------------------------------------

// concat(что-то или другйо массив) - создает новый массив и добавляет те данные которые передаются туда

// -------------------------------------------------------------------
// let a = [1, 2, 3];
// console.log(arr.concat(a));
// -------------------------------------------------------------------

// Поиск по массиву
// -------------------------------------------------------------------

// indexOf(что ищем, с какого элемента) - вернет индекс
// lastIndexOf - тоже самое только с другой стороны ищет
// console.log(arr.indexOf("c"));

// includes() - возвращает true / false
// console.log(arr.includes("123"));

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomato" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// Ищем в данном случае по айдишнику как в примере. Но минус метода в том, что если он что-то находит он заканчивается. Для поиска одного элемента подходит
// console.log(fruits.find((item) => item.id === 1));

// Если хотим найти больше 1 то используем filter

// console.log(fruits.filter((item) => item.id < 2));

// map - один из самых распространненых методов

// let result = fruits.map((item) => item.name.length);
// console.log(result);

// split(по какому способу разделять) - может из строки к примеру сделать массив и передать туда элементы, но нужно указать разделительный знак по которому отбирать

// let names = "Оля, Юля, Аня, Петя";

// let arr = names.split(", ");
// console.log(arr);

// // Join наоборот делает из массива строки разделяя элементы знаком
// let newString = arr.join(". ");
// console.log(newString);

// Если нам нужно обчислить какое-то одно значение на основе всего массива , например сумму всего массива.
// Есть метод reduce(accumulator - результат исполнения функции, item, index, array) (НЕ ОБЯЗАТЕЛЬНО index, array)

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((summ, item) => summ + item);

// console.log(red);

// let arr = [23, 22, 100];

// let summ = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(summ);
