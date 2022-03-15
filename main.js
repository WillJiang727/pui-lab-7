/*** Object Constructors ***/
function Octopus(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Our eight legged buddy";
  this.image = "octopus.png";
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Our favorite animal";
  this.image = "cat.png";
}

function Hamster(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Our buddy that has an everlasting munchy";
  this.image = "hamster.png";
}



/*** Functions ***/
function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  let randomIdx = generateRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  return generateRandomIndex(10)
}

function generateRandomAnimal() {
    let randomIdx = generateRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof Octopus)
    {
        return new Octopus(generateRandomName(),generateRandomAge());
    }

    else if (randomAnimal instanceof Cat)
    {
        return new Cat(generateRandomName(),generateRandomAge());
    }

    else if (randomAnimal instanceof Hamster)
    {
    return new Hamster(generateRandomName(),generateRandomAge());
    }

}


/*** Document Load ****/
function onLoad() {
  let animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);
}

/*** Global Variables ***/
let animals = [new Octopus(), new Cat(), new Hamster()];
let names = ["Tom", "Marshmallow", "Moe", "Coco", "Ophelia", "Oscar", "Bella", "Russell", "Harper", "Basil"];
