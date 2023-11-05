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
    files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        console.log('파일:', filePath);
        checkFile(filePath);
    })
    
});

function checkFile(filePath) {
    fs.stat(filepath, (err, stats) => {
        if (err) {
            console.error(err);
            return;
        }

        // isfile() 및 isDirectory()함수
        if (stats.isFile()) {
            console.log('이것은 파일입나다.');
        } else if (stat.isDrectory()) {
            checkFile(filePath);
        }
    })
}

function checkDirechtory(filePath) {
    fs.stat((filePath, (err, stats) =>{
        if (err) {
            console.
        }
    })
} 


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

