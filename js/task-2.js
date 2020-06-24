const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

let workersBest = workers.filter(el => {
  return el.salary > 1000;
}
);

for (let i = 0; i < workersBest.length; i++) {
  console.log(workersBest[i].name);
}