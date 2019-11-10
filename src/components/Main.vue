<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  color: white;
  background-color: black;
}
.logo {
  width: 10vw;
  height: 10vw;
}
.main {
  display: flex;
  flex-direction: column;
}
h2 {
  color: white;
}
p {
  color: white;
}
h3 {
  color: white;
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.flexer {
  width: 50vw;
  margin: 5em 1em 1em 1em;
}
</style>
