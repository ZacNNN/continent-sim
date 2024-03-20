



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
  const Xsize =10;
  const Ysize = 10;
  const mapZoom = 5;
  const TerrainChance = {
    moutain: 1,
    water: 5,
    snow: 2,
    forest: 0,

  }




//simulation
  const SimulationSpeed = 1.2;  //seconds
  
//country
const country_count = 50;
const foodProduce = {
  field: 25,
  forest: 15,
  snow: 5,
  moutain: 25,
}


//other 
const debuging_mode = true;


export {country_adjectives, country_nouns, country_count, Xsize, Ysize, debuging_mode, SimulationSpeed, TerrainChance, foodProduce, mapZoom};