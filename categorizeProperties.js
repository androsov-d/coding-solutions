function categorizeProperties(obj) {
  const categorizedProperties = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    array: 0,
    function: 0,
    undefined: 0,
    null: 0,
    NaN: 0,
    symbol: 0,
  };

  for (const key in obj) {
    let currentType;

    if (obj[key] === null) {
      currentType = "null";
    } else if (Array.isArray(obj[key])) {
      currentType = "array";
    } else {
      currentType = typeof obj[key];
    }

    for (type in categorizedProperties) {
      if (type === currentType) {
        categorizedProperties[type]++;
      }
    }
  }

  categorizedProperties.symbol += Object.getOwnPropertySymbols.length;
  return categorizedProperties;
}

const obj = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "hiking"],
  isActive: true,
  greet: function () {
    console.log("Hello!");
  },
  details: { city: "Wonderland" },
  score: null,
  level: undefined,
  [Symbol("id")]: 123,
};

console.log(categorizeProperties(obj));
