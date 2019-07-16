function getRow(board, x) {
  return board[x];
}

function getColumn(board, y) {
  let col = [];
  for (let i = 0; i < board.length; i++) {
    col.push(board[i][y]);
  }
  return col;
}

function getGrid(board, x, y) {
  let grid = [];
  let xIdx = x * 3;
  let yIdx = y * 3;
  for (let i = yIdx; i < yIdx + 3; ++i) {
    for (let j = xIdx; j < xIdx + 3; ++j) {
      grid.push(board[j][i]);
    }
  }
  return grid;
}

const includes = callBack => {
  for (let i = 1; i < 9; ++i) {
    if (!callBack.includes(i)) return false;
  }
  return true;
};

function validSolution(board) {
  let status = true;

  //Check Rows
  for (let r = 0; r < board.length; r++) {
    if (!includes(getRow(board, r)) && status === true) {
      status = false;
    }
  }

  //Check Colum
  for (let c = 0; c < board.length; c++) {
    if (!includes(getColumn(board, c)) && status === true) {
      status = false;
    }
  }

  //Check Grid
  for (let g = 0; g < 3; ++g) {
    for (let h = 0; h < 3; ++h) {
      if (!includes(getGrid(board, g, h)) && status === true) {
        status = false;
      }
    }
  }

  return status;
}
