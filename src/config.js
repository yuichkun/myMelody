import path from 'path';
import _ from 'lodash';
import sounds from './sounds.config';

let idCounter = 0;
const soundFiles = _.map(sounds, (sound)=>{
  const soundFile = {};
  soundFile.name = sound.name;
  if(sound.url != null){
    soundFile.url = path.join(__dirname + '/sounds/' + sound.url);
    soundFile.sampleID = idCounter;
    soundFile.toneType = 0;
    idCounter++;
  } else {
    soundFile.toneType = 1;
  }
  return soundFile;
});

console.log("soundFiles ", soundFiles);
module.exports = {
    soundFiles: soundFiles
};
