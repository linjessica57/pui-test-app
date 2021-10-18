/*** Object Constructors ***/
function Llama(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "A white llama on grass";
  this.image = "https://thumbnails.production.thenounproject.com/kLmmayNMXxuo3qGQaGkBmkDRZHk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/2E6CC0E3-1707-4183-A8F1-B71F2DB7C19F.jpg";
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "A cat on a bed";
  this.image = "https://thumbnails.production.thenounproject.com/E8toXTDPPAjKaOtoDEp_4PG3P6o=/fit-in/1000x1000/photos.production.thenounproject.com/photos/5CEED292-62EC-4764-9E40-810BF316085D.jpg";
}

function Buffalo(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "A small herd of buffalo";
  this.image = "https://thumbnails.production.thenounproject.com/H7IDigJUX-XqDK9dDvJ7YIhm6VE=/fit-in/1000x1000/photos.production.thenounproject.com/photos/7D7A987A-28ED-42F3-8668-F1CDDE52DBD1.jpg";
}

/*** Global Variables ***/
let animal = [new Llama(), new Cat(), new Buffalo()];
let nameArray = ["Sam", "Fuzz", "Rascal"];

function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
	let randomIndex = generateRandomIndex(3);
	return nameArray[randomIndex];
}

function generateRandomAge() {
	return generateRandomIndex(18);
}

function generateRandomAnimal() {
	let randomldx = generateRandomIndex(3);
	if (animal[randomldx] instanceof Llama)
		return new Llama(generateRandomName, generateRandomAge);
	if (animal[randomldx] instanceof Cat)
		return new Cat(generateRandomName, generateRandomAge);
	if (animal[randomldx] instanceof Buffalo)
		return new Buffalo(generateRandomName, generateRandomAge);
}

console.log(generateRandomName());
console.log(generateRandomAge());
console.log(generateRandomAnimal());