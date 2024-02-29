import * as main from "./main.js";
import * as config from "./config.js";


function Update() {
    UpdatePopulation();

}

function UpdatePopulation(){
    for (let i = 0; i < main.countries.length; i++) {
  
        const populationChange = (Math.random()* 0.008) + 0.998

        main.countries[i].Population = Math.floor(main.countries[i].Population * populationChange);
        console.log('The country of ' + main.countries[i].name + ' is now at ' + main.countries[i].Population + ' people' );
        console.log('________________________________________');  
    }
    main.UpdateScreen()

}

function BeginActivity(){

    const update = setInterval(() => Update(), config.SimulationSpeed * 1000);
    console.log(main.countries.length);

}

export {BeginActivity}