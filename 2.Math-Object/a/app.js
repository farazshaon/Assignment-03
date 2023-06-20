function squareRootOfSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((accumulator, number) => {
    return accumulator + Math.pow(number, 2);
    }, 0);
   
    const squareRoot = Math.sqrt(sumOfSquares);
   
    return squareRoot;
    }
   
    const inputNumbers = [2, 3, 4, 5];
    const result = squareRootOfSumOfSquares(inputNumbers);
    document.body.innerHTML = (result); 



