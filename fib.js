/**
* Used Matrix Exponention by squaring Algorithm
* Time complexity--O(logn)
* Space complexity--O(logn)-If you consider the function call stack size else it is O(1)
* Algorithm: Given F(k) and F(k+1), we can calculate:
* F(2k)= F(k)[2F(k+1)−F(k) & F(2k+1)= F(k+1)^2+F(k)^2
*/

let times = (...matrices) =>
  matrices.reduce(([a,b,c], [d,e,f]) => [a*d + b*e, a*e + b*f, b*e + c*f]);


let power = (matrix, n) => {
  if (n === 1)
    return matrix;
  let halves = power(matrix, Math.floor(n / 2));
  return (n % 2 === 0) ? times(halves, halves) : times(halves, halves, matrix);
}

// Fibonacci function
let fibonacci = (n) =>
 (n < 2) ? n : power([1, 1, 0], n - 1)[0];

document.getElementById("btn").onclick = function () {
        var inputnum = parseFloat(document.getElementById("input").value);
  document.getElementById('output').style.fontSize = '120%';

  //Javascript cannot hold more than 2^53-1 that is Number.MAX_VALUE=1.7976931348623157e+308, so . input can only upto 1476
  if(inputnum<=1476){
        document.getElementById("output").innerHTML = 'Fibonacci Result:  ' + fibonacci(inputnum).toString();
  }
  else{
    document.getElementById("output").innerHTML = 'Fibonacci Result:  ' + fibonacci(inputnum).toString() + '<br /><i><h6> * Javascript cannot hold more than 2^53-1 so output will be infinity</h6></i>';
  }

};

/**
* Test cases for fibonacci function
* Lets consider 10 test cases
* 8 correct test cases and 2 wrong test cases
*/
QUnit.test("fibonacci tests", (assert) => {

  //Testing for correct values
	assert.equal(fibonacci(1), 1)
	assert.equal(fibonacci(2), 1)
	assert.equal(fibonacci(3), 2)
	assert.equal(fibonacci(4), 3)
	assert.equal(fibonacci(5), 5)
	assert.equal(fibonacci(6), 8)
	assert.equal(fibonacci(7), 13)
	assert.equal(fibonacci(14), 377)

  //Testing for wrong values

	// assert.equal(fibonacci(1), 0)
	// assert.equal(fibonacci(2), 10)
})
