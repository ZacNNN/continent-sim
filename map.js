import * as main from "./main.js";
import * as CountryActivity from './countryActivity.js';
import * as config from "./config.js";


let map = [0];


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


function setup(){

    console.log('Drawing Map for ' + (config.Xsize * config.Ysize) + ' tiles')
    if (1==2){
    map = Array(config.Xsize)
    .fill()
    .map(() => Array(config.Ysize).fill().map(() => ({ ...map_tile })));
    for (let i = 0; i < map[0].length; i++){
         for (let j = 0; j < map.length; j++){
            if (Math.floor(Math.random()*100) < config.TerrainChance.water){
                map[i][j].Terrain = 'water';
            }else if (Math.floor(Math.random()*100) < config.TerrainChance.moutain){
                    map[i][j].Terrain = 'mountain';
            }else if (Math.floor(Math.random()*100) < config.TerrainChance.snow){
                    map[i][j].Terrain = 'snow';
              }else{
                    map[i][j].Terrain = 'field';
                }
    
            }
        }
    

    }
    CountryActivity.generate_countries();
    console.log('calling function')
}

export {map}