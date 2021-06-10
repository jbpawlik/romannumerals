
// let I = 1
// let V = 5
// let X = 10
// let L = 50
// Let C = 100
// Let D = 500
// Let M = 1000


function romanNumeral(number) {
  const romanNumerals = ['I','II','III','IV','V','VI','VII', 'VIII'
, 'IX', 'X']
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let a = numberArray.indexOf(number)
  return romanNumerals[a]
}  romanNumeral(5)

// function romanNumeral(number) {
//   const romanNumerals = ['I','II','III','IV','V','VI','VII', 'VIII'
// , 'IX', 'X']
//   const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   let a = numberArray.indexOf(number)
//   return romanNumerals[a]
// }  romanNumeral(4)



//   const romanNumerals = ['I','II','III','IV','V','VI','VII', 'VIII'
// , 'IX', 'X']
//   const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]