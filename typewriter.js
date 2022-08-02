const sentence = "hello there from lighthouse labs";
const f = function (s) {
  if (s) {
    setTimeout(() => {
      process.stdout.write(s[0]);
      f(s.substring(1))
    }, 500);
  } else {
    process.stdout.write('\n');
  }
}
f(sentence)