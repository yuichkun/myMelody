const initialState = {
  intervalTime: 1000,
  gridState: [4,4,4,4,4,4,4,4],
  toneType: 0,
  sampleID: 0
};

const reducer = function(state = initialState, action){
  switch (action.type) {
    case "CHANGE_GRID_STATE":
      let newGridState = state.gridState.slice();
      newGridState[action.rowIndex] = action.columnIndex;
      return Object.assign({}, state, {
        gridState: newGridState
      });
      break;
    case "CHANGE_INTERVAL_TIME":
      return Object.assign({}, state, {
        intervalTime: action.payload
      });
    case "CHANGE_TONE_TYPE":
      return Object.assign({}, state, {
        toneType: action.toneType,
        sampleID: action.sampleID
      });
    default:
      return state;
  }
};

export default reducer;
