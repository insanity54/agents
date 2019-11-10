<template>
  <span class="terminal-prompt">{{ prompt }}</span>
</template>


<script>

export default {
  name: 'TerminalPrompt',
  data: function () {
    return {
    }
  },
  components: {
  },
  props: {
    prompt: {
      type: String,
      required: true
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>
