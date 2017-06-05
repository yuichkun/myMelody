function changeGridState(rowIndex, columnIndex){
  return {
    type: 'CHANGE_GRID_STATE',
    rowIndex: rowIndex,
    columnIndex: columnIndex
  }
}

export default changeGridState;
