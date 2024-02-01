const debug = require('debug');

const debugR = debug('app:root');
const debugU = debug('app:user');
const debugA = debug('app:admin');
const debugS = debug('app:server');

module.exports = {
    debugR,
    debugU,
    debugA,
    debugS
};