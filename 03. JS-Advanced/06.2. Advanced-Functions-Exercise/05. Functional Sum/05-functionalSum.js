function add(n) {
  const inner = function (a) {
      console.log(`n:`, n);
      console.log(`a:`, a);
    n += a;
    return inner;
  };
  inner.toString = function () {
    return n;
  };

  return inner;
}

add(1);
console.log('...');
add(1)(6)(-3);
