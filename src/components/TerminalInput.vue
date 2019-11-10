<template>
  <input
    v-model="inp"
    v-focus="enabled"
    :disabled="!enabled"
    :class="{ 'disabled': !enabled }"
    class="terminal-input"
    type="text"
    @keyup.enter="processInput"
  >
</template>


<script>


export default {
  name: 'TerminalInput',
  data: function () {
    return {
      inp: this.input
    }
  },
  components: {
  },
  props: {
    shell: {
      type: Object,
      required: true
    },
    processCommand: {
      type: Function,
      required: true
    },
    enabled: {
      type: Boolean,
      required: true
    },
    input: {
      type: String,
      required: true
    }
  },
  methods: {
    processInput: function (e) {
      if (e.keyCode === 13) {
        this.processCommand(this.inp);
      }
    }
  },
  computed: {

  },
  mounted() {

  }
}
</script>

<style scoped>
  .terminal-input {
    /* cursor: none; */
  }
  input {
    cursor: pointer;
    border: none;
    background: transparent;
    color: white;
    font: 1rem Inconsolata, monospace;
    text-shadow: 0 0 5px #C8C8C8;
    margin: 0 0 0 1em;
    width: 100%;
  }

  input.disabled {
    pointer-events: none;
  }
</style>
