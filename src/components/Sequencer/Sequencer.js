import React from 'react';
import Matrix from './Matrix';
import ParamControls from './ParamControls';
import SeekBar from './SeekBar';
import { playBuffer, playOsc, changePlaybackRate } from '../../modules/SoundControl';
import scale from 'scale-number-range';
const wrapperStyle = {
    backgroundColor: '#E3F2FD',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
};
let counter = 0;
export default class Sequencer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={wrapperStyle}>
                <Matrix {...this.props} />
                <ParamControls {...this.props}/>
            </div>
        );
    }
    componentWillMount() {
      const thread = ()=>{
        setTimeout(callback, this.props.intervalTime);
      };
      const callback = ()=>{
        thread();
        this.props.incCounter();
        const counter = this.props.counter;
        const multArr = [1.781, 1.498, 1.334, 1.189, 1.0];
        const target = this.props.gridState[counter];
        if(this.props.toneType === 0){
          // const rate = scale(target, 0, 7, 3, 1);
          // changePlaybackRate(rate);
          changePlaybackRate(multArr[target]);
          playBuffer(this.props.sampleID);
        } else {
          const freq = 440;
          playOsc(this.props.intervalTime * 0.5, freq * multArr[target]);
        }

      };
      thread();
    }
}
