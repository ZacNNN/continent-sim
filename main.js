import * as config from './config.js';
import * as CountryActivity from './countryActivity.js';
import * as mapJS from './map.js';


let year = 200;
let month = 1;

let countries = [

];
const grid = document.body.querySelector('.grid');


let CountryResources = {

    Food: 500,
    Materials: 0,
    AdvMaterials: 0,
}




const calculatedFontSize = (config.mapZoom * 0.2085)






function WriteGrid(){

    const map = mapJS.map;
    var gridContainer = document.body.querySelector('.grid-container');


    gridContainer.style.setProperty('--X', map[0].length);
    gridContainer.style.setProperty('--Y', map.length);
    gridContainer.style.setProperty('--Xsize', `${config.Xsize * 12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--Ysize', `${config.Ysize * 12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--XsizeImg', `${12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--YsizeImg', `${12.8 * config.mapZoom}px`);




    for (let i = 0; i < mapJS.map[0].length; i++){
        for (let j = 0; j < mapJS.map.length; j++){
            const grid = document.createElement('div');

            grid.className = 'grid'
            grid.id = `grid-${j}-${i}`

            grid.textContent = (map[j][i].country)
            grid.style.fontSize = `${3*config.mapZoom}px`


            grid.style.backgroundImage = `url('./img/${map[j][i].Terrain}.png')`;




            gridContainer.appendChild(grid);
        }
    }
    
    if (config.debuging_mode){
        console.log('Debuging is Active:');
        console.log('2d');
        console.log(mapJS.map);
        console.log('country list');
        console.log(countries);
    }

}

function UpdateScreen() {

    const map = mapJS.map;
    const container = document.body.querySelector('.info-text');
   
    month += 1;
    if(month>=13){
        month = 1;
        year += 1;
    }


    container.innerHTML = '';

    const yearline = document.createElement('div');

    yearline.textContent = `Year: ${year} Month: ${month}`
    container.appendChild(yearline);
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




doNothing();
CountryActivity.BeginActivity();



export {WriteGrid, countries, UpdateScreen, CountryResources}