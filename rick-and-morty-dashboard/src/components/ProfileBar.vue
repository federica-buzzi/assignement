<template>
    <div class="containerMenu">
        <div class="imageDiv"><img src="../assets/avatar.jpg" alt="Avatar"/></div>
        <h5>Justin Roiland</h5>
        <p>Co-creator</p>
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
    margin: 0;
}

.containerMenu{
  background-color: #eef2ff;
  padding: 5%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 150px;
}

img {
  width: 70%;
  border-radius: 50%;
}

.imageDiv{
   text-align: center;
}

</style>
