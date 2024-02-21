import * as config from './config.js';
let countries = {};
let map = [

];

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



function drawMap(){
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
            

            let xcord = Math.floor(Math.random() * config.Xsize);
            let ycord = Math.floor(Math.random() * config.Ysize);


            if (map[xcord][ycord].country == ' '){

                map[xcord][ycord].country = Name;
                map[xcord][ycord].index = i;

                countries[i] = {
                    name: Name,
                    xcord: xcord,
                    ycord: ycord,
                }
                console.log('The country of ' + Name);
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



drawMap();
generate_countries();

if (config.debuging_mode){
    console.log('Debuging is Active:');
    console.log(map);
    console.log(countries);
}