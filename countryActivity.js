import * as main from "./main.js";
import * as config from "./config.js";
import * as mapJS from "./map.js";

function Update() {

    UpdatePopulation();

    CivilActivity();
    main.UpdateScreen();

}


function generate_countries(){

    if (config.country_count <= (mapJS.map.length * mapJS.map[0].length)){
        for (let i = 0; i < config.country_count; i++) {
           
           
            let noun = config.country_nouns[Math.floor(Math.random() * config.country_nouns.length)];
            let adjectives = config.country_adjectives[Math.floor(Math.random() * config.country_adjectives.length)];
            let population = 200 + Math.floor(Math.random() * 1500);
            let name = adjectives + ' ' + noun;
            let goverement;

            let xcord = Math.floor(Math.random() * config.Xsize);
            let ycord = Math.floor(Math.random() * config.Ysize);
            let aggressiveness = 0;

            if(Math.floor(Math.random()* 2) == 1){
                 goverement = 'Democracy';
                 aggressiveness = Math.floor(Math.random()* 150) + 15

            }else{
                 goverement = 'Facism';
                 aggressiveness = Math.floor(Math.random()* 300) + 150
                 
            }

                if (mapJS.map[xcord][ycord].index == -1){
                    mapJS.map[xcord][ycord].country = name;
                    mapJS.map[xcord][ycord].index = i;

                
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
            
                }else{
                    i -= 1;

                }
        }
        console.log('Finished Writing Countries');
        main.WriteGrid();

    }else{
        
        console.log('WARNING! Cant fit countries into map: Please decrease country count or increase map size')
    }

}

function UpdatePopulation(){
    
    
    
    for (let i = 0; i < main.countries.length; i++) {
        if(main.countries[i] != undefined){
            const populationChange = (Math.random()* 0.02) + 1


            if (config.debuging_mode){
                console.log('The country of ' + main.countries[i].Name + ' is now at ' + main.countries[i].Population + ' people' );
            }


            if(main.countries[i].Resources.Food == 0){

                main.countries[i].Population =  Math.floor(main.countries[i].Population * 0.8);
            }else{

                main.countries[i].Population = Math.floor((main.countries[i].Population * populationChange) + 1);
            }

            if (main.countries[i].Population <= 0){
                RemoveCountry(i);
            }
        }
    }

}

function CivilActivity(){
    for (let i = 0; i < main.countries.length; i++){
       if (main.countries[i] != undefined){
            let foodCons = Math.floor(main.countries[i].Population * 0.1);

            const XYcord = main.countries[i].cord[0];
            const XYcordArray = XYcord.split(" ")
            let foodGrow = 0;
           
         
            const Terrain = mapJS.map[XYcordArray[0]][XYcordArray[1]].Terrain;

            foodGrow = config.foodProduce[Terrain];





            
            const foodChange = ((main.countries[i].Resources.Food - foodCons) + foodGrow);
            main.countries[i].Resources.Food = foodChange;
            if (main.countries[i].Resources.Food <= 0){
                main.countries[i].Resources.Food = 0;
            }



            
       }

    }
}

function RemoveCountry(index){



    const XYcord = main.countries[index].cord[0];
    const XYcordArray = XYcord.split(" ")

    mapJS.map[XYcordArray[0]][XYcordArray[1]].index = -1;




    main.countries[index] = undefined;



}

function BeginActivity(){


    const update = setInterval(() => Update(), config.SimulationSpeed * 1000);

}

export {BeginActivity, generate_countries}