<template>
  <div class="containerMenu">
      <h3>Rick & Morty</h3>
      <ul>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></li>

        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg></li>

        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></li>

      </ul>
    <div class= "logoutDiv"><a href="#">Logout</a></div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
};
</script>

<style scoped>
h3 {
  margin: 0;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 50px;
  display: inline-block;
}

li {
  fill:white;
  width: 25px;
  padding: 15%;
}

.containerMenu{
  background-color: #818cf8;
  padding: 5%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  width: 150px;
  text-align: center;
}

a{
  text-align: center;
  color: white;
}
.logoutDiv{
  position: relative;
  bottom: 10px;
}
</style>
