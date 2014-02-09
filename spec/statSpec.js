define(['stat'], function(Stat) {
	describe("minimumvalue", function() {
		var stat, list;

		beforeEach(function(){
			stat = new Stat();
			list = [12,2,-2,0,5,10];
		});

		it("should return minimum value", function() {
			expect(stat.minimumValue(list)).toEqual(-2);
		});

		it("should return undefined when list is undefined", function() {
			expect(stat.minimumValue(undefined)).toBeUndefined();
		});

		it("should return undefined when list is empty", function() {
			expect( stat.minimumValue( new Array(0) ) ).toBeUndefined();
		});
	});
});