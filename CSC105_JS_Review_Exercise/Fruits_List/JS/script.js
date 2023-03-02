var fruits = ["Banana", "Mango", "Apple", "Pear"];

function loadFruits() {
  var listFruits = "";
  for (let index = 0; index < fruits.length; index++) {
    listFruits += "<li>" + fruits[index] + "</li>";
  }
  // <li>Banana</li><li>Mango</li><li>Apple</li><li>Pear</li>
  document.getElementById("fruits").innerHTML = listFruits;
}

function myFunction() {
  // Input from user
  var fruit = prompt("What is your favorite fruit? ");

  // Validate
  if (fruit.length == 0) {
    // Stop
    return;
  } 
  else {
    fruits.push(fruit);

    // Rerender
    loadFruits();
  }
}