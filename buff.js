let buff = new Buffer.alloc(5);
console.log(buff);

let name1 = new Buffer.alloc(4, 'name');
let name2 = new Buffer.alloc(4, 'name');

console.log(new Buffer.from(name1).equals(name2));


let  buff1 = new Buffer.alloc(5, "Geeks");
let name3 = new Buffer.alloc( 5, "Name");

buff1.copy(name3)
console.log(name3.toString());
