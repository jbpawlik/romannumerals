Describe: numberToRomanNumeral();

<!-- Test: "If user inputs single-digit number, give Roman numerical value"
Code:
  numbertoRomanNumeral(3)
Expected Output: III -->

Test: "If user inputs numbers 1-3, give value in I"
Code:
  numberToRomanNumeral(3)
Expected Output: III





<!-- Write a method to convert numbers into Roman numerals. 

The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals. -->