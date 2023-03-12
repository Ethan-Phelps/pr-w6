var expect = chai.expect;
describe("testing", function(){
    describe("test1", function(){
        it("the pointless function should return 1", function(){
            var x = pointlessFunction();
            expect(x).to.equal(1);
        })
    })
})