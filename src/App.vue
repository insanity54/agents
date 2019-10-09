<template>
  <div id="app">
    <div class="container">
      <Main :begun="begun"/>
      <Game v-if="begun" :begun="begun"/>
      <button v-if="!begun" type="button" class="begin" @click="begin()">Begin</button>
    </div>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Game from './components/Game.vue'


export default {
  name: 'app',
  components: {
    Main,
    Game
  },
  data: function () {
    return {
      begun: false,
      designator: ''
    }
  },
  methods: {
    begin() {
      this.begun = true;
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.container {
  max-width: 1000px;
}
</style>
