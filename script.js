function cook() {
  let product = 'lime';
  console.log('Cook!', product);
}

const random = function() {
  console.log(Math.floor(Math.random() * 10));
}

cook();
product = 'apple';
cook();
product = 'tangerine';
cook();
random();
random();
