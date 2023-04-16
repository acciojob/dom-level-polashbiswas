//your JS code here. If required.
let levelElement = document.getElementById('level');
let level = 0;
let currentNode = levelElement;
console.log(currentNode.parentNode);
while (currentNode.parentNode) {
  level++;
  currentNode = currentNode.parentNode;
}

console.log('The level of the element is: ' + level);
