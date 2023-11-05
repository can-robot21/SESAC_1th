console.log(process.argv);

let numRecords = process.argv[2];
let displayFormat = process.argv[3];
// console.log(numRecords);

if (process.argv.length < 3) {
    numRecords = 10;
    displayFormat = 'csv';
}


for (let i = 0; i < numRecords; i++) {
    console.log(i);
}

if (displayFormat == 'csv') {
    console.group('Printing result to csv...');

} else {
    console.log('Printing result to <HTML> ....');
} 

console.log('end');