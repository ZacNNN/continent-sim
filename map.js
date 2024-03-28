import * as main from "./main.js";
import * as CountryActivity from './countryActivity.js';
import * as config from "./config.js";




let map = [];


//map starting resources
let MapResources = {

    BasicOre: 0,
    AdvancedOre: 0,
    PlantMat: 0,
    LiveStock: 0,


}

//map tile vars
let map_tile = {
    country: ' ',
    Terrain: ' ',
    Resources: MapResources,
    index: -1
}

//from p5.js //sets up the all the noise and the generates the array
function setup() {
    console.log(`Seed: ${config.mapSeed}`)

    console.log('Drawing Map for ' + (config.Xsize * config.Ysize) + ' tiles');
    
    map = Array(config.Xsize)
    .fill()
    .map(() => Array(config.Ysize).fill().map(() => ({ ...map_tile })));
    for (let i = 0; i < map[0].length; i++){
         for (let j = 0; j < map.length; j++){
            //noiseSeed(config.mapSeed + 5);
            //const TempNoise = noise(j * config.TerrainRoughness, i * config.TerrainRoughness) *225;
            //if (TempNoise <= (config.TerrainChance.mountain * 2.5)){
                //map[j][i].Terrain = 'mountain'
            //}else if(TempNoise <= (config.TerrainChance.snow * 2.5)){
                //map[j][i].Terrain = 'snow'
            //}else{
                //map[j][i].Terrain = 'field'
            //}
            map[j][i].Terrain = 'field'
            
            noiseSeed(config.mapSeed);

            const HeightMap = noise(j * config.waterRoughness, i * config.waterRoughness) *225;
            if (HeightMap >= (config.waterChance * 2.5)){

            }else{
                map[j][i].Terrain = 'water'
            }

        }
    }
    //goes to countryActivity.js to generate countries
    CountryActivity.generate_countries();

  }

  export{map}


  //p5.js is a non-modular js file so using windows is the only way to use the function
  window.setup = setup;