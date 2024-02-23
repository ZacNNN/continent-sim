import * as config from './config.js';
config.Refresh()
let countries = {

};
        //hello chrome
let map = {};

let Resources = {
    Ore: 5,
    Fauna: 5,
}
let map_tile = {
    country: ' ',
    Terrain: ' ',
    Resources: Resources,
    index: -1
}



function GenerateMap(){
    console.log('Drawing Map for ' + (config.Xsize * config.Ysize) + ' tiles')

    map = Array(config.Xsize)
    .fill()
    .map(() => Array(config.Ysize).fill().map(() => ({ ...map_tile })));
    
    console.log('Completed drawing ' + (map.length * map[0].length) + ' tiles');
}

function generate_countries(){
    if (config.country_count <= (map.length * map[0].length)){
        for (let i = 0; i < config.country_count; i++) {
            let noun = config.country_nouns[Math.floor(Math.random() * config.country_nouns.length)];
            let adjectives = config.country_adjectives[Math.floor(Math.random() * config.country_adjectives.length)];
            let Name = adjectives + ' ' + noun;
            let goverement;

            let xcord = Math.floor(Math.random() * config.Xsize);
            let ycord = Math.floor(Math.random() * config.Ysize);

            if(Math.floor(Math.random()* 2) == 1){
                 goverement = 'Democracy';
            }else{
                 goverement = 'Facism';
            }


            if (map[xcord][ycord].country == ' '){

                map[xcord][ycord].country = Name;
                map[xcord][ycord].index = i;

                countries[i] = {
                    name: Name,
                    goverement: goverement,
                    cord: [
                        xcord + ' ' + ycord
                    ]
                        
                }
                console.log('The country of ' + Name + ' that is under ' + goverement);
                console.log('At ' + xcord + ' ' + ycord);
                console.log('________________________________________');
            }else{

                i = i-1
            }

            


        }
        console.log('Finished Writing Countries');
    }else{
        
        console.log('WARNING! Cant fit countries into map: Please decrease country count or increase map size')
    }
  

}

function WriteGrid(){
    const grid = document.querySelector('.grid');
    const calcaulatedFontSize = (config.mapZoom * 0.2085)

    grid.style.setProperty('--rows', map[0].length);
    grid.style.setProperty('--columns', map.length);
    grid.style.setProperty('--Height',  (map.length* config.mapZoom) + 'px');
    grid.style.setProperty('--Width', (map[0].length * config.mapZoom) + 'px');


    for (let i = 0; i < map.length; i++) {
     for (let j = 0; j < map[i].length; j++) {
      const cell = document.createElement('div');

 

      cell.style.fontSize = calcaulatedFontSize + 'px';
      cell.classList.add('cell');
      cell.textContent = map[i][j].country;
      grid.appendChild(cell);
  }
}
}


function doNothing(){
    //does nothing
}




GenerateMap();
generate_countries();
doNothing();

if (config.debuging_mode){
    console.log('Debuging is Active:');
    console.log('2d');
    console.log( map);
    console.log('country list');
    console.log(countries);
}

export {WriteGrid}