var assert = require('assert');

// Exclusive .only 
// Inclusive .skip
// Without callback function

describe.only('Mathematical Operations - Test Suite', function(){

    this.timeout(5000);

  it.skip('Addition of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a + b;

    assert.equal(c,20);

  });

  it('Subtraction of two numbers', function(done){
     // Timeout exceeded
    // this.timeout(500);
    setTimeout(done, 3000); 

    var a = 10;
    var b = 10;

    var c = a - b;

    assert.equal(c,0);


  });

  it('Multiplication of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a * b;

    assert.equal(c,100);


  });

  it('Division of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a / b;

    assert.equal(c,1);


  });

  it('This is a test for Pending Test Feature')

});