//1 вариант - через массив
function calcVowelsCount(text) {
    let vowels = ['А', 'О', 'Е', 'И', 'Э', 'У', 'Ы', 'Ю', 'Я', 'Ё'];

    let count = 0;
    let textUpper = text.toUpperCase();

    for (let i = 0; i < textUpper.length; i++) {
        if (vowels.includes(textUpper[i])) {
            count++;
        }
    }
    return count;
}

//2 вариант - через хэш
function calcVowelsCount2(text) {
    let vowels = {
        'А': true, 'О': true, 'Е': true, 'И': true, 'Э': true,
        'У': true, 'Ы': true, 'Ю': true, 'Я': true, 'Ё': true,
    };

    let count = 0;
    let textUpper = text.toUpperCase();

    for (let i = 0; i < textUpper.length; i++) {
        if (textUpper[i] in vowels) {
            count++;
        }
    }
    return count;
}

let someText = prompt('Введите строку: ');

if (someText !== null) {
    let vowelsCount = calcVowelsCount(someText);
    console.log(`В строке "${someText}" русских гласных букв встретилось: ${vowelsCount}`);

    //проверка скорости работы calcVowelsCount (вариант с массивом)  
    console.time('time');
    for (let i = 0; i < 10000; i++) {
        calcVowelsCount(someText);
    }
    console.timeEnd('time');

    //проверка скорости работы calcVowelsCount2 (вариант с хэшем)
    console.time('time2');
    for (let i = 0; i < 10000; i++) {
        calcVowelsCount2(someText);
    }
    console.timeEnd('time2');
}