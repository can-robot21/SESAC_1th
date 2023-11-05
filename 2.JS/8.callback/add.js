function add(a, b, callback) {
    const sum = a + b ;
    callback(a, b, sum);
}

// ------

function displayResult(a, b, result) {
    // ---
    console.log('Result :', result);
}

res = add(2, 5, displayResult);