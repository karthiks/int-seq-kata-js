define(['stat'], function(Stat) {
	var stat, list;

	beforeEach(function(){
		stat = new Stat();
		list = [12,2,-2,0,5,10];
	});

	describe("minimum value", function() {
		it("should return minimum value for list of input integers", function() {
			expect( stat.minimumValue(list) ).toEqual(-2);
		});

		it("should return undefined when list is undefined", function() {
			expect(stat.minimumValue(undefined)).toBeUndefined();
		});

		it("should return undefined when list is empty", function() {
			expect( stat.minimumValue( new Array(0) ) ).toBeUndefined();
		});
	});

	describe("maximum value", function() {
		it("should return maximum value for list of input integers", function() {
			expect( stat.maximumValue(list) ).toEqual(12);
		});

		it("should return undefined when list is undefined", function() {
			expect(stat.maximumValue(undefined)).toBeUndefined();
		});

		it("should return undefined when list is empty", function() {
			expect( stat.maximumValue( new Array(0) ) ).toBeUndefined();
		});
	});
});