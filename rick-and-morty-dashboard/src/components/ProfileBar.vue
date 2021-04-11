<template>
    <div class="containerMenu">
        <div class="imageDiv"><img src="../assets/avatar.jpg" alt="Avatar"/></div>
        <h5>Justin Roiland</h5>
        <p>Co-creator</p>
        <footer>Copyright© Adult Swim</footer>
    </div>
</template>

<script>
export default {
  name: 'ProfileBar',
};
</script>

<style scoped>

h5 {
  text-align: center;
  margin: 10px 0 0 0;
}

p{
  font-size: 12px;
  text-align: center;
}

footer{
  font-size: 10px;
  color: lightgray;
  margin-top: 350px;
  text-align: center;
}

.containerMenu{
  background-color: #eef2ff;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 40px;
  padding-right: 40px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 150px;
}

img {
  width: 90px;
  border-radius: 50%;
}

.imageDiv{
  text-align: center;
}

</style>
