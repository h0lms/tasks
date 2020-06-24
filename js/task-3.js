const path = ft("/users/download/index.html");

function ft(path) {
  let exp = path.slice(-5);
  if (exp == '.html') {
    return true;
  } else {
    return false;
  }
}

console.log(path);

// 

// let path = "/users/download/index.html"
// let exp = path.slice(-5)
// if (exp = '.html') {
//   console.log(true);
// } else {
//   console.log(false);
// }

//