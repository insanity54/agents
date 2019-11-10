<template>
  <div class="nav-section">
    <h2>Navigation</h2>
    <div class="navText">
      <p>{{ missionText }}</p>
      <div class="command-reference-container" v-html="commandReference"></div>
    </div>
  </div>
</template>

<script>
import commandDocumentation from '../assets/meta/commandReference.md';
export default {

  name: 'Nav',
  data: function () {
    return {
      textWelcome: 'Welcome, Agent.',
      textExperience: 'taco'
    }
  },
  components: {
  },
  methods: {
  },
  computed: {
    commandReference: function() {
      return commandDocumentation;
    },
    missionText: function () {
      if (this.stage === 0) return this.textWelcome;
      if (this.stage < 5) return this.textExperience;
      return 'Error: default text';
    },
  },
  props: {
    stage: {
      type: Number,
      required: true
    }
  }
}
</script>


<style>
  .nav-section {
    height: 50vh;
    width: 40vw;
    text-align: left;
    background-color: grey;
    padding: 0 0 0 1em;
  }
  .navText {
  }
  div.command-reference-container ul {
  }
  div.command-reference-container ul > li {
    list-style-type: square;
    white-space: wrap;
  }
</style>
