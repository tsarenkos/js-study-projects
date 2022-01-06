function treeSum(mas) {
    if (Array.isArray(mas)) {
        let result = 0;

        for (let i = 0; i < mas.length; i++) {
            let value = Array.isArray(mas[i]) ? treeSum(mas[i]) : mas[i];

            if (typeof (value) === "number" && !Number.isNaN(value)) {
                result += value;
            }
        }

        return result;
    }
}

let testMas = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

alert(`Сумма всех числовых элементов тестового массива равна ${treeSum(testMas)}.`);