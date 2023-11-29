function hasOddNumber(arr) {
    return arr.some(function (value) {
        return value % 2 !== 0
    });
}

function hasAZero(arr) {
    return arr.toString().Split().some(function (value) {
        return value === 0;
    });
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function (value) {
        return value % 2 !== 0;
    });
}

function hasNoDuplicates(arr) {
    return arr.every(function (value) {
        return value.indexOf(value) == value.lastindexOf(value);
    });
}

function hasCertainKey(arr, key) {
    return arr.every(function (value) {
        return key in value;
    });
}

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (value) {
        return value[key] === searchValue;
    });
}



