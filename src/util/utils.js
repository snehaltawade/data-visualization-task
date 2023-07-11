//mean
export const mean = (arrayOfNumbers) => {
    let sum = 0;
    let arrayLen = arrayOfNumbers.length
    for (let i = 0; i < arrayLen; i++)
        sum += Number(arrayOfNumbers[i]);
    return sum / arrayLen;
}

//mode
export const mode = (arrayOfNumbers) => {
    let mode = 0, max = 0, k = 0, total = 0, arrayLen = arrayOfNumbers.length;
    let modeArray = []
    for (var i = 0; i < arrayLen - 1; i++) {
        mode = 0;
        for (let j = i + 1; j < arrayLen; j++) {
            if (arrayOfNumbers[i] == arrayOfNumbers[j]) {
                mode++;
            }
        }
        if ((mode > max) && (mode != 0)) {
            k = 0;
            max = mode;
            modeArray[k] = arrayOfNumbers[i];
            k++;
        }
        else if (mode == max) {
            modeArray[k] = arrayOfNumbers[i].toFixed(3);
            k++;
        }
    }

    for (var i = 0; i < arrayLen; i++) {
        if (arrayOfNumbers[i] == modeArray[i])
            total++;
    }
    if (total == arrayLen)
        return ("no mode");
    else {
        return modeArray;
    }
}

//median
export const median = (a) => {
    let sortedArray = sort(a, a.length)
    let n = a.length
    if (n % 2 != 0) {
        return Number(sortedArray[(n + 1) / 2]);
    }


    return (sortedArray[Math.floor((n - 1) / 2)] + sortedArray[n / 2]) / 2;
}

export const sort = (arr, n) => {
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
    return arr;
}

//function to filter dataset and divinde in classes
export const classBasedFilter = (myData) => {

    const filteredArray = myData.reduce((classBasedArray, data) => {
        let { Alcohol } = data
        if (!classBasedArray[Alcohol]) {
            classBasedArray[Alcohol] = [];
            classBasedArray[Alcohol].push(data);
        }
        else {
            classBasedArray[Alcohol].push(data);
        }
        return classBasedArray;
    }, []);
    return filteredArray;
}

//function to extarct values based on property ex.Flavanoids
export const filterProperty = (data, property) => {
    let result = []
    data.forEach(element => {
        result.push(element[property])
    });
    return result
}

//function to calculate gamma value and return gamma list
export const calculateGamma = (data) => {
    let result = []
    data.forEach(element => {
        result.push(element['Ash'] * element['Hue'] / element['Magnesium'])
    });
    return result
}
