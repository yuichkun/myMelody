import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';


export default class SeekBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      completed : 0
    };
  }
  render(){
    return(
      <LinearProgress mode="determinate" value={this.state.completed} />
    );
  }
}
