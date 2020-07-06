'use strict';

// IGNORE THIS SECTION - CLASSWORK

// step 1

const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (this.water / this.flour) * 100 ;
  }
};

console.log(loaf.hydration());

// step 2

const randObj = {
  foo: 4,
  bar: 'hamilton',
  fum: 689,
  quux: 'what even',
  spam: true
};

for (let key in randObj) {
  console.log(`${key}: ${randObj[key]}`);
}

// step 3

const hobbit = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};

console.log(hobbit.meals[3]);

// step 4

const peopleWithJobs = [
  {
    name: 'Bob Jones',
    jobTitle: 'plumber'
  },
  {
    name: 'Tiffany Taffle',
    jobTitle: 'professional professionator'
  },
  {
    name: 'Mr. Bojangles',
    jobTitle: 'astronaut'
  },
  {
    name: 'Elizabeth Windsor',
    jobTitle: 'queen'
  }
];

peopleWithJobs.forEach((person) => console.log(`${person.name}: ${person.jobTitle}`));

// step 5

peopleWithJobs[0].boss = 'George Boss';
peopleWithJobs[1].boss = 'Yam Sam';
peopleWithJobs[2].boss = 'Tutti Frutti';

peopleWithJobs.forEach((person) => {
  if (person.boss) {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
  } else {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody`);
  }
});

// step 6

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decode(word) {
  const cipherVal = cipher[word[0]];

  return cipherVal ? word[cipherVal] : ' ';
}

function decodeWords(message) {
  let words = message.split(' ');
  return words.reduce((decodedMessage, word) => {
    return decodedMessage + decode(word);
  }, '');
}

const encodedMessage = 'ah bli tree am bry gold cien aa drtdm bde yodel bdi as';
console.log(decodeWords(encodedMessage));

// step 7

function createCharacter(name, nickName, race, origin, attack, defense, weapon) {
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe() {
      console.log(`${name} is a ${race} from ${origin}.`);
    },
    evaluateFight(character) {
      const theirDamage = Math.max(this.attack - character.defense, 0);
      const myDamage = Math.max(character.attack - this.defense, 0);
      return `Your opponent takes ${theirDamage} damage and you receive ${myDamage} damage.`;
    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedian', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half Elf', 'Rivendell', 56, 26, 'Hadhafang'));

characters.find((character) => character.nickName === 'aragorn').describe();

const onlyHobbits = characters.filter((character) => character.race === 'Hobbit');
const strongCharacters = characters.filter((character) => character.attack > 5);

console.log(onlyHobbits);
console.log(strongCharacters);