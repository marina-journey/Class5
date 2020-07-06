const product = 'tangerine';

function cook() {
  const product = 'lime';
  (function abc() {
    const product = 'qiwi';
    console.log('Cook!', product);  
  })();
  console.log('Cook!', product);
}

const random = function() {
  console.log(Math.floor(Math.random() * 10));
}

cook();
