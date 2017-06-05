import React from 'react';
import Paper from 'material-ui/Paper';
const paperStyle = {
  height: '12vw',
  width: '12vw',
  display: 'inline-block'
};

export default class Block extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const newStyle = Object.assign(paperStyle, this.props.color);
    return (
      <div onClick={this.handleClick.bind(this)}>
        <Paper style={newStyle} />
      </div>
    );
  }
  handleClick(){
    this.props.changeGridState(this.props.rowIndex, this.props.columnIndex);
  }
}
