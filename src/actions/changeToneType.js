function changeToneType(toneType, sampleID){
  return {
    type: 'CHANGE_TONE_TYPE',
    toneType: toneType,
    sampleID: sampleID
  }
}

export default changeToneType;
