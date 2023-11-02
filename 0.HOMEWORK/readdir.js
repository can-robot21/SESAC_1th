const fs = require('fs');

try {
  const files = fs.readdirSync('./');
  for (const file of files) {
    console.log(file);
  }
} catch (err) {
  console.error(err);
}
