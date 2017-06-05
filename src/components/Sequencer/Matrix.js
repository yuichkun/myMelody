import React from 'react';
import Block from './Block';

const columnStyle = {
  display: 'flex',
  flexDirection: 'column'
};
const rowStyle = {
  display: 'inline-block'
  // justifyContent: 'space-between'
};
const matrixStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

class Matrix extends React.Component{
  render(){
    return this.createMatrix();
  }
  createMatrix(){
    let rows = [];
    for(let i = 0; i < 8; i++){
      rows.push(this.renderRows(i));
    }
    return (
      <div style={matrixStyle}>
        { rows }
      </div>
    );
  }
  renderRows(rowIndex){
    return (
      <div key={rowIndex} style={rowStyle}>
        { this.renderColumns(rowIndex) }
      </div>
    );
  }
  renderColumns(rowIndex){
    let columns = [];
    for(let i = 0; i < 5; i++){
        const color = this.props.gridState[rowIndex] === i? '#DCE775' : '#FAFAFA';
        columns.push(<Block key={i} color={{backgroundColor: color}} rowIndex={rowIndex} columnIndex={i} gridState={this.props.gridState} changeGridState={this.props.changeGridState}/>);
    }
    return (
      <div style={columnStyle}>
        { columns }
      </div>
    );
  }
}

export default Matrix;
