import BufferLoader from './BufferLoader';
import config from '../config';
import _ from 'lodash';

let context;
let lowFilter;
let bandFilter;
let highFilter;
let gainNode;
let bufferList = [];
let playbackRate = 1;
function audioInit() {
    window.addEventListener('load', init, false);
    function init(){
      try {
          // Fix up for prefixing
          window.AudioContext = window.AudioContext || window.webkitAudioContext;
          context = new AudioContext();
          lowFilter = context.createBiquadFilter();
          lowFilter.type = 'lowpass';
          highFilter = context.createBiquadFilter();
          highFilter.type = 'highpass';
          bandFilter = context.createBiquadFilter();
          gainNode = context.createGain();

          const soundFiles = config.soundFiles;
          const soundUrls = _.reduce(soundFiles, (urls, soundFile)=>{
            if(soundFile.url != null){
              urls.push(soundFile.url);
            }
            return urls;
          }, []);
          const bufferLoader = new BufferLoader(context, soundUrls, onFinishLoading);
          bufferLoader.load();
          function onFinishLoading(bfs){
            bufferList = bfs;
            console.log("loaded");
          }
      } catch (e) {
          alert('Web Audio API is not supported in this browser');
          console.log("error ", e);
      }
    }
}

function playBuffer(index) {
  const source = context.createBufferSource();
  const buffer = bufferList[index];
  source.buffer = buffer;
  source.playbackRate.value = playbackRate;
  source.connect(lowFilter);
  lowFilter.connect(highFilter);
  highFilter.connect(gainNode);
  gainNode.connect(context.destination);
  // source.connect(context.destination);
  source.start(0);
}

function changeVolume(vol){
  gainNode.gain.value = vol;
}
function changeLowFilter(val){
  lowFilter.frequency.value = val;
}
function changeHighFilter(val){
  highFilter.frequency.value = val;
}
function playOsc(interval, freq){
  const osc = context.createOscillator();
  osc.frequency.value = freq;
  osc.connect(lowFilter);
  lowFilter.connect(highFilter);
  highFilter.connect(gainNode);
  gainNode.connect(context.destination);
  osc.start();
  setTimeout(()=>{
    osc.stop();
  }, interval);
}
function changePlaybackRate(rate){
  playbackRate = rate;
}
export {
    audioInit,
    playBuffer,
    playOsc,
    changeVolume,
    changeLowFilter,
    changeHighFilter,
    changePlaybackRate
};
