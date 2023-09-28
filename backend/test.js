// Requiring module
var mocha = require('mocha')
const assert = require('assert');
var describe = mocha.describe

// We can group similar tests inside a describe block
describe("Simple Math", () => {
before(() => {
	console.log( "This part executes once before all tests" );
});

after(() => {
	console.log( "This part executes once after all tests" );
});
	
// We can add nested blocks for different tests
describe( "Test1", () => {
	beforeEach(() => {
	console.log( "executes before every test" );
	});
	
	it("Is returning 7 when adding 2 + 5", () => {
	assert.equal(2 + 5, 7);
	});

	it("Is returning 6 when multiplying 2 * 3", () => {
	assert.equal(2*3, 6);
	});
});

describe("Test2", () => {
	beforeEach(() => {
	console.log( "executes before every test" );
	});
	
	it("Is returning 4 when adding 2 + 3", () => {
	assert.equal(2 + 3, 5);
	});

	it("Is returning 8 when multiplying 2 * 4", () => {
	assert.equal(2*4, 8);
	});
});
});
