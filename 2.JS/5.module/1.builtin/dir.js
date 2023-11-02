const { dir } = require('console');
const fs = require('fs');
const path = require('path');

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log('읽기 오류');
        return;
        
    }
    
    // console.log(files);
    
})


// const { dir } = require('console');
// const fs = require('fs');
// const path = require('path');

// const directoryPath = './';

// fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//         console.log('읽기 오류');
//         return;
//     }

//     console.log(files);
// });

