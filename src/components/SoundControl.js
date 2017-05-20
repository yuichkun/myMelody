import React from 'react';
import Sound from 'react-sound';
var props = {
  url : 'sounds/button01a.mp3',
  playStatus: Sound.status.PLAYING
};
export default class SoundControl extends React.Component{
  render(){
    return (
      <Sound {...props}/>
    );
  }
}
