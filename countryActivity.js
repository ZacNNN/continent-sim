import * as main from "./main.js";
import * as config from "./config.js";


function Update() {
    for (let i = 0; i < main.countries.length; i++){
        if (Math.floor(Math.random() *2 )=2){
            main.countries[i].Population = main.countries[i].Population + Math.floor(Math.random() * 10)        
            
        }else{
            console.log('The country of ' + main.countries[i].name + ' is now at ' + main.countries[i].Population);
            console.log('________________________________________');
        }
    }
        

    
}

function BeginActivity(){
    const _Update = setInterval(Update(), config.SimulationSpeed * 1000);
}

export {BeginActivity}