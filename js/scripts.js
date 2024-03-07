console.log( `====== Class exercise ======` );

// 1. Create a simple function that can reverse the contents of a sentence, word, phrase.
console.log( `\n1. Reverse function` );

let input1 = "A sentence to be reverse."
function reverse(sentence){

	// let array = sentence.split('');
	// let output = "";

	// // console.log('array.length: '+array.length);
	// // console.log(array[25]);
	
	// for ( let i=0; i<=(array.length-1); i++) {
	// 	output += array[array.length-1-i];
	// }

	// return output;

	return sentence.split('').reverse().join('');
}
console.log(input1);
console.log(reverse(input1));


// 2. Create a function that can return the circumference and area of a circle, when provided with a diameter value.

console.log( `\n2. Circumference and area of a circle` );

let input2 = 5;
function circumference(diameter) {
	// C=2πr
	return Math.PI * diameter;
}
console.log('The circumference of ' + input2 + ' is ' + circumference(input2));


// 3. Write a program that checks if a given number is prime or not.
console.log( `\n3. Prime number check` );

let input3 = 7;
let input3a = 4;

function checkPrimeNum(number) {
	for ( let i=2; i<number; i++) {
		
		let remainder = number % i;
		// console.log(remainder);

		if (remainder == 0) {
			return false;
		}
	}
	return true;
}
console.log(input3 + ' is a prime number? ' + checkPrimeNum(input3));
console.log(input3a + ' is a prime number? ' + checkPrimeNum(input3a));


// 4. Create a function that will accept a date or year and calculate if it falls on a Leap Year.

console.log( `\n4. Leap year check` );

let input4 = 2023;
let input4a = 2024;

function checkLeapYear(year){

	let remainder = year % 4;

	if (remainder == 0) {
		return true;
	} else {
		return false;
	}
}
console.log(input4 + ' is a leap year? ' + checkLeapYear(input4));
console.log(input4a + ' is a leap year? ' + checkLeapYear(input4a));


// 5. Create a function that checks a string or sentence and returns true if that parameter is a palindrome, (the string is the same forward as it is backward) . eg. kayak, racecar, madam, tenet, etc.

console.log( `\n5. Palindrome check` );

let input5 = "tenet"
let input5a = "tenets"

function checkPalindrome(word){

	let output = word.split('').reverse().join('');
	
	if (output == word){
		return true;
	} else {
		return false;
	}
}
console.log(input5 + ' is a palindrome? ' + checkPalindrome(input5));
console.log(input5a + ' is a palindrome? ' + checkPalindrome(input5a));


// 6. Build validation for a form and show a modal window with validation error messages when found. Then build another using inline validation. Basically check the value of an input and show the validation error in a dynamically created element on the page itself.

const form =  document.getElementById('searchForm');

form.addEventListener('submit', function(e){
   
	e.preventDefault();
    console.log(e);

	const inp1 = form.elements.searchBox1;
    if (inp1.value == '') {
        alert('box 1 no input');
    }

    const inp2 = form.elements.searchBox2;
	const er_el = document.getElementsByClassName('error')[0];
    if (inp2.value == '') {
		er_el.innerHTML = 'no input';
	} else {
		er_el.innerHTML = '';
	}

})

// 7. Object exercise: create 2 objects: ShoppingCart and Product and add properties and methods to create product and price and add to the cart. Then create a cart method to calculate total value and number of products in the cart. Use the constructor or class method.
console.log( `\n7. Object ecercise` );

class Product {
    // define properties: name, price
    // define methods: show price and name

	constructor(name = 'Name', price = 0) {
		this.productName = name;
		this.price = price;
	}
	showPriceAndName() {
		return this.productName + ' is $' + this.price
	}
}

const product1 = new Product('Apple', 10);
const product2 = new Product('Pineapple', 15);

console.log(product1.showPriceAndName());
console.log(product2.showPriceAndName());

class ShoppingCart {
    // define properties: products, total, count
    // define methods" addToCart, calcTotal, calcCount

	constructor(products = []) {
		this.products = products;
	}
	totalPrice(){
		let totalPrice = 0;
		for (let item in this.products ){
			totalPrice += this.products[item].price;
		}
		return totalPrice;
	}
	totalCount(){
		return this.products.length;
	}
	itemList(){
		let list = '';
		for (let item in this.products ){
			list += '-' + this.products[item].productName + '\n';
		}
		return list;
	}
	viewCart(){
		return 'Items: \n' + this.itemList() + 'Total Count: ' + this.totalCount() + '\nTotal Price: ' + this.totalPrice()
	}
	addToCart(newItem){
		this.products.push(newItem);
	}
}

const cart1 = new ShoppingCart([product1]);
console.log('View Cart 1\n' + cart1.viewCart());

const cart2 = new ShoppingCart([product1,product2]);
console.log('View Cart 2\n' + cart2.viewCart());

cart1.addToCart(product1);
cart1.addToCart(product2);
console.log('View Cart 1(after adding products)\n' + cart1.viewCart());


// 8. Use a form and DOM and form event listener to update the AI/Chatbot object created in class 4 assignment. Use basic validation to make sure a question is actually asked before submitting/processing.

const bot =  document.getElementById('catBotForm');

bot.addEventListener('submit', function(e){
   
	e.preventDefault();
    // console.log(e);

	const inp = bot.elements.ask;
    if (inp.value != '') {

		// console.log(inp.value);
		// const ans = document.getElementsByClassName('answer')[0];
		// ans.innerHTML = catBot.answer(inp.value);

		let bot = document.getElementById('bot')

		let insertQuestion = `<div class="question">${inp.value}</div>`;
		bot.insertAdjacentHTML('beforeend', insertQuestion)

		let insertAns = `<div class="answer">${catBot.answer(inp.value)}</div>`;
		bot.insertAdjacentHTML('beforeend', insertAns)

    }
})

const catBot = {

	database: [
		{
			keywords: ['name', 'appellation', 'called'],
			answer: "My cat is called SUSU.",
		},
		{
			keywords: ['SUSU', 'meaning'],
			answer: "In Chinese, SUSU means crispy cake.",
		},
		{
			keywords: ['age', 'old'],
			answer: "He is about 5 years old.",
		},
		{
			keywords: ['gender', 'boy', 'girl'],
			answer: "He is a boy.",
		},
		{
			keywords: ['weight', 'heavy'],
			answer: "He is currently 7kg! A heavy boy.",
		}
	],

    answer: function(question){

		// console.log(question);

        for (let pair in this.database) {
			// console.log(pair);

			for (let keyword in this.database[pair].keywords) {

			// console.log(this.database[pair].keywords[keyword]);

				let regEx = new RegExp(this.database[pair].keywords[keyword], "i");
				if ( question.match(regEx) ) { 
					return catBot.database[pair].answer;
					// console.log("answer something")
					// console.log(catBot.database[pair].answer)
				}

			}
        }
        return ("Sorry, please ask something else.");
    }
}
