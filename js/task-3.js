const path = "/users/download/index.html"

const isHtml = path => {
  const requiredExt = ".html";
  const patchExt = path.slice(-5);

  return patchExt == requiredExt
}

console.log(isHtml(path));

// Ещё вариант:
// const path = ft("/users/download/index.html");

// function ft(path) {
//   let exp = path.slice(-5);
//   if (exp == '.html') {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(path);

// или:
// let path = "/users/download/index.html"
// let exp = path.slice(-5)
// if (exp = '.html') {
//   console.log(true);
// } else {
//   console.log(false);
// }