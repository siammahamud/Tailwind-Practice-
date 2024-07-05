const countvowel = (str) => {
    const vowels = "AaEeIiOoUu";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  };
  const ans = countvowel("tomay Ami ChiNI nah abar bodhoy chini ");
  console.log(ans);
  