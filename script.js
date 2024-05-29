//ЗАВДАННЯ 1
//Заданий одновимірний масив А, кількість елементів якого задана користувачем.
//Побудувати масив В, кожний елемент якого обчислюється за формулою :
//bі = max*ai де - max це максимальний елемент масиву А. Надрукувати вхідний
//та вихідний масиви.
//Виконати сортування методом вставки

// Функція для обробки вхідного масиву і виконання необхідних операцій
function processArray() {
    // Отримуємо введені користувачем дані
    const input = document.getElementById('arrayInput').value;
    const arrayA = input.split(',').map(Number);
    const maxElement = Math.max(...arrayA);

  
    const arrayB = arrayA.map(element => element * maxElement);
    document.getElementById('originalArray').innerText = arrayA.join(', ');

    document.getElementById('modifiedArray').innerText = arrayB.join(', ');

    // Сортуємо змінений масив за зменшенням за допомогою сортування вставками
    insertionSortDescending(arrayB);

    document.getElementById('sortedArray').innerText = arrayB.join(', ');
}

function insertionSortDescending(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] < key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
}


//ЗАВДАННЯ 2    
//КАЛЬКУЛЯТОР
// Змінні для збереження операндів і операції
let currentInput = '';
let operator = '';
let operand1 = 0;
let operand2 = 0;

// Функція для додавання цифр до дисплея
function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Функція для встановлення операції
function setOperation(op) {
    if (currentInput !== '') {
        operand1 = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}

// Функція для обчислення результату
function calculate() {
    if (currentInput !== '') {
        operand2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            case '%':
                result = operand1 % operand2;
                break;
            case '^':
                result = Math.pow(operand1, operand2);
                break;
        }

        updateDisplay(result);
        currentInput = result.toString();
        operator = '';
        operand1 = 0;
        operand2 = 0;
    }
}

// Функція для обчислення квадратного кореня
function sqrt() {
    if (currentInput !== '') {
        let result = Math.sqrt(parseFloat(currentInput));
        updateDisplay(result);
        currentInput = result.toString();
    }
}

// Функція для очищення дисплея
function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = 0;
    operand2 = 0;
    updateDisplay(0);
}

// Функція для оновлення дисплея
function updateDisplay(value) {
    document.getElementById('display').value = value;
}
