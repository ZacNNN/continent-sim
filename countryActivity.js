import * as main from "./main.js";
import * as config from "./config.js";


function Update() {
    UpdatePopulation();
    CivilActivity();
    main.UpdateScreen();

}


async function generate_countries(){
    if (config.country_count <= (main.map.length * main.map[0].length)){
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
           if (main.map[xcord][ycord].Terrain != 'water'){
                if (main.map[xcord][ycord].index == -1){
                    main.map[xcord][ycord].country = name;
                    main.map[xcord][ycord].index = i;

                
                    main.countries[i] = {
                        Name: name,
                        Goverement: goverement,
                        cord: [
                            xcord + ' ' + ycord
                        ],
                        Population: population,
                        Resources:  {...main.CountryResources},
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
                }
                }else{
                    i -= 1;

                }
        }
        console.log('Finished Writing Countries');

    }else{
        
        console.log('WARNING! Cant fit countries into map: Please decrease country count or increase map size')
    }
}

function UpdatePopulation(){
    
    
    
    for (let i = 0; i < main.countries.length; i++) {
        if(main.countries[i] != undefined){
            const populationChange = (Math.random()* 0.008) + 0.998

            main.countries[i].Population = Math.floor(main.countries[i].Population * populationChange);
            console.log('The country of ' + main.countries[i].Name + ' is now at ' + main.countries[i].Population + ' people' );
            console.log('________________________________________');  

            if(main.countries[i].Resources.Food == 0){

                main.countries[i].Population =  Math.floor(main.countries[i].Population * 0.8);
            }

            if (main.countries[i].Population <= 0){
                RemoveCountry(i);
            }
        }
    }

}

function CivilActivity(){
    for (let i = 0; i < main.countries.length; i++){
        let foodChange = Math.floor(main.countries[i].Resources.Food - (main.countries[i].Population * 0.1));
        if (foodChange <= 0){
            foodChange = 0;
        }

        main.countries[i].Resources.Food = foodChange;


    }
}

function RemoveCountry(index){
    main.countries[index] = undefined;
}

function BeginActivity(){

    const update = setInterval(() => Update(), config.SimulationSpeed * 1000);
    console.log(main.countries.length);

}

export {BeginActivity, generate_countries}