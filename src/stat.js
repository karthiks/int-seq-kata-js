//Define the module
define( 
	[
		/* No Dependencies */
	],
	function() {
		//Define the Stat function to compute some statistics on input number sequence
		function Stat() {};

		//Define the class methods (kind of..)
		Stat.prototype = {};

		Stat.prototype.minimumValue = function(list) {
			var min;
			if (typeof(list) === 'undefined' || list.length === 0) {
				return;
			};
			min = list[0];
			for (var i = list.length - 1; i > 0; i--) {
				if (min > list[i]) { min = list[i] };
			};
			return min;
		};

		Stat.prototype.maximumValue = function(list) {
			var max;
			if (typeof(list) === 'undefined' || list.length === 0) {
				return;
			};
			max = list[0];
			for (var i = list.length - 1; i > 0; i--) {
				if (max < list[i]) { max = list[i] };
			};
			return max;
		};

		Stat.prototype.averageValue = function(list) {
			if (typeof(list) === 'undefined' || list.length === 0) {
				return;
			};
			var sum=0;
			for (var i = list.length - 1; i >= 0; i--) {
				sum = sum + list[i];
			};
			return sum/list.length;
		};

 		//Return the module constructor
		return Stat;
	}
);