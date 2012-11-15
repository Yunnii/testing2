/*global alert: true*/

/**
 * Сортирует массив "пузырьком"
 * @param {array} array - массив, который необходимо отсортировать 
 */
function sortMassive(array) {
    "use strict";

    var l = array.length, j, i, temp;
    for (j = 0; j < l; j += 1) {
        for (i = 0; i < l; i += 1) {
            if (array[j] < array[i]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
}

/**
 *Сравнивает массивы - отсортированный пузырьком  и простой функцией sort
 */
function compareArray(real, expected) {
    "use strict";

    if (real.length !== expected.length) {
        alert("Error not equal length");
        return;
    }

    var i, l = real.length;
    for (i = 0; i < l; i += 1) {
        if (real[i] !== expected[i]) {
            alert("Error!");
            return;
        }
    }
    alert("OK");
}

function sortfunction(a, b) {
    "use strict";

    return a - b;
}

function test1() {
    "use strict";

    var realArray = [2, 6, 4, 7, 1, 9, 3, 5, 8], expectedArray = [2, 6, 4, 7, 1, 9, 3, 5, 8];

    sortMassive(realArray);
    expectedArray.sort(sortfunction);

    compareArray(realArray, expectedArray);
}

function test2() {
    "use strict";

    var realArray = [2, 6, 4, 7, 1, 10, 13, 15, 8], expectedArray = [1, 2, 4, 6, 7, 8, 10, 13, 15];

    sortMassive(realArray);
    expectedArray.sort(sortfunction);

    compareArray(realArray, expectedArray);
}

function runTestsSort() {
    "use strict";

    test1();
    test2();
}




