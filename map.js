import * as main from "./main.js";
import * as CountryActivity from './countryActivity.js';
import * as config from "./config.js";




let map = [];

let MapResources = {

    BasicOre: 0,
    AdvancedOre: 0,
    PlantMat: 0,
    LiveStock: 0,


}

let map_tile = {
    country: ' ',
    Terrain: ' ',
    Resources: MapResources,
    index: -1
}


function setup() {

    console.log('Drawing Map for ' + (config.Xsize * config.Ysize) + ' tiles')
    
    map = Array(config.Xsize)
    .fill()
    .map(() => Array(config.Ysize).fill().map(() => ({ ...map_tile })));
    for (let i = 0; i < map[0].length; i++){
         for (let j = 0; j < map.length; j++){
            const noisePixel = noise(j * 0.01, i * 0.01) *225;
            if (noisePixel <= 150){
                map[j][i].Terrain = 'field'
            }else{
                map[j][i].Terrain = 'water'
            }

        }
    }
    CountryActivity.generate_countries();

  }

  export{map}

  window.setup = setup;