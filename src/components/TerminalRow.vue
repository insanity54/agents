<template>
  <div class="terminal-row">
    <TerminalPrompt :prompt="prompt"/>
    <TerminalInput/>
    <TerminalOutput/>
  </div>
</template>


<script>
import TerminalInput from './TerminalInput';
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';


export default {
  name: 'TerminalRow',
  // data: function () {
  //   return {
  //   }
  // },
  components: {
    TerminalInput,
    TerminalOutput,
    TerminalPrompt
  },
  props: {
    prompt: Text
  },
  methods: {
  },
  mounted() {
  }
}
</script>
