let img1 = document.getElementById('product1');
let img2 = document.getElementById('product2');
let img3 = document.getElementById('product3');
let img4 = document.getElementById('product4');

let colorselected = false;

let box1 = document.getElementById('product1selector');

// if (colorselected == false) {
// 	box1.addEventListener('click', product1pic);
// 	colorselected = true;
// } else if (colorselected == true) {
// 	box1.removeEventListener('click', product1pic);
// 	box1.addEventListener('click', deselect);
// 	colorselected = false;
// }

box1.addEventListener('click', changeClass);

// if (colorselected == false) {
// 	box1.addEventListener('click', product1pic);
// 	box1.addEventListener('click', changeClass);
// 	colorselected = true;
// } else if (colorselected == true) {
// 	//box1.removeEventListener('click', product1pic);
// 	//box1.addEventListener('click', changeClass);
// 	colorselected = false;
// }

function changeClass() {
	box1.classList.toggle("navbarText-selected");
}

console.log(colorselected);

function product1pic() {
	box1.style.border = "4px solid black";
	img2.style.display = "none";
	img3.style.display = "none";
	img4.style.display = "none";
}

function deselect() {
	box1.style.border = "4px solid transparent";
	img2.style.display = "block";
	img3.style.display = "block";
	img4.style.display = "block";
	// colorselected = false;
	// console.log(colorselected);
	// return colorselected;
}



function Product(name, color, fill, price, inCart) {
	this.name = name;
	this.color = color;
	this.fill = fill;
	this.price = price;
	this.inCart = inCart;
}

let carts = document.querySelectorAll('.addCart');
let products = [new Product()];

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers();
	})
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers) {
		document.querySelector('.navbarText span').textContent = productNumbers;
	}
}

function cartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.navbarText span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.navbarText span').textContent = 1;
	}
}

onLoadCartNumbers();
