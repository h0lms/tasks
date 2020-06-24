var string = "Привет! Как дела?";
string = string.toLowerCase(string);
var vowels = ['а', 'е', 'у', 'ы', 'о', 'я','ё', 'и', 'э', 'ю'];
var letter = '';
var getVowels = '';
for(var i = 0; i < string.length; i++){
    for(var j = 0; j < vowels.length; j++){
        letter = string.charAt(i);
        if(letter === vowels[j]){
          getVowels += letter;
        }
    }
}
console.log(getVowels);