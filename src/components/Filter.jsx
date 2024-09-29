import { useEffect, useState } from "react"
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css';
import SearchDropdown from "./SearchDropdown";


export default function Filter() {

    const [data, setData] = useState({
        types: ["Artifact", "Battle", "Conspiracy", "Creature", "Dragon", "Elemental", "Enchantment", "Goblin", "Hero", "instant", "Instant", "Jaguar", "Kindred", "Knights", "Land", "Legend", "Phenomenon", "Plane", "Planeswalker", "Scheme", "Sorcery", "Stickers", "Summon", "Tribal", "Universewalker", "Vanguard", "Wolf"],
        subtypes: ["Abian", "Adventure", "Advisor", "Aetherborn", "Ajani", "Alara", "Alfava Metraxis", "Alicorn", "Alien", "Ally", "Aminatou", "Amonkhet", "and/or", "Androzani Minor", "Angel", "Angrath", "Antausia", "Antelope", "Apalapucia", "Ape", "Arcane", "Arcavios", "Archer", "Archon", "Arkhos", "Arlinn", "Armadillo", "Art", "Artificer", "Ashiok", "Assassin", "Assembly-Worker", "Astartes", "Atog", "Attraction", "Aura", "Aurochs", "Autobot", "Avatar", "Azgol", "Azra", "Background", "Baddest,", "Badger", "Bahamut", "Barbarian", "Bard", "Basilisk", "Basri", "Bat", "Bear", "Beast", "Beaver", "Beeble", "Beholder", "Belenon", "Berserker", "Biggest,", "Bird", "Boar", "B.O.B.", "Bobblehead", "Bolas", "Bolas's Meditation Realm", "Brainiac", "Bringer", "Brushwagg", "Bureaucrat", "Byode", "Calix", "Camel", "Capenna", "Capybara", "Carrier", "Cartouche", "Case", "Cat", "Cave", "Centaur", "Cephalid", "Chameleon", "Chandra", "Chicken", "Child", "Chimera", "Chorus", "Citizen", "Clamfolk", "Class", "Cleric", "Cloud", "Clown", "Clue", "Cockatrice", "Comet", "Construct", "Contraption", "Cow", "Coward", "Coyote", "Crab", "Cridhe", "Crocodile", "C'tan", "Curse", "Custodes", "Cyberman", "Cyborg", "Cyclops", "Dack", "Dakkon", "Dalek", "Daretti", "Darillium", "Dauthi", "Davriel", "Deb", "Deer", "Demigod", "Demon", "Desert", "Designer", "Detective", "Devil", "Dihada", "Dinosaur", "Djinn", "Doctor", "Dog", "Dominaria", "Domri", "Donkey", "Dovin", "Dragon", "Drake", "Dreadnought", "Drone", "Druid", "Dryad", "Duck", "Dungeon", "Dwarf", "Earth", "Echoir", "Efreet", "Egg", "Elder", "Eldraine", "Eldrazi", "Elemental", "Elemental?", "Elephant", "Elf", "Elk", "Ellywick", "Elminster", "Elspeth", "Elves", "Employee", "Equilor", "Equipment", "Ergamon", "Ersta", "Estrid", "Etiquette", "Eye", "Fabacin", "Faerie", "Ferret", "Fiora", "Fire", "Fish", "Flagbearer", "Food", "Forest", "Fortification", "Fox", "Fractal", "Freyalise", "Frog", "Fungus", "Gallifrey", "Gamer", "Gargantikar", "Gargoyle", "Garruk", "Gate", "Giant", "Gideon", "Gith", "Gnoll", "Gnome", "Goat", "Gobakhan", "Goblin", "God", "Golem", "Gorgon", "Grandchild", "Gremlin", "Griffin", "Grist", "Guest", "Guff", "Gus", "Hag", "Halfling", "Harpy", "Hatificer", "Head", "Hellion", "Hero", "Hippo", "Hippogriff", "Homarid", "Homunculus", "Horror", "Horse", "Horsehead Nebula", "Huatli", "Human", "Hydra", "Hyena", "Igpay", "Ikoria", "Illusion", "Imp", "Incarnation", "Innistrad", "Inquisitor", "Insect", "Inzerva", "Iquatana", "Ir", "Island", "Ixalan", "Jace", "Jackal", "Jared", "Jaya", "Jellyfish", "Jeska", "Juggernaut", "Kaito", "Kaladesh", "Kaldheim", "Kamigawa", "Kandoka", "Kangaroo", "Karn", "Karsus", "Kasmina", "Kavu", "Kaya", "Kephalai", "Key", "Killbot", "Kinshala", "Kiora", "Kirin", "Kithkin", "Knight", "Kobold", "Kolbahan", "Kor", "Koth", "Kraken", "Kylem", "Kyneth", "Lady", "Lair", "Lamia", "Lammasu", "Leech", "Lesson", "Leviathan", "Lhurgoyf", "Licid", "Liliana", "Lizard", "Lobster", "Locus", "Lolth", "Lorwyn", "Lukka", "Luvion", "Mammoth", "Manticore", "Mars", "Master", "Masticore", "Mercadia", "Mercenary", "Merfolk", "Metathran", "Mime", "Mine", "Minion", "Minotaur", "Minsc", "Mirrodin", "Mite", "Moag", "Mole", "Monger", "Mongoose", "Mongseng", "Monk", "Monkey", "Moon", "Moonfolk", "Mordenkainen", "Mount", "Mountain", "Mouse", "Mummy", "Muraganda", "Mutant", "Myr", "Mystic", "Naga", "Nahiri", "Narset", "Nastiest,", "Nautilus", "Necron", "Necros", "Nephilim", "New Earth", "New Phyrexia", "Nightmare", "Nightstalker", "Niko", "Ninja", "Nissa", "Nixilis", "Noble", "Noggle", "Nomad", "Nymph", "Octopus", "Ogre", "Oko", "Ooze", "Orc", "Orgg", "Otter", "Ouphe", "Outside Mutter's Spiral", "Ox", "Oyster", "Pangolin", "Paratrooper", "Peasant", "Pegasus", "Penguin", "Performer", "Pest", "Phelddagrif", "Phoenix", "Phyrexia", "Phyrexian", "Pilot", "Pirate", "Plains", "Plant", "Pony", "Porcupine", "Possum", "Power-Plant", "Powerstone", "Praetor", "Primarch", "Processor", "Proper", "Pyrulea", "Quintorius", "Rabbit", "Rabiah", "Raccoon", "Ral", "Ranger", "Rat", "Rath", "Ravnica", "Rebel", "Reflection", "Regatha", "Rhino", "Rigger", "Robot", "Rogue", "Rowan", "Rune", "Sable", "Saga", "Saheeli", "Salamander", "Samurai", "Samut", "Sarkhan", "Satyr", "Scarecrow", "Scientist", "Scorpion", "Scout", "Segovia", "Serpent", "Serra", "Serra’s Realm", "Shade", "Shadowmoor", "Shaman", "Shandalar", "Shapeshifter", "Shark", "Sheep", "Shenmeng", "Ship", "Shrine", "Siege", "Siren", "Sivitri", "Skaro", "Skeleton", "Slith", "Sliver", "Sloth", "Slug", "Snail", "Snake", "Soldier", "Soltari", "Sorin", "Spacecraft", "Spawn", "Specter", "Spellshaper", "Sphere", "Sphinx", "Spider", "Spike", "Spirit", "Sponge", "Spy", "Squid", "Squirrel", "Starfish", "Surrakar", "Svega", "Swamp", "Synth", "Szat", "Tamiyo", "Tarkir", "Tasha", "Teferi", "Teyo", "Tezzeret", "Thalakos", "The", "The Abyss", "The Dalek Asylum", "The Library", "Theros", "Thopter", "Thrull", "Tibalt", "Tiefling", "Time", "Time Lord", "Tower", "Townsfolk", "Trap", "Treasure", "Treefolk", "Trenzalore", "Trilobite", "Troll", "Turtle", "Tyranid", "Tyvar", "Ugin", "Ulgrotha", "Unicorn", "Unknown Planet", "Urza", "Urza's", "Valla", "Vampire", "Vampyre", "Varmint", "Vedalken", "Vehicle", "Venser", "Viashino", "Villain", "Vivien", "Volver", "Vraska", "Vronos", "Vryn", "Waiter", "Wall", "Walrus", "Wanderer", "Warlock", "Warrior", "Weird", "Werewolf", "Whale", "Wildfire", "Will", "Windgrace", "Wizard", "Wolf", "Wolverine", "Wombat", "Worm", "Wraith", "Wrenn", "Wrestler", "Wurm", "Xenagos", "Xerex", "Yanggu", "Yanling", "Yeti", "Zariel", "Zendikar", "Zhalfir", "Zombie", "Zubera"],
        supertypes: ["Basic", "Host", "Legendary", "Ongoing", "Snow", "World"],
        formats: [
            "Amonkhet Block",
            "Battle for Zendikar Block",
            "Classic",
            "Commander",
            "Extended",
            "Freeform",
            "Ice Age Block",
            "Innistrad Block",
            "Invasion Block",
            "Kaladesh Block",
            "Kamigawa Block",
            "Khans of Tarkir Block",
            "Legacy",
            "Lorwyn-Shadowmoor Block",
            "Masques Block",
            "Mirage Block",
            "Mirrodin Block",
            "Modern",
            "Odyssey Block",
            "Onslaught Block",
            "Prismatic",
            "Ravnica Block",
            "Return to Ravnica Block",
            "Scars of Mirrodin Block",
            "Shadows over Innistrad Block",
            "Shards of Alara Block",
            "Singleton 100",
            "Standard",
            "Tempest Block",
            "Theros Block",
            "Time Spiral Block",
            "Tribal Wars Legacy",
            "Un-Sets",
            "Urza Block",
            "Vintage",
            "Zendikar Block"
        ]
    })


    useEffect(() => {

        var slider = document.getElementById('cmc-slider');

        // noUiSlider.create(slider, {
        //     start: [20, 80],
        //     connect: true,
        //     range: {
        //         'min': 0,
        //         'max': 100
        //     }
        // });

    }, [])


    const renderColors = ['black', 'red', 'green', 'blue', 'white', 'colorless'].map(color =>
        <div key={color} className="d-flex flex-column align-items-center">
            <img className="mana-icon mb-1" src={`icons/${color}.svg`} />
            <input className="form-check-input color-checkbox" type="checkbox" value="" id="flexCheckDefault" />
        </div>
    )


    const renderTypes = (data) => data.map(item =>
        <div key={item} className="form-check">
            <input className="form-check-input" type="checkbox" value={item} id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {item}
            </label>
        </div>
    )

    return (<div>

        <div className="d-flex justify-content-center gap-2">
            {renderColors}
        </div>

        <div className="accordion accordion-flush filter-accordion mt-5">
            <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Types
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        {renderTypes(data.types)}
                    </div>
                </div>
            </div>
        </div>

        <SearchDropdown />

        <div className="accordion accordion-flush filter-accordion">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Supertypes
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        {renderTypes(data.supertypes)}
                    </div>
                </div>
            </div>
        </div>


        <div id="cmc-slider"></div>
        <div id="power-slider"></div>
        <div id="toughness-slider"></div>

        <div>artist</div>
        <div>legalities</div>
    </div>)
}