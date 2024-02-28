import * as main from "./main.js";
import * as config from "./config.js";


function Update() {
    ChangePopulation();

}

function ChangePopulation(){
    for (let i = 0; i < main.countries.length; i++) {
  
        const populationChange = (Math.random()* 0.08) + 0.98

        main.countries[i].Population = Math.floor(main.countries[i].Population * populationChange);
        console.log('The country of ' + main.countries[i].name + ' is now at ' + main.countries[i].Population + ' people' );
        console.log('________________________________________');  
    }
}

function BeginActivity(){

    const update = setInterval(() => Update(), 2000);
    console.log(main.countries.length);

}

export {BeginActivity}