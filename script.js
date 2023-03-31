const fibonacci = () => {
  // When you use Browser to run
  // let userdata = parseInt(prompt("How much fibonacci series"));
  //when you run in Nodejs
  let userdata = 15;
  let fibo = [0, 1];
  for (let x = 0; x < userdata; x++) {
    let sum = fibo[x] + fibo[x + 1];
    if (fibo.length < userdata) {
      fibo.push(sum);
    }
  }
  fibo.map((value) => {
    console.log(value);
  });
};

fibonacci();
