const os = require('os');

const hostname = os.hostname();
console.log(hostname);

// console.log('----');
// const cpus = os.cpus();
// console.log(cpus[0]);

// console.log('-----');
// for (const cpu of cpus) {
//     console.log(cpu.model);
// }

// const totalMemory = os.totalmem();
// console.log('full memory : ', totalMemory);
// console.log('full memory : ', totalMemo

const tmpdir = os.tmpdir();

console.log(tmpdir);
