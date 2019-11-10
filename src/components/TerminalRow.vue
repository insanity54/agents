<template>
  <div class="terminal-row">
    <div class="terminal-input-row">
      <TerminalPrompt :prompt="prompt"/>
      <TerminalInput :enabled="enabled" :input="input" :shell="shell" :processCommand="processCommand"/>
    </div>
    <TerminalOutput :output="output"/>
  </div>
</template>


<script>
import TerminalInput from './TerminalInput';
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';


export default {
  name: 'TerminalRow',
  data: function () {
    return {

    }
  },
  components: {
    TerminalInput,
    TerminalOutput,
    TerminalPrompt
  },
  props: {
    shell: {
      type: Object,
      required: true
    },
    addTerminalRow: {
      type: Function,
      required: true
    },
    prompt: {
      type: String,
      required: true
    },
    input: {
      type: String,
      required: true
    },
    output: {
      type: String,
      required: true,
      default: ''
    },
    enabled: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    processCommand (value) {
      this.addTerminalRow(value);
    }
  },
  mounted() {
  }
}
</script>

<style>
  .terminal-row {
    margin: 0.5em 0 0 0.5em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .terminal-input-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }
</style>
