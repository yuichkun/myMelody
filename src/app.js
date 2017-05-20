import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header';

class App extends React.Component{
  render(){
    return (
      <Header />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
