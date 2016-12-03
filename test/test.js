const chai = require('chai');
const expect = chai.expect;
const count = require('./../count.js').default;        

// unit test should be independent from each other
describe('count', () => {
    it('should count 1 as default parameter', () => {
        const one = count();
        expect(one).to.be.a('number');
        expect(one).to.equal(1);
    });

    it('should keep count after repeated calls', () => {
        count();
        const three = count();
        expect(three).to.be.a('number');
        expect(three).to.equal(3);        
    });

    it('should count according to parameter value', () => {
        const eight = count(5);
        expect(eight).to.be.a('number');
        expect(eight).to.equal(8);
    });
});