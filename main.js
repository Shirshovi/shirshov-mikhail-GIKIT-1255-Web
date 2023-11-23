let name = "Mikhail";
const age = 19
let logic = true;
console.log("->name-", name)
name = "Alex";
console.log("->name-", name)

console.log('->name=', name, age, logic);
name = "Alex";
// age=19
logic = false

//alert('Hi');
let apple = {
  colour: "red",
  colour: "green",
  taste: "sweet",

}

console.log('->start=', apple);

let apple2 = apple
let AppleTaste = apple.taste
apple2.taste = "sour"
console.log('->apple=', AppleTaste, apple.taste);

let fruits = ['apple', 'orange', 'lemon', 'grape'];

console.log('->fruits=', fruits, fruits.taste);
console.log('-> fruits =', fruits);
console.log('-> fruits 2 =', fruits[0]);

for (let index = 0; index < fruits.length; index++) {
  OutputfruitOnscreen(index);
}

function OutputfruitOnscreen(index) {
  const fruit = fruits[index];
  console.log('-> fruit= ', fruit.length);
  const node = document.createElement('div');
  const text = "Fruit in basket: " + fruit;
  node.innerText = text
  document.body.appendChild(node);
}



