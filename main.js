import * as config from './config.js';
import * as CountryActivity from './countryActivity.js';

let countries = [

];

let map = {};
let CountryResources = {
    developer: 0,
    Food: 0,
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



function GenerateMap(){
    console.log('Drawing Map for ' + (config.Xsize * config.Ysize) + ' tiles')

    map = Array(config.Xsize)
    .fill()
    .map(() => Array(config.Ysize).fill().map(() => ({ ...map_tile })));
    

}

async function generate_countries(){
    if (config.country_count <= (map.length * map[0].length)){
        for (let i = 0; i < config.country_count; i++) {
           
           
            let noun = config.country_nouns[Math.floor(Math.random() * config.country_nouns.length)];
            let adjectives = config.country_adjectives[Math.floor(Math.random() * config.country_adjectives.length)];
            let population = 200 + Math.floor(Math.random() * 1500);
            let name = adjectives + ' ' + noun;
            let goverement;

            let xcord = Math.floor(Math.random() * config.Xsize);
            let ycord = Math.floor(Math.random() * config.Ysize);
            let aggressiveness = 0

            if(Math.floor(Math.random()* 2) == 1){
                 goverement = 'Democracy';
                 aggressiveness = Math.floor(Math.random()* 150) + 15

            }else{
                 goverement = 'Facism';
                 aggressiveness = Math.floor(Math.random()* 300) + 150
                 
            }


            if (map[xcord][ycord].index == -1){
                map[xcord][ycord].country = name;
                map[xcord][ycord].index = i;


                countries[i] = {
                    Name: name,
                    Goverement: goverement,
                    cord: [
                        xcord + ' ' + ycord
                    ],
                    Population: population,
                    Resources: CountryResources,
                    Control: 500,
                    Economy: 500,
                    Size: 1,
                    Infulence: 0,
                    Happiness: 500,
                    Aggressiveness: aggressiveness,
                }
                console.log('The country of ' + name + ' that is under ' + goverement);
                console.log('At ' + xcord + ' ' + ycord);
                console.log('________________________________________');

            }else{
                i -= 1;

            }

            


        }
        console.log('Finished Writing Countries');

    }else{
        
        console.log('WARNING! Cant fit countries into map: Please decrease country count or increase map size')
    }
  

}

function WriteGrid(){
    const grid = document.querySelector('.grid');
    const calculatedFontSize = (config.mapZoom * 0.2085)

    grid.style.setProperty('--rows', map[0].length)
    grid.style.setProperty('--columns', map.length); 
    grid.style.setProperty('--Width', (map[0].length * config.mapZoom) + 'px');
    grid.style.setProperty('--Height', (map.length * config.mapZoom) + 'px');

    for (let i = 0; i < map[0].length; i++) {
        for (let j = 0; j < map.length; j++) {
            const cell = document.createElement('div');

            map[j][i].Resources.basic = Math.floor(Math.random() * 100);
            if (config.debuging_mode){
                cell.style.backgroundColor = `rgb(225, 225, ${-map[j][i].Resources.basic + 225})`;
            }

            cell.style.fontSize = calculatedFontSize + 'px';
            cell.classList.add('cell');
            cell.textContent = map[j][i].country;
            grid.appendChild(cell);
        }
    }
    const container = document.body.querySelector('.info-text');

    container.innerHTML = '';
  
    for (let i = 0; i < countries.length; i++) {
      const line = document.createElement('div');
      line.textContent = `${countries[i].Name}: ${countries[i].Population}`;
      line.classList.add('line'); 
  

      container.appendChild(line);
    };
}
function UpdateScreen() {


    const container = document.body.querySelector('.info-text');

    container.innerHTML = '';
    for (let i = 0; i < countries.length; i++) {
        
        
        const line = document.createElement('div');

        let resourcesKey = Object.keys(countries[i].Resources)

        let _resources = ' '

        for (let j = 0; j < resourcesKey.length; j++){

            _resources = `${_resources} ${resourcesKey[j]}: ${countries[i].Resources[resourcesKey[j]]} | `;
    
        }


        line.textContent = `${countries[i].Name}: Population (${countries[i].Population}) Resources: ${_resources} `;
        line.classList.add('line');
    

        container.appendChild(line);
      };
}


function doNothing(){
    //does nothing
}




GenerateMap();
await generate_countries();
doNothing();
CountryActivity.BeginActivity();

if (config.debuging_mode){
    console.log('Debuging is Active:');
    console.log('2d');
    console.log( map);
    console.log('country list');
    console.log(countries);
}

export {WriteGrid, map, countries, UpdateScreen}