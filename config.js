



  const country_nouns = [
      "Alden", "Brunwick", "Clynton", "Darnley", "Estford", 
      "Fairbridge", "Grafton", "Hartland", "Irmsby", "Jolton", 
      "Kingsford", "Latchmere", "Morley", "Northam", "Oakley",
      "Pennford", "Quailington", "Rutland", "Stanswick", "Tynedale", 
      "Ulmsford", "Verley", "Westbrooke", "Exford", "Yorkton",
      "Bainbridge", "Cromley", "Dunsmore", "Elmsworth", "Farnham",
      "Gainsborough", "Helmsby", "Iverton", "Joyford", "Linton", 
      "Moreton", "Nunwick", "Olmsby", "Prenford", "Quenton",
      "Ravenshore", "Shelton", "Tadworth", "Uxbridge", "Vailton",
      "Winford", "Exley", "Yorlington", "Baynton", "Drakeshire", 
  ]

  const country_adjectives = [
      "Royal", " ", " ", "Greater", "Lesser", "New", "Old", 
      "Upper", "Lower", "West", "East", "North", 
      "South", "Inner", "Outer", "Grand", "Broad",
      "Little", "Big", "Fine", "High", "Deep", 
      "Red", "Golden", "Silent", "Far", "Near", 
      "Green", "White", "Black", "Rich", "Fair",
      "Bold", "Long", "Clear", "Dark", "Bright",
      "Free", "Strong", "Swift", "Proud", "True",
      "Cold", "Warm", "Blue", "Brave", "Great", 
      "Twin", "Noble", "Merry", "Sunny", "Cross", "Big", " ", " ", " "
    ]




//map 
  const mapSeed =  Math.floor(Math.random()*99999);  //84380
  const Xsize =128;
  const Ysize = 128;
  const mapZoom = 1;
  const waterRoughness = 0.05;
  const TerrainRoughness = 0.04;
  const waterChance = 30;
  const TerrainChance = {
    mountain: 0,
    snow: 0,
    forest: 0,

  }




//simulation
  const SimulationSpeed = 2;  //seconds
  
//country
const country_count = 20;
const foodProduce = {
  field: 25,
  forest: 15,
  snow: 5,
  mountain: 0,
  water: 0,
}


//other 
const debuging_mode = false;


export {country_adjectives, country_nouns, country_count, Xsize, Ysize, debuging_mode, SimulationSpeed, TerrainChance, foodProduce, mapZoom, waterChance, waterRoughness,mapSeed, TerrainRoughness};