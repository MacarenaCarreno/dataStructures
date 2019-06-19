const LinkedList = require('./LinkedList');

const linkedTest = new LinkedList();
console.log('Passing Test01', linkedTest.isEmpty() === true);

linkedTest.add(5);
linkedTest.add('10');

console.log('Passing Test02', linkedTest.getSize() === 2);

linkedTest.insertAt(89, 1);
linkedTest.insertAt('Maca', 3);
linkedTest.insertAt(100, 0);
linkedTest.add(99);

console.log('Passing Test03::', linkedTest.getSize() === 6);

linkedTest.delete(100);
linkedTest.deleteFrom(1);

console.log('Passing Test04::', linkedTest.getSize() === 4);

console.log('LIST:::', linkedTest.print());
