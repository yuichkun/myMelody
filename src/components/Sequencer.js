import React from 'react';
import SoundControl from './SoundControl';

export default class Sequencer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playing : false
    }
  }
  renderColumuns(){
    let colomuns = [];
    for(let i = 0; i < 4; i++){
      colomuns.push(<input type="checkbox" className="col col-md-3" />);
    }
    return colomuns;
  }
  renderRow(){
    return (
      <div className="row" style={{background: "#DDDDEE"}}>
        {this.renderColumuns()}
      </div>
    );

  }
  renderMatrix(){
    var matrix = [];
    for(let i = 0; i < 3; i++){
      matrix.push(this.renderRow());
    }
    return matrix;
  }
  render(){
    let sound = null;
    if(this.state.playing){
      sound = (<SoundControl />);
    }
    return (
      <div className="container">
        {sound}
        <h2>Sequencer</h2>
        {this.renderMatrix()}
        <button onClick={this.startPlaying.bind(this)}>Play</button>
      </div>
    );
  }
  startPlaying(){
    this.setState({
      playing: true
    });
  }
}
