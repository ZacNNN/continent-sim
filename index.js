import * as config from './config.js';
let countries = {};
let map = [

];

let Resources = {
    gold: 5,
    Iron: 5,
}
let map_tile = {
    country: ' ',
    Terrain: ' ',
    Resources: Resources,
}



async function drawMap(){
    console.log('Drawing Map for ' + (config.Xsize * config.Ysize) + ' tiles')

    for (let i = 0; i < config.Xsize; i++) {
        const Y = [];
        for (let j = 0; j < config.Ysize; j++) {
          Y.push(map_tile);
        }
        map.push(Y);
      }
    console.log('Completed drawing ' + (map.length * map[0].length) + ' tiles');
}

function generate_countries(){
    if (config.country_count <= (map.length * map[0].length)){
        for (let i = 0; i < config.country_count; i++) {
            let noun = config.country_nouns[Math.floor(Math.random() * config.country_nouns.length)];
            let adjectives = config.country_adjectives[Math.floor(Math.random() * config.country_adjectives.length)];
            let Name = adjectives + ' ' + noun;
            

            let xcord = Math.floor(Math.random() * config.Xsize);
            let ycord = Math.floor(Math.random() * config.Ysize);
            
            if (!map[xcord][ycord].country == ' '){
                console.log('land occupied')
            }else{
              
                map[xcord][ycord].country = Name;

                countries[i] = {
                    name: Name,
                    xcord: xcord,
                    ycord: ycord,
                }
            }

            console.log('loop done')


        }
    }else{
        
        console.log('WARNING! Cant fit countries into map: Please decrease country count or increase map size')
    }
  

}



await drawMap();
generate_countries();

if (config.debuging_mode){
    console.log('Debuging is Active:');
    console.log(map);
    console.log(countries);
}