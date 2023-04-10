  export function generateSudoku () {
    function randomize (arr: number[], outArr: number[] | undefined = []) : number[] {
      if (arr[0] === undefined) return outArr; 
      const randomIndex = Math.ceil(Math.random() * arr.length) - 1;
      outArr.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
      return randomize(arr, outArr);
    }
    
    function shuffleNums (sudoku: number[][]) {
    //generate a randomized array with the numbers 1-9
      let randomRow: number[] = [];
      for(let i = 1; i <= sudoku.length; i++) randomRow.push(i);
      randomRow = randomize(randomRow);
      //iterate through every element of the sudoku puzzle- replace the element with the number associated to the randomized array[element - 1]. 
      sudoku.forEach((subarray, i) => {
        subarray.forEach((element, j) => {
          sudoku[i][j] = randomRow[element - 1]
          });
        });
      return sudoku;
    }
  
    function rotateSudoku (arrGrid: number[][]) {
      const newArr: number[][] = [];
      arrGrid[0].forEach(element => {
        newArr.push([]);
      });
      arrGrid.forEach((subArr: number[]) => {
        subArr.forEach((element: number, i) => {
          newArr[i].unshift(element);
        });
      });
    return newArr;
    }
  
    function swapRowsSudoku (arr: number[][]) {
      const outArr = [...arr];
      let swapRows = randomize([...arrayOf3]);
      for(let i = 0; i < arr.length; i += 3) {
        swapRows = randomize(swapRows);
        //console.log(swapRows)
        for(let j = 0; j < 3; j++) {
          outArr[i+j] = arr[i+swapRows[j]];
        }
      } 
      return outArr;
    }

    function swapRowsSudokuBlock (arr: number[][][]) {
      const outArr = [...arr];
      let swapRows = randomize([...arrayOf3]);
      for(let i = 0; i < arr.length; i += 3) {
        swapRows = randomize(swapRows);
        //console.log(swapRows)
        for(let j = 0; j < 3; j++) {
          outArr[i+j] = arr[i+swapRows[j]];
        }
      } 
      return outArr;
    }
  
    function blockSwap (sudoku: number[][]) {
      let sudokuBlockGroups: number[][][] = [];
      const outArr: number[][] = [];
      let inc: number = -1;
      sudoku.forEach((row, i) => {
        if(i % 3 === 0) {
          sudokuBlockGroups.push([]);
          inc++;
        }
        sudokuBlockGroups[inc].push(row);
      });
      sudokuBlockGroups = swapRowsSudokuBlock(sudokuBlockGroups);
      sudokuBlockGroups.forEach(block => {
        block.forEach(subarray => {
          outArr.push(subarray);
        });
      });
      return outArr;
    }
    
    const arrayOf3 = [0,1,2];
  //Step 1: create a valid sudoku puzzle and assign it to a variable
    const sudokuBlock = [[1,2,3,4,5,6,7,8,9], 
                         [4,5,6,7,8,9,1,2,3],
                         [7,8,9,1,2,3,4,5,6],
                         [2,3,1,5,6,4,8,9,7],
                         [5,6,4,8,9,7,2,3,1],
                         [8,9,7,2,3,1,5,6,4],
                         [3,1,2,6,4,5,9,7,8],
                         [6,4,5,9,7,8,3,1,2],
                         [9,7,8,3,1,2,6,4,5]
                        ];
    
    let generatedSudoku = [...sudokuBlock];
    
  
  //Step 2: Shuffle the numbers in the valid sudoku
    generatedSudoku = shuffleNums(generatedSudoku);
  //Step 3 
    //randomly swap the first three rows with one another
    //randomly swap the middle three rows with one another 
    //randomly swap the last three rows with one another
    generatedSudoku = swapRowsSudoku(generatedSudoku);
  //Step 4 
    //rotate the sudoku square
    generatedSudoku = rotateSudoku(generatedSudoku);
  //Step 5 
    //randomly swap the first three rows with one another
    //randomly swap the middle three rows with one another 
    //randomly swap the last three rows with one another
    generatedSudoku = swapRowsSudoku(generatedSudoku);
  //Step 6 
    //rotate the sudoku square
    generatedSudoku = rotateSudoku(generatedSudoku);
  //Step 7
    //create a block view of the sudoku puzzle
    //randomly swap the blocks with one another
    //return the unblocked sudoku puzzle
    generatedSudoku = blockSwap(generatedSudoku);
  //Step 8 
    // rotate the sudoku square
    generatedSudoku = rotateSudoku(generatedSudoku);
  //Step 9 
    //create a block view of the sudoku puzzle
    //randomly swap the blocks with one another
    //return the unblocked sudoku puzzle
    generatedSudoku = blockSwap(generatedSudoku);
  //Step 10 
    //rotate the sudoku square back to original position 
    //generatedSudoku = rotateSudoku(generatedSudoku);
    //return the sudoku
    return generatedSudoku;
  }
