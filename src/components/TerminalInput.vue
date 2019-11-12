<template>
  <input
    v-model="inp"
    v-focus="enabled"
    :disabled="!enabled"
    :class="{ 'disabled': !enabled }"
    class="terminal-input"
    type="text"
    @keyup.enter="processInput"
    @keyup.up="prefillLastCommand"
    @keyup.down="prefillNextCommand"
  >
</template>


<script>


export default {
  name: 'TerminalInput',
  data: function () {
    return {
      inp: '',
      commandIndex: 0
    }
  },
  components: {
  },
  props: {
    terminalRows: {
      type: Array,
      required: true
    },
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
    processInput: function () {
      this.processCommand(this.inp);
      this.commandIndex++;
    },
    prefillLastCommand: function () {
      if (this.commandIndex === 0) return;
      this.commandIndex--;
      this.inp = JSON.parse(JSON.stringify(this.terminalRows[this.commandIndex].input));
    },
    prefillNextCommand: function () {
      if (this.commandIndex === this.terminalRows.length-1) return;
      this.commandIndex++;
    }
  },
  computed: {

  },
  created() {
    this.commandIndex = (this.terminalRows.length-1);
    // this.inp = this.input;
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
