/*Write a function to permit user enter the values for elements of array*/
function enterArray(n, m) {
    var arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(m).fill(0)
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            arr[i][j] = parseInt(prompt(`Enter value for element [${i}][${j}]: `));
        }
    }
    return arr;
}
var n = prompt('Enter row number:');
var m = prompt('Enter column number');
var arr = enterArray(n, m);

/*Write a function to print all the elements of array to screen*/
function printArray(arr) {
    console.log("Your Array is: ");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].join());
    }
}

/*Write a function to calculate the total of elements of array.*/
function totalElementArry(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

/*Write a function to enter a number and then check it is exist in array or not.*/
function checkNumber(arr, x) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (x === arr[i][j] && !isNaN(x)) {
                result = `Number ${x} is exist in array`;
            } else if (x != arr[i][j] && !isNaN(x)) {
                result = `Number ${x} is not exist in array`;
            }
            else {
                result = `Please enter the corect number`;
            }
        }
    }
    return result;
}

/*Write a method to sort the elements of this array by ascending.*/
function comparision(x, y) {
    return x - y;
}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i].sort(comparision);
    }
}

/*Setup a menu for this program*/
function menu() {
    console.log('Menu:');
    console.log('Enter number 1 to print Array');
    console.log('Enter number 2 to calculate the total element of Array');
    console.log('Enter number 3 to check the number is exist in array or not');
    console.log('Enter number 4 to sort the elements of this array by ascending');
    console.log('Enter number 0 to exit menu');

    do {
        var choiceNumber = parseInt(prompt('Enter the number in menu:'));
        switch (choiceNumber) {
            case 1:
                printArray(arr);
                break;
            case 2:
                console.log(`Sum of elements: ${totalElementArry(arr)}`);
                break;
            case 3:
                console.log(checkNumber(arr, parseInt(prompt("Check the number:"))));
                break
            case 4:
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        arr[i].sort(comparision);
                    }
                    console.log(arr[i].join(" "));
                }
                break;
            case 0:
                return;
            default:
                console.log('Please enter correct choice');
        }
    } while (choiceNumber !== 0)
}
menu();