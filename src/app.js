import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiWrapper from './MuiWrapper';
import reducer from './reducers/reducer';
import changeGridState from './actions/changeGridState';
import changeIntervalTime from './actions/changeIntervalTime';
import changeToneType from './actions/changeToneType';
import incCounter from './actions/incCounter';
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch)=>{
  return {
    changeGridState: (rowIndex, columnIndex)=>{
      dispatch(changeGridState(rowIndex, columnIndex));
    },
    changeIntervalTime: (interval)=>{
      dispatch(changeIntervalTime(interval));
    },
    changeToneType: (toneType, sampleID)=>{
      dispatch(changeToneType(toneType, sampleID));
    },
    incCounter: ()=>{
      dispatch(incCounter());
    }
  };
};
const Wrapper = connect(mapStateToProps, mapDispatchToProps)(MuiWrapper);
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Wrapper />
        </MuiThemeProvider>
      </Provider>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
