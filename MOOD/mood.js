function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    let colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

    let usedColors = {}; // хэш для использованных colors
    let count = 0; // кол-во использованных colors 

    console.log('цветов: ' + colorsCount);
    while (count < colorsCount) {
        let n = randomDiap(1, 7);
        let colorName = colors[n];

        if (!(colorName in usedColors)) {
            usedColors[colorName] = true;
            console.log(colorName);
            count++;
        }
    }
}

mood(3);