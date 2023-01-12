
const chai = require('chai');


//expect
const expect = chai.expect;

//should()
const should = chai.should();

// Assert - TDD style
const assert = chai.assert; //no chaining possible 


//expect API examples

let a = 1, b = 1;
expect(a).to.be.equals(b, "A and B aren't equal");

//should-- 
a.should.be.equals(b);

// assert
assert.equal(a,b, "a and b are not equal")


//object/string/boolean
function myObj(){
    return{
        a: 100,
        b: 'Hello'
    }
}

x = new myObj();
y = new myObj();

expect(x).to.be.an('object');
//expect(x).to.be.equal(y,'X and Y are not equal'); -> doesn't compare the content of the object

//deep.equal or deep.equals -> for comparing the content of the object
expect(x).to.be.deep.equals(y,'X and Y are not equal');
//shoudl()
x.should.be.deep.equals(y,'X and Y are not equal');

//assert
assert.deepEqual(x,y, "x and y are not equal")


//chaining expressions
// x is an object ; x and y are equal
// keywords- and, with, but, ...
expect(x).to.be.an('object').and.to.be.deep.equals(y);
//shoudl()
x.should.be.an('object').and.to.be.deep.equals(y);


//arrays
let numbers = [1,2,3,0]
expect(numbers).to.be.an('array').that.includes(0);
//shoudl()
numbers.should.be.an('array').that.includes(0);

//assert
assert.isArray(numbers, "numbers is not an array")


