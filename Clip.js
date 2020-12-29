const defaultVolume = 1.2;
const defaultExtension = ".mp3";

class Clip {
  
  constructor(name, volume, file){
    this.name = name;
    this.volume = volume ? volume : defaultVolume;
    this.file = file ? file : name+defaultExtension;
  }
}

module.exports = Clip;