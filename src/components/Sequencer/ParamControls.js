import config from '../../config';
import React from 'react';
import Slider from 'material-ui/Slider';
import _ from 'lodash';
import scale from 'scale-number-range';
import {changeVolume, changeLowFilter, changeHighFilter} from '../../modules/SoundControl';
import ToneSelector from './ToneSelector';

const controlStyle = {
    textAlign: 'center'
};

const sliderStyle = {
    display: 'inline'
};

const categoryStyle = {
    display: 'inline'
};
const ulStyle = {
    listStyleType: 'none',
    width: '80%',
    margin: 'auto'
};

export default class ParamControls extends React.Component {
    genToneSelectors(){
      let items = config.soundFiles;

      const toneSelectors = _.map(items, (item, key)=>{
        return (
          <ToneSelector key={key} changeToneType={this.props.changeToneType} name={item.name} toneType={item.toneType} sampleID={item.sampleID}/>
        );
      });
      return (
        <ul style={ulStyle}>
          {toneSelectors}
        </ul>
      );
    }
    render() {
        return (
            <div style={controlStyle}>
                <h2 style={categoryStyle}>Tone</h2>
                {this.genToneSelectors.bind(this)()}
                <h2 style={categoryStyle}>Volume</h2>
                <Slider onChange={this.onVolChange}/>
                <h2 style={categoryStyle}>BPM</h2>
                <Slider onChange={this.onBPMChange.bind(this)}/>
                <h2 style={categoryStyle}>LowPassFilter</h2>
                <Slider onChange={this.onLowFilterChange}/>
                <h2 style={categoryStyle}>HighPassFilter</h2>
                <Slider onChange={this.onHighFilterChange}/>
            </div>
        );
    }
    onVolChange(e, val) {
        const vol = scale(val, 0, 1, 0, 2);
        changeVolume(vol)
    }
    onLowFilterChange(e, val) {
        const newVal = scale(val, 0, 1, 500, 10);
        console.log(newVal);
        changeLowFilter(newVal);
    }
    onHighFilterChange(e, val) {
        const newVal = scale(val, 0, 1, 300, 4000);
        console.log(newVal);
        changeHighFilter(newVal);
    }
    onBPMChange(e, val) {
        const time = scale(val, 0, 1, 500, 10);
        this.props.changeIntervalTime(time);
    }
}
