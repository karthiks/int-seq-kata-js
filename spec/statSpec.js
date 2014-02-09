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
	});
});