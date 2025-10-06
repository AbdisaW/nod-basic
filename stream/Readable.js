
const {Readable} = require('stream');

const inStream = new Readable({
    read(){}
})
inStream.push("Hello wolrd");

inStream.push(null);

inStream.pipe(process.stdout)
