const n = 18;

function countSetBits(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j > 0; j = j >> 1) {
      if ((j & 1) == 1) {
        count++;
      }
    }
  }
  return console.log(count);
}

countSetBits(n);
