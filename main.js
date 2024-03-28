import * as config from './config.js';
import * as CountryActivity from './countryActivity.js';
import * as mapJS from './map.js';

//world clock vars
let year = 200;
let month = 1;


let menu = 'country_list';

//the array to hold all the countries
let countries = [

];




//The starting resources for all the countries
let CountryResources = {

    Food: 500,
    Materials: 0,
    AdvMaterials: 0,
}









//To Draw the map and other menus onto the screen
function WriteGrid(){

    const map = mapJS.map;
    var gridContainer = document.body.querySelector('.grid-container');

    //setting the dynamic style properties
    gridContainer.style.setProperty('--X', map[0].length);
    gridContainer.style.setProperty('--Y', map.length);
    gridContainer.style.setProperty('--Xsize', `${config.Xsize * 12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--Ysize', `${config.Ysize * 12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--XsizeImg', `${12.8 * config.mapZoom}px`);
    gridContainer.style.setProperty('--YsizeImg', `${12.8 * config.mapZoom}px`);



    //creating the map
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
    

    //useless debug stufff
    if (config.debuging_mode){
        console.log('Debuging is Active:');
        console.log('2d');
        console.log(mapJS.map);
        console.log('country list');
        console.log(countries);
    }

}


//refreshes the screen for update information
function UpdateScreen() {

    const map = mapJS.map;
    const container = document.body.querySelector('.info-text');
   

    //world clock
    month += 1;
    if(month>=13){
        month = 1;
        year += 1;
    }


    container.innerHTML = '';

    const yearline = document.createElement('div');

    yearline.textContent = `Year: ${year} Month: ${month}`
    container.appendChild(yearline);
    const button = document.createElement('button');


    //button to eventually switch between menus
    button.classList.add('info-button');


    //top left menu
    container.appendChild(button)
    for (let i = 0; i < countries.length; i++) {

        if (menu=='country_list'){
            if (countries[i] != undefined){
            
                //the information for each country
                const line = document.createElement('div');




                line.textContent = `${countries[i].Name}: Population ${countries[i].Population}`;
                line.classList.add('line');
            
            container.appendChild(line);
            }
        } else{
            
        }
    

    }
    //updates the names for the grid
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
    //does nothing bahahaha
}




doNothing();
//once script is loaded the country activity 
CountryActivity.BeginActivity();


//exports
export {WriteGrid, countries, UpdateScreen, CountryResources}