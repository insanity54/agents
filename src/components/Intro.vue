<template>
  <div class="intro">
    <div class="content">
      <vue-plyr>
        <video poster="breaking.jpg" src="intro.webm">
          <source src="intro.webm" type="video/webm" size="1080">
        </video>
      </vue-plyr>
      <div class="controls">
        <router-link to="/console">Next</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Intro',
  components: {
  },
  data: function () {
    return {
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
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
