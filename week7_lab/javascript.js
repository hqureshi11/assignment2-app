var animals = [new MyQuokka(), new MySloth(), new MySteveBuscemi(), new MyFox()];
var names = ["Gina", "Terry", "Farmer Joe", "Nadia", "Riva", "JKwon"]

function MyQuokka(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Quokka";
    this.image = "quokka.png";
}

function MySloth(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Sloth";
    this.image = "sloth.jpg";
}

function MySteveBuscemi(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Steve Buscemi";
    this.image = "steve.jpg";
}

function MyFox(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Fox";
    this.image = "fox.png";
}

function generateRandomIndex(maxIndex){
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName(){
    var randomIndex = generateRandomIndex(names.length);
    return randomIndex;
}

function generateRandomAge(){
    return generateRandomIndex(10);
}

function generateRandomAnimal(){
    var randomldx = generateRandomIndex(animals.length);
    var randomAnimal = animals[randomldx];
    if (randomAnimal instanceof MyFox){
        return new MyFox(generateRandomName(),generateRandomAge());
    }
    if (randomAnimal instanceof MyQuokka){
        return new MyQuokka(generateRandomName(),generateRandomAge());
    }
    if (randomAnimal instanceof MySteveBuscemi){
        return new MySteveBuscemi(generateRandomName(),generateRandomAge());
    }
    if (randomAnimal instanceof MySloth){
        return new MySloth(generateRandomName(),generateRandomAge());
    }
}

$(document).ready(function() {
      var animal = generateRandomAnimal();
      $("#title").text(animal.name + " is " animal.age + " years old! ");
      $("#pictures").attr("src", animal.image);

});