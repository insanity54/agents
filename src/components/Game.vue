<template>
  <div v-if="begun === true" class="game">
    <div class="workspace">
      <div class="top-content">
        <div class="nav"><p>nav</p></div>
        <div class="viewer"><p>viewer</p></div>
      </div>
      <div class="bottom-content">
        <div class="terminal">
          <div id="term">
            <Terminal/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Terminal from './Terminal.vue'


export default {

  name: 'Game',
  components: {
    Terminal
  },
  methods: {
  },
  props: {
    begun: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.workspace {
  border: 3px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center
}
.top-content {
  border: 3px solid blue;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
}
.bottom-content {
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
}
.nav {
  height: 50vh;
  width: 30vh;
}
.viewer {
  height: 50vh;
  width: 70vh;
}
#term {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid red;
  width: 100%;
  height: 300px;
  overflow: scroll;
  background-color: black;
  background-image: radial-gradient(
    rgba(0, 150, 0, 0.75), black 120%
  );
  color: white;
  font: 1rem Inconsolata, monospace;
  text-shadow: 0 0 5px #C8C8C8;
}
#term::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 2px);
}
#term .terminal-row {
  display: flex;
}
pre.terminal-output {
  width: 100px;
}
pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
input {
  border: 3px dotted orange;
  background: transparent;
  height: 500px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
