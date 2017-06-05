import React from 'react';
import Header from './components/Header';
import Video from './components/Video';
import Sequencer from './components/Sequencer/Sequencer';
import { audioInit } from './modules/SoundControl';
export default class MuiWrapper extends React.Component {
  componentWillMount(){
    audioInit();
  }
  render(){
    return (
      <div>
        <Header />
        <Sequencer {...this.props}/>
      </div>
    );
  }
};
