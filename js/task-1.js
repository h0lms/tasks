const string = "Привет! Как дела?";

const vowels = ['а', 'е', 'у', 'ы', 'о', 'я','ё', 'и', 'э', 'ю'];

const getVowels = stringFilter => {
  let extractedVowels = "";

  for (let i = 0; i < stringFilter.length; i++){
    const currenLetter = stringFilter[i].toLowerCase();

    if (vowels.includes(currenLetter)) {
      extractedVowels += currenLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));

// Ещё вариант:
// 
// let string = "Привет! Как дела?";
// string = string.toLowerCase(string);
// let vowels = ['а', 'е', 'у', 'ы', 'о', 'я','ё', 'и', 'э', 'ю'];
// let letter = '';
// let getVowels = '';
// for(let i = 0; i < string.length; i++){
//     for(let j = 0; j < vowels.length; j++){
//         letter = string.charAt(i);
//         if(letter === vowels[j]){
//           getVowels += letter;
//         }
//     }
// }
// console.log(getVowels);