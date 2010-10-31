/**
 * DojoPOA global namespace object
 */
var DojoPOA = {};

/**
* namespace util, generic functions
*/
DojoPOA.util = {
	 /**
     * Returns a reverse String
     */
	strrev : function(str){
		return typeof(str) == "string" 
		? str.split('').reverse().join('')
		: false;
	},
	
	 /**
     * Remove the whitespace from the beginning and end of a string
     */
	trim : function(str){
		return str.replace(/^\s+|\s+$/g,"");
	}
}

/**
* namespace math, some challenges
*/
DojoPOA.math = {
	/**
	* Perfect Numbers
	*/
	isPerfectNumber : function(number){
		var n = parseInt(number);
		var divisors = null;
		var sumDivisors = 0;
		
		if(DojoPOA.math.isPositive(n)){
			divisors = DojoPOA.math.getDivsors(n);
			for(var i=0;i<divisors.length;i++){
				sumDivisors += divisors[i];
			}
			return sumDivisors == n ? true : false;
		}else{
			return false;
		}		
	},
	
	/**
	* Verify if a number is positive
	*/
	isPositive : function(number){
		var n = parseInt(number);
		return n > 0 ? true : false;
	},
	
	/**
	* Get the divisors of a number
	*/
	getDivsors : function(number){
		var n = parseInt(number),
		divisors = new Array();
		for (var i=0;i<n;i++){
			if(n%i==0){
				divisors.push(i);
			}
		}
		return divisors;
	}
	
}