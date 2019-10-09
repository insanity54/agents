<template>
  <div class="terminal-container">
    <TerminalRow v-for="row in terminalRows" :key="row.id"/>
  </div>
</template>


<script>
import TerminalRow from './TerminalRow';

const termlyFilesystem = {
  home: {
    guest: {
      'file.1': 'I think someone is watching me...'
    }
  }
}
const termlyCommands = {
  mmr: {
    name: 'mmr',
    type: 'builtin',
    man: 'Multi Mail Reader',
    fn: function mmr(ARGV) {
      return `@TODO`;
    }
  },
  xdb: {
    name: 'xdb',
    type: 'builtin',
    man: 'X-Database',
    fn: function mmr(ARGV) {
      return `@TODO`;
    }
  },
  carve: {
    name: 'carve',
    type: 'builtin',
    man: 'Computer Aided Remote Viewing',
    fn: function mmr(ARGV) {
      return `@TODO`;
    }
  },
  cagi: {
    name: 'cagi',
    type: 'builtin',
    man: 'Computer Aided Cognitive Inception',
    fn: function mmr(ARGV) {
      return `@TODO`;
    }
  },
  marc: {
    name: 'marc',
    type: 'builtin',
    man: 'Message Archive',
    fn: function mmr(ARGV) {
      return `@TODO`;
    }
  },
  esol: {
    name: 'esol',
    type: 'builtin',
    man: 'Execute Secure Logout',
    fn: function mmr(ARGV) {
      return `@TODO`;
    }
  },
}
const termlyOpts = {
  filesystem: termlyFilesystem,
  commands: termlyCommands
}

export default {
  name: 'Terminal',
  data: function () {
    return {
      shell: false,
      designator: '',
      terminalRows: [
        { id: 0, input: 'carve' }
      ]
    }
  },
  components: {
    TerminalRow
  },
  props: {

  },
  methods: {

  },
  mounted() {
    this.shell = new this.$termly(termlyOpts);
    // this.terminalRows.append({
    //   id: 0,
    //   input: 'carve'
    // })
    // this.shell.run('esol');
  }
}
</script>
