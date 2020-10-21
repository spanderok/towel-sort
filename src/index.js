
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length == 0) return [];
  let arr = []
  let len = matrix.length;
  for(let i = 0; i < len; i++) {
      let len_internal = matrix[i].length;
      if(i % 2 == 0) {
          for(let j = 0; j < len_internal; j++) arr.push(matrix[i][j]);
      }
      else {
          for(let j = len_internal - 1; j >= 0; j--) arr.push(matrix[i][j]);
      }
  }
return arr;
}
