var useWord = prompt('Введите слово');
var useNumber = prompt('Введите цыфру');
var useSing = prompt('Введите символ');


var wordNumb = useWord.length;
function calcSing() {
    var sings = '';
    for (i = 0; i < useNumber - wordNumb; i++) {
        var sings = sings + useSing;
    }
    return sings;
}
 var sings = calcSing();




function padString(wordNumb, useNumber, sings) {
    if (wordNumb <= useNumber) {
        return useWord;
    } else {
        return useWord + calcSing();
    }
}
console.log(padString());