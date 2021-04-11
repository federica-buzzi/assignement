<template>
  <div id="app">
    <MenuBar/>
    <PieChart
      :data="newData"
    />
    <ProfileBar/>
  </div>
</template>

<script>
import PieChart from './PieChart.vue';
import episodes from '../../public/data/episodes.json';
import MenuBar from './MenuBar.vue';
import ProfileBar from './ProfileBar.vue';

export default {
  name: 'Card',
  components: {
    PieChart,
    MenuBar,
    ProfileBar,
  },
  created() {
    this.newData = newData;
  },
};

// refactorisation of code inspired by https://stackoverflow.com/questions/27651708/how-do-i-find-and-count-unique-values-in-nested-json-objects

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
// console.log(allSpecies);

let newData = [];
for (const key in allSpecies) {
  newData.push({ label: key, value: allSpecies[key] });
}
// console.log(newData);

// first more crafty version

// let counterHuman = 0;
// let counterMythologicalCreature = 0;
// let counterAlien = 0;
// let counterDisease = 0;
// let counterCronenberg = 0;
// let counterAnimal = 0;
// let counterHumanoid = 0;

// for (const episode of episodes) {
//   const listOfCharacters = episode.characters;
//   // console.log(listOfCharacters);
//   for (const character of listOfCharacters) {
//     // console.log(character.species);
//     if (character.species === 'Human') {
//       counterHuman++;
//     } else if (character.species === 'Mythological Creature') {
//       counterMythologicalCreature++;
//     } else if (character.species === 'Alien') {
//       counterAlien++;
//     } else if (character.species === 'Disease') {
//       counterDisease++;
//     } else if (character.species === 'Cronenberg') {
//       counterCronenberg++;
//     } else if (character.species === 'Animal') {
//       counterAnimal++;
//     } else {
//       counterHumanoid++;
//     }
//   }
// }

// const finalData = [{ label: 'Alien', value: counterAlien }, { label: 'Animal', value: counterAnimal }, { label: 'Cronenberg', value: counterCronenberg }, { label: 'Disease', value: counterDisease }, { label: 'Human', value: counterHuman }, { label: 'Humanoid', value: counterHumanoid }, { label: 'Mythological Creature', value: counterMythologicalCreature }];
// console.log(finalData);

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
