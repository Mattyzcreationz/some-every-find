//Extract Value
const arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }]
extractValue(arr, 'name') // ['Elie', 'Tim', 'Matt', 'Colt']

function extractValue(arr, key) {
    return extractValue.reduce(function (arr, key) {
        extractValue.push(arr[key]);
    })
}