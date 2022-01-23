//1 вариант - через forEach
function countVowelsFor(str) {
    let vowels = ['а', 'о', 'е', 'и', 'э', 'у', 'ы', 'ю', 'я', 'ё'];

    let count = 0; //кол-во встреченных гласных букв 
    str.toLowerCase().split('').forEach(v => {
        if (vowels.includes(v))
            count++;
    });

    return count;
}

//2 вариант - через filter
function countVowelsFilter(str) {
    let vowels = ['а', 'о', 'е', 'и', 'э', 'у', 'ы', 'ю', 'я', 'ё'];

    return str.toLowerCase().split('').filter(v => vowels.includes(v)).length;
}

//3 вариант - через reduce
function countVowelsRed(str) {
    let vowels = ['а', 'о', 'е', 'и', 'э', 'у', 'ы', 'ю', 'я', 'ё'];

    return str.toLowerCase().split('').reduce((r, v) => {
        let value = vowels.includes(v) ? ++r : r;
        return value;
    }, 0);
}

(function () {
    let someText = prompt('Введите строку: ');

    if (someText !== null) {
        let vowelsCount = countVowelsFor(someText);
        console.log(`Вариант - через forEach:
    В строке: "${someText}"
    русских гласных букв встретилось: ${vowelsCount}\n`);

        vowelsCount = countVowelsFilter(someText);
        console.log(`Вариант - через filter:
    В строке: "${someText}"
    русских гласных букв встретилось: ${vowelsCount}\n`);

        vowelsCount = countVowelsRed(someText);
        console.log(`Вариант - через reduce:
    В строке: "${someText}"
    русских гласных букв встретилось: ${vowelsCount}`);
    }
})();