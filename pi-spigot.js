// Given a number of digits (past the decimal point) to generate,
// returns an array of integers, each being a digit of pi, starting
// with 3. For example, generatePi(2) will return [3, 1, 4]
// Uses the Rabinowitz-Wagon method, requiring only standard integers
// and integer arithmetic. However, requires creating space for all
// desired digits upfront.
//
function generatePi(maxDigits)
{
  // to enhance precision, we generate an extra 2 digits
  // and create an extra "bucket" for the remainders
  var maxDigitsInc = maxDigits + 2;
  var numRemainders = Math.floor((10 * maxDigitsInc) / 3) + 1;

  // the remainders array starts with each element being 2,
  // and the base for each array element is always the same so
  // we might as well prepare to pre-compute it once and store it
  var remainders = new Array(numRemainders).fill(2);
  var base = new Array(numRemainders).fill(0);

  // we'll store each generated digit of pi here
  var piDigits = [];

  // various other variables we'll use
  var i, j, k; // for loops
  var b; // for the current 'base' value
  var sum, q, r; // for the sum, quotient and remainder of our maths
  var carry, digit; // for the carry value and the next pi digit

  // pre-compute the base for each remainder element
  for (i = 0; i < numRemainders; i++)
    {base[i] = (2 * i) + 1;}

  // loop once for each of the digits being generated
  for (i = 0; i < maxDigitsInc; i++) {

    // begin each next digit processing anew, with
    // an initial carry of zero and each remainder * 10
    carry = 0;
    remainders = remainders.map(e => e * 10);
    
    // loop through each remainder, starting from
    // the right-most value, carrying up as we
    // proceed, to generate the next digit
    for (j = numRemainders - 1; j > 0; j--) {

      sum = remainders[j] + carry;
      b = base[j];
      q = Math.floor(n/b);
      r = n % b;

      remainders[j] = r;
      carry = q * j;
    }

    // for the last step, we convert to base 10
    // to finally extract the next pi digit (and
    // store the remainder for the next round)
    n = remainders[0] + carry;
    q = Math.floor(n/10);
    r = n % 10;
    digit = q;
    remainders[0] = r;

    // on occasion, we may wind up with the next digit,
    // as generated from the above, being 10; in this
    // case, make the digit 0, and carry over the 1 to
    // the previous digit (and all other required digits
    // if we have to add that 1 to one or more 9s.)
    if (digit > 9) {
      k = piDigits.length - 1;
      while (piDigits[k] === 9)
        {piDigits[k] = 0; k--;}
      piDigits[k] += 1;
      digit = 0;
    }

    // add the next pi digit to the list we're building
    piDigits.push(digit);    
  }

  // although we generated extra digits for precision,
  // we only return "3" plus the requested number of digits
  return piDigits.slice(0, maxDigits + 1);
}

// This test code generates 50 digits; adjust as needed
var d = generatePi(50);

// Log to console
console.log(d);
