const heroes = [
    "Superman", "Batman", "Wonder Woman", "Spider-Man", "Iron Man",
    "Captain America", "Thor", "Hulk", "Black Panther", "Doctor Strange",
    "Scarlet Witch", "The Flash", "Green Lantern", "Aquaman", "Martian Manhunter",
    "Cyborg", "Shazam", "Hawkeye", "Black Widow", "Wolverine",
    "Deadpool", "Daredevil", "Silver Surfer", "Ghost Rider", "Ant-Man",
    "The Wasp", "Luke Cage", "Iron Fist", "Jessica Jones", "Star-Lord",
    "Groot", "Rocket Raccoon", "Drax", "Gamora", "Nova",
    "Moon Knight", "Adam Warlock", "Blue Beetle", "Zatanna", "Raven",
    "Beast Boy", "Nightwing", "Red Hood", "Supergirl", "Batgirl",
    "Green Arrow", "John Constantine", "Doctor Fate", "Spawn", "Hellboy",
    "Sentry", "The Spectre", "Etrigan the Demon", "Hawkman", "Hawkgirl",
    "Mister Miracle", "Big Barda", "Orion", "Black Bolt", "Medusa",
    "Cyclops", "Jean Grey", "Storm", "Colossus", "Psylocke",
    "Gambit", "Rogue", "Iceman", "Professor X", "Magneto",
    "Namor", "Shang-Chi", "The Atom", "Booster Gold", "Blue Marvel",
    "Vixen", "Static Shock", "Captain Marvel", "Ms. Marvel", "Squirrel Girl",
    "Moonstar", "Cloak", "Dagger", "Speedball", "Quicksilver",
    "Vision", "Falcon", "Winter Soldier", "America Chavez", "Bishop",
    "Elsa Bloodstone", "Mister Fantastic", "The Human Torch", "The Thing", "Invisible Woman",
    "She-Hulk", "Ironheart", "X-23", "Man-Thing", "Beta Ray Bill",
    "Captain Britain", "Power Girl", "Black Canary", "Firestorm", "Doctor Voodoo"
  ];
   
  
function generateHeroName(){
    let randomIndex = Math.floor(Math.random()*heroes.length);
    let pickedHero = heroes[randomIndex];
    document.getElementById("HeroName").innerHTML=`You got the superhero ${pickedHero}`;
}