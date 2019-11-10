<template>
  <div class="game">
    <div class="workspace">
      <div class="top-content">
        <Nav :stage="stage"/>
        <Viewer
        ></Viewer>
      </div>
      <div class="bottom-content">
        <Terminal :triggerViewer="triggerViewer"/>
      </div>
    </div>
  </div>
</template>

<script>

import Terminal from './Terminal.vue'
import Nav from './Nav.vue'
import Viewer from './Viewer.vue'

export default {
  name: 'Game',
  components: {
    Terminal,
    Nav,
    Viewer
  },
  data: function () {
    return {
    }
  },
  props: {
  },
  computed: {
    stage: function () {
      if (true) {
        return 0;
      }
      return 1;
    }
  },
  methods: {
    triggerViewer: function (mediaType, index) {
      console.log('triggerViewer')
      return this.$root.$emit('viewer', { mediaType: mediaType, index: parseInt(index) });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  * {
    box-sizing: border-box;
  }
  .game {
    height: 100%;
  }
  .workspace {
    display: flex;
    flex-direction: column;
  }
  .top-content {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
  }
  .bottom-content {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    height: 50vh;
  }
  h3 {
    margin: 40px 0 0;
  }
  a {
    color: #42b983;
  }
</style>
