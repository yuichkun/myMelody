import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header';
import Video from './components/Video';
import ToolBox from './components/ToolBox';
import Sequencer from './components/Sequencer';

class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Video />
        <ToolBox />
        <Sequencer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
