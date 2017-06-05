import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const liStyle = {
  display: 'inline-block',
  margin: '20px 5px'
};
export default class ToneSelector extends React.Component{
  render(){
    return(
      <li style={liStyle}>
          <RaisedButton onClick={this.handleClick.bind(this)}>{this.props.name}</RaisedButton>
      </li>
    );
  }
  handleClick(){
    this.props.changeToneType(this.props.toneType, this.props.sampleID);
  }
}
