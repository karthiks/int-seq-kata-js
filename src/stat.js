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

		//Return the module constructor
		return Stat;
	}
);