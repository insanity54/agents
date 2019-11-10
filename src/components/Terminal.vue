<template>
  <div class="terminal">
    <div class="terminal-container">
      <TerminalRow
      :addTerminalRow="addTerminalRow"
      :prompt="row.prompt"
      :input="row.input"
      :output="row.output"
      :enabled="row.enabled"
      :shell="shell"
      v-for="row in terminalRows"
      :key="row.id"
      ></TerminalRow>
    </div>
  </div>
</template>


<script>
import TerminalRow from './TerminalRow';
import accountChris from '../assets/accounts/chris.json';
import accountMarshall from '../assets/accounts/marshall.json';
import accountPete from '../assets/accounts/pete.json';
import accountRobert from '../assets/accounts/robert.json';
import accountSara from '../assets/accounts/sara.json';

export default {
  name: 'Terminal',
  data: function() {
    return {
      shell: false,
      designator: '',
      terminalRows: [{
        id: 0,
        input: '',
        enabled: true,
        prompt: 'root@localhost:~#',
        output: ''
      }]
    }
  },
  components: {
    TerminalRow
  },
  props: {
    triggerViewer: {
      type: Function,
      required: true
    }
  },
  methods: {
    getPrompt() {
      return this.shell.env.hostname;
    },
    addTerminalRow(value) {
      let lastIndex = this.terminalRows.length - 1;
      this.terminalRows.push({
        id: lastIndex + 1,
        input: '',
        enabled: true,
        prompt: `${this.shell.env.USER}@${this.shell.env.HOSTNAME}:~#`
      });
      this.terminalRows[lastIndex].output = this.shell.run(value);
      this.terminalRows[lastIndex].enabled = false;
    },
    isValidMarcVariation(argument, filename) {
      if (
        argument === `${filename}.txt.hex` ||
        argument === `${filename}.txt` ||
        argument === filename
      ) return true;
      return false;
    },
    isMarc(args, filename) {
      if (
        args[0] === 'marc' &&
        this.isValidMarcVariation(args[1], filename)
      ) return true;
      return false;
    }
  },
  created() {
    const termlyFilesystem = {
      root: {
        'file.1': 'I think someone is watching me...'
      }
    }
    const vMsg = '=>See VIEWER';
    const termlyCommands = {
      mmr: {
        name: 'mmr',
        type: 'builtin',
        man: 'Multi Mail Reader',
        fn: (argv) => {
          const args = argv.raw.split(' ');
          if (args[0] === 'mmr' && args[1] === 'read' && args[2] === '1') {
            this.triggerViewer('msg', 1);
            return vMsg;
          } else {
            return '1) CASE-001.msg\n\n  Usage: mmr read n'
          }
        }
      },
      xdb: {
        name: 'xdb',
        type: 'builtin',
        man: 'X-Database',
        fn: (argv) => {
          const args = argv.raw.split(' ');
          if (
            args[0] === 'xdb' &&
            (
              args[1] === '3842' ||
              args[1] === 'X-3842'
            )
          ) {
            this.triggerViewer('xdb', 3842);
            return vMsg;
          } else {
            return 'Usage: xdb <X-DESIGNATION>'
          }
        }
      },
      esli: {
        name: 'esli',
        type: 'builtin',
        man: 'Log in to an account',
        fn: (argv) => {
          const args = argv.raw.split(' ');
          if (
            args[0] === 'esli' &&
            args[1] === 'chris' &&
            args[2] === 'taco'
          ) return vMsg;
          return 'Usage: esli <USERNAME> <PASSWORD>';
        }
      },
      carve: {
        name: 'carve',
        type: 'builtin',
        man: 'Computer Aided Remote Viewing',
        fn: (argv) => {
          const args = argv.raw.split(' ');
          if (
            args[0] === 'carve' &&
            (
              args[1] === '3842' ||
              args[1] === 'X-3842'
            )
          ) {
            this.triggerViewer('carve', 3842);
            return vMsg;
          } else {
            return 'Usage: carve <X-DESIGNATION>'
          }
        }
      },
      cagi: {
        name: 'cagi',
        type: 'builtin',
        man: 'Incept ideas into remote entities',
        fn: function mmr(argv) {
          return `@TODO`;
        }
      },
      marc: {
        name: 'marc',
        type: 'builtin',
        man: 'Lookup a hex message using its filename',
        fn: (argv) => {
          const args = argv.raw.split(' ');
          if (this.isMarc(args, 'x000p_01.00.10')) {
            this.triggerViewer('marc', 10);
            return vMsg;
          } else if (this.isMarc(args, 'x001p_01.88.77')) {
            this.triggerViewer('marc', 77);
            return vMsg;
          } else if (this.isMarc(args, 'x111p_32.64.48')) {
            this.triggerViewer('marc', 48);
            return vMsg;
          } else if (this.isMarc(args, 'x222p_11.23.82')) {
            this.triggerViewer('marc', 82);
            return vMsg;
          } else if (this.isMarc(args, 'x328p_83.11.09')) {
            this.triggerViewer('marc', 9);
            return vMsg;
          } else if (this.isMarc(args, 'x342p_89.12.55')) {
            this.triggerViewer('marc', 55);
            return vMsg;
          } else if (this.isMarc(args, 'x448p_21.21.21')) {
            this.triggerViewer('marc', 21);
            return vMsg;
          } else if (this.isMarc(args, 'x666p_66.66.66')) {
            this.triggerViewer('marc', 66);
            return vMsg;
          } else if (this.isMarc(args, 'x812p_88.98.53')) {
            this.triggerViewer('marc', 53);
            return vMsg;
          } else if (this.isMarc(args, 'x843p_33.32.12')) {
            this.triggerViewer('marc', 12);
            return vMsg;
          } else if (this.isMarc(args, 'x903p_48.83.52')) {
            this.triggerViewer('marc', 52);
            return vMsg;
          } else {
            return 'Usage: marc <FILENAME>\nExample: marc x001p_01.88.77.txt.hex'
          }
        }
      },
      eslo: {
        name: 'eslo',
        type: 'builtin',
        man: 'Log out of an account',
        fn: function eslo(argv) {
          return `@TODO`;
        }
      },
    }
    const termlyOpts = {
      filesystem: termlyFilesystem,
      commands: termlyCommands
    }
    this.shell = new this.$termly(termlyOpts);
    this.shell.env.USER = "root";
    this.shell.env.HOSTNAME = "localhost";
  }
}
</script>


<style>
.terminal {
  height: 100%;
  overflow: scroll;
  background-color: black;
  background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
  color: white;
  font: 1rem Inconsolata, monospace;
  text-shadow: 0 0 5px #C8C8C8;
}

.terminal-container {
  display: flex;
  flex-direction: column;
}


/* .terminal-container::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 2px);
  } */
</style>
