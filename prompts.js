// The list of prompts the game cycles through. Add or remove lines freely.
// (The Roblox script has its own copy of this list at the top of RarestAnswer_ServerScript.lua.
//  If you change one, change the other so your tests match the real game.)

export const PROMPTS = [
  "Name a fruit",
  "Name an animal",
  "Name a color",
  "Name a country",
  "Name something you find in a kitchen",
  "Name a job",
  "Name a sport",
  "Name something you can ride",
  "Name a musical instrument",
  "Name a board game",
  "Name a vegetable",
  "Name a type of tree",
  "Name something you find at the beach",
  "Name a school subject",
  "Name an item of clothing",
  "Name a farm animal",
  "Name something that is cold",
  "Name a pizza topping",
  "Name a candy",
  "Name a type of weather",
  "Name a part of the body",
  "Name a flower",
  "Name something you find in a bathroom",
  "Name a type of shoe",
  "Name a city",
  "Name an animal that lives in the ocean",
  "Name a hobby",
  "Name something with wheels",
  "Name a breakfast food",
  "Name something you find in a park",
];

// ---------------------------------------------------------------------------
// ANSWER LISTS, rated by how rare they are:
//   1 = common   (most people would say it)
//   2 = uncommon (some people would think of it)
//   3 = rare     (very few people would think of it)
// The free judge uses these to check an answer fits the prompt and to rate its rarity.
// The lists don't have to be complete. Add more words any time (singular is fine,
// plurals and small typos are handled automatically).
// ---------------------------------------------------------------------------
export const ANSWER_BANK = {
  "Name a fruit": {
    1: ["apple", "banana", "orange", "grape", "strawberry", "watermelon", "pineapple", "cherry", "lemon"],
    2: ["mango", "kiwi", "peach", "pear", "plum", "blueberry", "raspberry", "pomegranate", "apricot", "cantaloupe", "lime", "coconut", "papaya", "cranberry"],
    3: ["soursop", "dragon fruit", "lychee", "rambutan", "durian", "persimmon", "starfruit", "jackfruit", "quince", "guava", "fig", "mangosteen"],
  },
  "Name an animal": {
    1: ["dog", "cat", "lion", "tiger", "elephant", "monkey", "bear", "horse"],
    2: ["giraffe", "zebra", "kangaroo", "penguin", "wolf", "fox", "dolphin", "rabbit", "panda", "gorilla", "deer", "snake"],
    3: ["pangolin", "axolotl", "okapi", "aardvark", "capybara", "quokka", "platypus", "tapir", "fossa", "binturong"],
  },
  "Name a color": {
    1: ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white"],
    2: ["brown", "gray", "teal", "turquoise", "gold", "silver", "navy", "maroon", "magenta", "lavender", "beige"],
    3: ["chartreuse", "vermilion", "periwinkle", "mauve", "cerulean", "fuchsia", "ochre", "taupe", "cyan", "umber"],
  },
  "Name a country": {
    1: ["usa", "america", "canada", "mexico", "france", "china", "japan", "brazil", "england", "italy", "germany", "spain"],
    2: ["australia", "india", "russia", "egypt", "argentina", "sweden", "greece", "ireland", "thailand", "norway", "peru"],
    3: ["bhutan", "kyrgyzstan", "tuvalu", "eritrea", "liechtenstein", "suriname", "djibouti", "vanuatu", "moldova", "brunei"],
  },
  "Name something you find in a kitchen": {
    1: ["stove", "fridge", "oven", "sink", "microwave", "spoon", "fork", "knife", "plate"],
    2: ["toaster", "blender", "whisk", "spatula", "colander", "kettle", "cutting board", "ladle", "pan", "pot", "bowl"],
    3: ["mandoline", "zester", "salad spinner", "garlic press", "apple corer", "pastry brush", "mortar", "chinois", "rolling pin"],
  },
  "Name a job": {
    1: ["teacher", "doctor", "nurse", "police officer", "firefighter", "lawyer", "engineer", "chef"],
    2: ["plumber", "electrician", "accountant", "pilot", "architect", "dentist", "carpenter", "mechanic", "farmer", "scientist"],
    3: ["taxidermist", "sommelier", "cartographer", "lexicographer", "falconer", "luthier", "puppeteer", "farrier", "archivist"],
  },
  "Name a sport": {
    1: ["soccer", "football", "basketball", "baseball", "tennis", "golf", "hockey", "swimming"],
    2: ["volleyball", "boxing", "rugby", "cricket", "wrestling", "badminton", "gymnastics", "skiing", "track", "softball"],
    3: ["curling", "fencing", "lacrosse", "polo", "biathlon", "sepak takraw", "kabaddi", "bocce", "jai alai", "hurling"],
  },
  "Name something you can ride": {
    1: ["bike", "car", "bus", "horse", "train", "motorcycle", "skateboard", "scooter"],
    2: ["boat", "plane", "roller coaster", "camel", "elephant", "jet ski", "taxi", "subway", "sled", "bicycle"],
    3: ["segway", "unicycle", "gondola", "rickshaw", "hoverboard", "zipline", "tandem", "ferris wheel", "dromedary"],
  },
  "Name a musical instrument": {
    1: ["guitar", "piano", "drum", "violin", "flute", "trumpet", "saxophone"],
    2: ["clarinet", "cello", "harp", "trombone", "ukulele", "banjo", "harmonica", "accordion", "bass", "oboe", "tuba"],
    3: ["theremin", "sitar", "didgeridoo", "hurdy-gurdy", "kalimba", "glockenspiel", "ocarina", "marimba", "bassoon", "lute"],
  },
  "Name a board game": {
    1: ["monopoly", "chess", "checkers", "scrabble", "clue", "risk", "sorry", "connect four"],
    2: ["battleship", "candy land", "trouble", "life", "operation", "backgammon", "jenga", "uno", "mouse trap", "yahtzee"],
    3: ["catan", "carcassonne", "ticket to ride", "pandemic", "azul", "mancala", "twilight imperium", "terraforming mars", "go", "codenames"],
  },
  "Name a vegetable": {
    1: ["carrot", "broccoli", "potato", "tomato", "corn", "lettuce", "onion", "cucumber"],
    2: ["spinach", "celery", "pepper", "cauliflower", "cabbage", "zucchini", "asparagus", "pea", "kale", "squash", "mushroom"],
    3: ["kohlrabi", "romanesco", "celeriac", "bok choy", "fennel", "rutabaga", "daikon", "salsify", "okra", "radicchio"],
  },
  "Name a type of tree": {
    1: ["oak", "pine", "maple", "palm", "birch", "willow", "apple"],
    2: ["cedar", "redwood", "elm", "cherry", "spruce", "aspen", "magnolia", "cypress", "fir", "walnut"],
    3: ["baobab", "ginkgo", "banyan", "monkey puzzle", "hornbeam", "kapok", "sassafras", "mangrove", "yew", "dogwood"],
  },
  "Name something you find at the beach": {
    1: ["sand", "wave", "shell", "ocean", "sunscreen", "towel", "seagull", "umbrella", "water"],
    2: ["crab", "surfboard", "sandcastle", "lifeguard", "seaweed", "bucket", "starfish", "flip flop", "sun", "cooler"],
    3: ["tide pool", "driftwood", "sand dollar", "jellyfish", "hermit crab", "sandpiper", "kelp", "sea glass", "sand dune"],
  },
  "Name a school subject": {
    1: ["math", "science", "english", "history", "art", "gym", "music", "reading"],
    2: ["geography", "biology", "chemistry", "physics", "spanish", "algebra", "drama", "writing", "french", "geometry"],
    3: ["latin", "philosophy", "calculus", "trigonometry", "home economics", "woodshop", "astronomy", "linguistics", "etymology"],
  },
  "Name an item of clothing": {
    1: ["shirt", "pants", "shoe", "sock", "hat", "jacket", "dress", "jeans"],
    2: ["sweater", "skirt", "shorts", "scarf", "glove", "coat", "belt", "hoodie", "tie", "vest"],
    3: ["cravat", "kimono", "poncho", "cummerbund", "kilt", "sarong", "waistcoat", "bolo tie", "beret", "fedora"],
  },
  "Name a farm animal": {
    1: ["cow", "pig", "chicken", "horse", "sheep", "goat", "duck", "turkey"],
    2: ["donkey", "rooster", "llama", "goose", "rabbit", "alpaca", "mule", "ox", "ram", "lamb"],
    3: ["guinea fowl", "emu", "yak", "water buffalo", "peacock", "highland cow", "pot-bellied pig", "ostrich"],
  },
  "Name something that is cold": {
    1: ["ice", "snow", "winter", "ice cream", "freezer", "fridge", "popsicle"],
    2: ["glacier", "penguin", "polar bear", "iceberg", "frost", "blizzard", "snowman", "ice cube", "icicle", "arctic"],
    3: ["permafrost", "antarctica", "liquid nitrogen", "dry ice", "absolute zero", "tundra", "cryogenics"],
  },
  "Name a pizza topping": {
    1: ["pepperoni", "cheese", "sausage", "mushroom", "onion", "olive", "green pepper", "bacon"],
    2: ["pineapple", "ham", "spinach", "tomato", "basil", "chicken", "jalapeno", "extra cheese", "pepper", "garlic"],
    3: ["anchovy", "artichoke", "arugula", "prosciutto", "goat cheese", "caper", "fig", "truffle", "egg"],
  },
  "Name a candy": {
    1: ["chocolate", "skittles", "snickers", "gummy bear", "lollipop", "jelly bean", "candy cane", "twizzlers"],
    2: ["twix", "kit kat", "laffy taffy", "swedish fish", "tootsie roll", "licorice", "caramel", "nerds", "starburst", "sour patch kids"],
    3: ["turkish delight", "rock candy", "horehound", "marzipan", "nougat", "halva", "gobstopper", "pixy stix"],
  },
  "Name a type of weather": {
    1: ["rain", "snow", "sun", "wind", "cloud", "storm", "thunder", "fog"],
    2: ["hail", "tornado", "hurricane", "sleet", "drizzle", "lightning", "blizzard", "heat wave", "sunny", "cloudy"],
    3: ["freezing rain", "haboob", "derecho", "sun shower", "waterspout", "microburst", "graupel", "virga"],
  },
  "Name a part of the body": {
    1: ["head", "hand", "foot", "arm", "leg", "eye", "nose", "mouth"],
    2: ["elbow", "knee", "shoulder", "ankle", "wrist", "ear", "neck", "stomach", "finger", "toe", "back"],
    3: ["clavicle", "sternum", "patella", "uvula", "philtrum", "achilles tendon", "femur", "tibia", "sacrum"],
  },
  "Name a flower": {
    1: ["rose", "tulip", "daisy", "sunflower", "lily", "violet", "carnation"],
    2: ["orchid", "daffodil", "lavender", "marigold", "peony", "iris", "hydrangea", "poppy", "lotus", "jasmine"],
    3: ["protea", "bird of paradise", "snapdragon", "foxglove", "gladiolus", "ranunculus", "bleeding heart", "chrysanthemum"],
  },
  "Name something you find in a bathroom": {
    1: ["toilet", "sink", "shower", "bathtub", "toothbrush", "towel", "soap", "mirror"],
    2: ["shampoo", "toothpaste", "toilet paper", "conditioner", "razor", "bath mat", "plunger", "floss", "tub", "scale"],
    3: ["bidet", "loofah", "pumice stone", "shower cap", "bath bomb", "towel rack", "medicine cabinet", "tweezers"],
  },
  "Name a type of shoe": {
    1: ["sneaker", "boot", "sandal", "flip flop", "high heel", "slipper", "loafer", "running shoe"],
    2: ["cleat", "clog", "ballet flat", "oxford", "moccasin", "croc", "tennis shoe", "dress shoe", "heel", "mule"],
    3: ["espadrille", "wingtip", "brogue", "geta", "kitten heel", "derby", "huarache", "platform"],
  },
  "Name a city": {
    1: ["new york", "los angeles", "chicago", "london", "paris", "tokyo", "las vegas", "miami"],
    2: ["seattle", "boston", "toronto", "sydney", "rome", "berlin", "dubai", "madrid", "atlanta", "denver"],
    3: ["reykjavik", "ulaanbaatar", "kathmandu", "timbuktu", "tbilisi", "addis ababa", "valletta", "nuuk", "baku"],
  },
  "Name an animal that lives in the ocean": {
    1: ["shark", "dolphin", "whale", "octopus", "fish", "crab", "jellyfish", "seal"],
    2: ["turtle", "sea turtle", "starfish", "seahorse", "stingray", "squid", "lobster", "clownfish", "orca", "eel"],
    3: ["narwhal", "anglerfish", "manatee", "nautilus", "sea cucumber", "mantis shrimp", "barracuda", "wobbegong"],
  },
  "Name a hobby": {
    1: ["reading", "drawing", "gaming", "cooking", "gardening", "painting", "singing", "dancing"],
    2: ["knitting", "photography", "fishing", "hiking", "baking", "camping", "woodworking", "bird watching", "pottery", "writing"],
    3: ["origami", "calligraphy", "beekeeping", "lock picking", "geocaching", "taxidermy", "metal detecting", "fencing"],
  },
  "Name something with wheels": {
    1: ["car", "bike", "bus", "truck", "skateboard", "wagon", "shopping cart", "scooter"],
    2: ["motorcycle", "train", "wheelchair", "tricycle", "stroller", "roller skate", "tractor", "go kart", "bicycle", "suitcase"],
    3: ["unicycle", "segway", "rickshaw", "penny farthing", "dolly", "gurney", "pushcart", "office chair"],
  },
  "Name a breakfast food": {
    1: ["egg", "bacon", "pancake", "cereal", "toast", "waffle", "orange juice", "oatmeal"],
    2: ["bagel", "sausage", "french toast", "yogurt", "muffin", "omelet", "hash brown", "granola", "banana", "coffee"],
    3: ["shakshuka", "congee", "huevos rancheros", "eggs benedict", "kedgeree", "chilaquiles", "full english", "porridge"],
  },
  "Name something you find in a park": {
    1: ["tree", "bench", "grass", "swing", "playground", "slide", "picnic table", "pond"],
    2: ["fountain", "squirrel", "duck", "walking trail", "sandbox", "gazebo", "dog park", "baseball field", "path", "flower"],
    3: ["pavilion", "bandstand", "monument", "disc golf", "skate park", "birdbath", "rose garden", "ranger station"],
  },
};

// Broad prompts also accept answers from narrower prompts (a sheep counts as an animal).
export const RELATED = {
  "Name an animal": ["Name a farm animal", "Name an animal that lives in the ocean"],
};

// A shuffled "bag": every prompt gets used once before any repeats.
export function makePromptPicker(list = PROMPTS) {
  let bag = [];
  let last = null;
  return function nextPrompt() {
    if (bag.length === 0) {
      bag = [...list];
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
      // Don't start a new bag with the prompt we just played.
      if (bag.length > 1 && bag[bag.length - 1] === last) {
        [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
      }
    }
    last = bag.pop();
    return last;
  };
}
