function add(a, b, c, callback) {
    const sum = a + b + (c*2);
    callback(a, b, sum);
}

// ------

function displayResult(a, b, c, result) {
    // ---
    console.log('Result :', result);
}

res = add(2, 5, 6, displayResult);