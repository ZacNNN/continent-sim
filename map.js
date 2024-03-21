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
    console.log(`Seed: ${config.mapSeed}`)

    console.log('Drawing Map for ' + (config.Xsize * config.Ysize) + ' tiles');
    
    map = Array(config.Xsize)
    .fill()
    .map(() => Array(config.Ysize).fill().map(() => ({ ...map_tile })));
    for (let i = 0; i < map[0].length; i++){
         for (let j = 0; j < map.length; j++){
            noiseSeed(config.mapSeed + 5);
            const TerrainNoise = noise(j * config.TerrainRoughness, i * config.TerrainRoughness) *225;
            if (TerrainNoise <= (config.TerrainChance.mountain * 2.5)){
                map[j][i].Terrain = 'mountain'
            }else if(TerrainNoise <= (config.TerrainChance.snow * 2.5)){
                map[j][i].Terrain = 'snow'
            }else{
                map[j][i].Terrain = 'field'
            }
            
            noiseSeed(config.mapSeed);
            const waterNoise = noise(j * config.waterRoughness, i * config.waterRoughness) *225;
            if (waterNoise >= (config.waterChance * 2.5)){

            }else{
                map[j][i].Terrain = 'water'
            }

        }
    }
    CountryActivity.generate_countries();

  }

  export{map}

  window.setup = setup;