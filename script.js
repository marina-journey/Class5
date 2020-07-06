const product = 'tangerine';

function cook(product = 'lime' ) {
  console.log('Cook!', product);  
}

const random = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function sum (a = 0, b = 0) {
  return a + b + random(a, b);
}

console.log(random(0, 10));
console.log(sum(2, 10));


const pow = function (n, p) {
  const initialNumber = n;
  if (p === 0) return 1;
  for (let i = 1; i < n; i++) {
    n *=initialNumber;
}
return n;
}

