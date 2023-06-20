function displaySquareRootOfSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((accumulator, number) => {
    return accumulator + Math.pow(number, 2);
    }, 0);
   
    const squareRoot = Math.sqrt(sumOfSquares);
   
    document.body.innerHTML = (`The square root of the sum of squares is: ${squareRoot}`);
    }
    const inputNumbers = ['0','1', '2', '3', '4', '5'];
    displaySquareRootOfSumOfSquares(inputNumbers);

   



