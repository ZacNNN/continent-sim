function Refresh(){

}

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
      "Winford", "Exley", "Yorlington", "Baynton", "Drakeshire"
  ]

  const country_adjectives = [
      "Royal", "Greater", "Lesser", "New", "Old", 
      "Upper", "Lower", "West", "East", "North", 
      "South", "Inner", "Outer", "Grand", "Broad",
      "Little", "Big", "Fine", "High", "Deep", 
      "Red", "Golden", "Silent", "Far", "Near", 
      "Green", "White", "Black", "Rich", "Fair",
      "Bold", "Long", "Clear", "Dark", "Bright",
      "Free", "Strong", "Swift", "Proud", "True",
      "Cold", "Warm", "Blue", "Brave", "Great", 
      "Twin", "Noble", "Merry", "Sunny", "Cross"
    ]

  const country_count = 50;

  const Xsize =10;
  const Ysize = 10;
  const mapZoom = 50; //50 is recomended
  const debuging_mode = true;

export {country_adjectives, country_nouns, country_count, Xsize, Ysize, debuging_mode, mapZoom, Refresh};