<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <PieChart
      :data="newData"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PieChart from './components/PieChart.vue';
import episodes from '../public/data/episodes.json';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PieChart,
  },
  created() {
    this.newData = newData;
  },
};

// create an empty dictionary
const allSpecies = {};
// iterate over episodes
for (const episode of episodes) {
  // create a list of episode characters
  const listCharacters = episode.characters;
  // iterate over characters
  for (const character of listCharacters) {
    // if the species does not exist create it in allSpecies dictionary
    if (!allSpecies[character.species]) {
      allSpecies[character.species] = 1;
    // if the species already exists increment
    } else if (allSpecies[character.species]) {
      allSpecies[character.species] += 1;
    }
  }
}
console.log(allSpecies);
console.log(allSpecies.Human);

const newData = [];
for (const key in allSpecies) {
  newData.push({ label: key, value: allSpecies[key] });
}
console.log(newData);

const x = [
  { label: 'A', value: 30 },
  { label: 'B', value: 70 },
  { label: 'C', value: 40 },
];

console.log(x);

// const counterHuman = 0;
// const counterMythologicalCreature = 0;
// const counterAlien = 0;
// const counterDisease = 0;
// const counterCronenberg = 0;
// const counterAnimal = 0;
// const counterHumanoid = 0;

// for (const episode of episodes) {
//   const { characters } = episode;
//   console.log(characters);
//   for (const character of characters) {
// console.log(character.species);
// switch (species) {
//   case 0:
//     text = 'Human';
//     counterHuman++;
//   case 1:
//     text = 'Mythological Creature';
//     counterMythologicalCreature++;
//   case 2:
//     text = 'Alien';
//     counterAlien++;
//   case 3:
//     text = 'Disease';
//     counterDisease++;
//   case 4:
//     text = 'Cronenberg';
//     counterCronenberg++;
//   case 5:
//     text = 'Animal';
//     counterAnimal++;
//   case 6:
//     text = 'Humanoid';
//     counterHumanoid++;
// }
// }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
