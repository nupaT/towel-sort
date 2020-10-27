
// You should implement your task here.

const { maxSatisfying } = require("semver");

module.exports = function towelSort (matrix) {
  let newArr = [];

  if(!Array.isArray(matrix)){
    return newArr;
  }

  for(let i = 0; i < matrix.length; i++){
    if(i % 2 != 0){
      for(let rev = matrix[i].length - 1; rev >= 0; rev--){
        newArr.push(matrix[i][rev]);
      } 
    }else {
        for(let j = 0; j < matrix[i].length; j++){
          newArr.push(matrix[i][j]);
        }
    }
  }

  return newArr;
}
