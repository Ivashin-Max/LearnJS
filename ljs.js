// Решение задач с leetcode,codewars, подготовка к собеседованиям, от простейших и далее на усложнение
//----------------------------------------------------------------------------------------------------
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function compareInt() {
// 	let a = prompt('Число а:');
// 	let b = prompt('Число b:');
// 	if (a < b) {
// 		console.log(a);
// 	}
// 	else {
// 		console.log(b);
// 	}
// }
//----------------------------------------------------------------------------------------------------
//Функция возведения в степень
// function pow(x, n) {
// 	let result = x;

// 	for (let i = 1; i < n; i++) {
// 		result = result * x;
// 	}

// 	return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
// 	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
// 	alert(pow(x, n));
// }
//----------------------------------------------------------------------------------------------------
//Сложение значений в объекте
// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// }
// let sum = 0;
// for (const key in salaries) {
// 	const element = salaries[key];
// 	sum += element;
// };
// console.log(sum);
//----------------------------------------------------------------------------------------------------
//Cложение значений в массиве
// let arr = [];
// arr.push(11,21,10);
// console.log(arr);
// let b= arr.reduce((acc,num)=>acc+num)
// console.log(b);
//----------------------------------------------------------------------------------------------------
//Реализация калькулятора как объекта с методами
// let calculator = {
// 	read() {
// 		this.a = +prompt('a?');
// 		this.b = +prompt('b?');

// 	},
// 	sum() {
// 		let sum1 = this.a + this.b;
// 		console.log(sum1);
// 	},
// 	mul() { },
// };
// calculator.read();
// calculator.sum();
//----------------------------------------------------------------------------------------------------
//Суммирование элементов массива
// function sumInput() {
// 	let num = [];
// 	while (true) {
// 		let value = prompt('CHISLO?', 0);
// 		if (value === '' || value === null) break;
// 		else { num.push(+value) };
// 	}
// 	let sum = 0;
// 	for (let counter of num) {
// 		sum += counter;
// 	}
// 	console.log(sum);
// }
// sumInput();
//----------------------------------------------------------------------------------------------------
//Сортировка пузырьком(BubleSort)
// let count = 0;
// let arr = [1, -2, 3, 4, -9, 6, 8, 1,12,123,1,9,-5];
// function bubleSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[j] > array[j + 1]) {
// 				let temp = array[j]
// 				array[j] = array[j + 1]
// 				array[j + 1] = temp
// 			}
// 			count += 1
// 		}
// 	}
// 	return array
// }
// console.log('Исходный массив:' + arr);
// console.log('Отсортированный массив:' + bubleSort(arr))
// console.log('Количество операция для сортировки ' + count);
//----------------------------------------------------------------------------------------------------
//Палиндром 
// let pal = (word) => {
// 	let rewerseWord = word.split('').reverse().join('');
// 	rewerseWord === word ? console.log(`${rewerseWord} это палиндром слова ${word}`) : console.log('NEA');
// }
// pal('cqaaqc')
//----------------------------------------------------------------------------------------------------
//Чистый массив(без повторов) ES6 через сет
// let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8];
// let clearArr = new Set(arr);
// console.log(clearArr);
//----------------------------------------------------------------------------------------------------
//FizzBuzz  
// function fizzBuzz(n) {
// 	for (let i = 1; i < n; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) { console.log('fizzBuzz'); i++ };
// 		if (i % 3 === 0) { console.log('fizz'); i++ };
// 		if (i % 5 === 0) { console.log('buzz'); i++ };

// 		console.log(i);
// 	}
// }
// fizzBuzz(20)
//----------------------------------------------------------------------------------------------------
/* мин/макс числа в массиве */
// let numbers = [5, 6, 2, 3, 7, 55, -6];
// let max = Math.max.apply(null, numbers); /* Это эквивалентно Math.max(numbers[0], ...)
//                                         или Math.max(5, 6, ...) */
// let min = Math.min.apply(null, numbers);
// console.log(max);
// console.log(min);

//----------------------------------------------------------------------------------------------------
/*У вас есть строка. Ваша задача - перевернуть каждое слово в строке.
 "Welcome to this Javascript Guide!" должно стать
 "emocleW ot siht tpircsavaJ !ediuG".*/
// let firstString = 'Welcome to this Javascript Guide!'
// let reverseString = (string, separator) => { return string.split(separator).reverse().join(separator) };
// console.log(reverseString(firstString, ' '));
//----------------------------------------------------------------------------------------------------
//Анаграмма
// let q = 'анаграмма'
// let w = 'мама ранг а'
// let sort = (firstStr, scndStr) => {
// 	let a = firstStr.toLowerCase();
// 	let b = scndStr.toLowerCase();
// 	a = a.split(' ').join('').split('').sort().join('');
// 	b = b.split(' ').join('').split('').sort().join('');
// 	console.log(a);
// 	console.log(b);
// 	return a === b ? `Строка ${q} является анаграммой строке ${w}` : console.log('Не анаграмма');
// }
// console.log(sort(q, w));
//----------------------------------------------------------------------------------------------------
//Сравнение производительности с помощью DateNow
// function comparePerformance(fn) {
// 	let starTime = Date.now();
// 	console.log('Начальное время: ' + starTime);
// 	fn();
// 	let endTime = Date.now();
// 	console.log('Конечное время: ' + endTime);
// 	let comparedTime = endTime - starTime;
// 	console.log(`Разница во времени: ${comparedTime} мс`);
// }
//----------------------------------------------------------------------------------------------------
//Метод filter у массивов
// const arr = [];
// arr.push(1,2,3,4,5,6,7,8,9,10);
// console.log(arr);
// const b = arr.filter((i)=>i>3);
// console.log(b);