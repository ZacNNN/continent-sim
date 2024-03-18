import * as config from './config.js';
import * as CountryActivity from './countryActivity.js';

let countries = [

];
const grid = document.body.querySelector('.grid');

let map = {};
let CountryResources = {
    developer: 0,
    Food: 50,
    Materials: 0,
    AdvMaterials: 0,
}

let MapResources = {
        developer: 0,
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

const calculatedFontSize = (config.mapZoom * 0.2085)

function GenerateMap(){
    console.log('Drawing Map for ' + (config.Xsize * config.Ysize) + ' tiles')

    map = Array(config.Xsize)
    .fill()
    .map(() => Array(config.Ysize).fill().map(() => ({ ...map_tile })));
    for (let i = 0; i < map[0].length; i++){
        for (let j = 0; j < map.length; j++){
            if (Math.floor(Math.random()*100) < config.waterChance){
                map[i][j].Terrain = 'water';
            }else if (Math.floor(Math.random()*100) < config.mountainChance){
                map[i][j].Terrain = 'mountain';
            }else{
                map[i][j].Terrain = 'grass';
            }

        }
    }

}



function WriteGrid(){




    var gridContainer = document.body.querySelector('.grid-container');


    gridContainer.style.setProperty('--X', map[0].length);
    gridContainer.style.setProperty('--Y', map.length);
    gridContainer.style.setProperty('--Xsize', `${config.Xsize * 12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--Ysize', `${config.Ysize * 12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--XsizeImg', `${12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--YsizeImg', `${12.8 * config.mapZoom}px`);




    for (let i = 0; i < map[0].length; i++){
        for (let j = 0; j < map.length; j++){
            const grid = document.createElement('div');

            grid.className = 'grid'
            grid.id = `grid-${j}-${i}`

            grid.textContent = (map[j][i].country)
            grid.style.fontSize = `${3*config.mapZoom}px`


            grid.style.backgroundImage = `url('./img/${map[j][i].Terrain}.png')`;




            gridContainer.appendChild(grid);
        }
    }


}
function UpdateScreen() {


    const container = document.body.querySelector('.info-text');

    container.innerHTML = '';
    for (let i = 0; i < countries.length; i++) {

        
        if (countries[i] != undefined){
        
            const line = document.createElement('div');

            let resourcesKey = Object.keys(countries[i].Resources)

            let _resources = ' '

            for (let j = 0; j < resourcesKey.length; j++){

                _resources = `${_resources} ${resourcesKey[j]}: ${countries[i].Resources[resourcesKey[j]]} | `;
        
            }


            line.textContent = `${countries[i].Name}: Population (${countries[i].Population}) Resources: ${_resources} `;
            line.classList.add('line');
        
        container.appendChild(line);
        }

    

    }
    
    for (let i = 0; i < map[0].length; i++){
        for (let j = 0; j < map.length; j++){

            let grid = document.getElementById(`grid-${i}-${j}`)

            if (map[i][j].index == -1){
               grid.textContent = '';
            }else{
                grid.textContent = countries[map[i][j].index].Name;
            }

        }
    }

}


function doNothing(){
    //does nothing
}




GenerateMap();
await CountryActivity.generate_countries();

doNothing();
CountryActivity.BeginActivity();

if (config.debuging_mode){
    console.log('Debuging is Active:');
    console.log('2d');
    console.log( map);
    console.log('country list');
    console.log(countries);
}

export {WriteGrid, map, countries, UpdateScreen, CountryResources}