<template>
  <div v-if="begun === false" class="main">
    <div class="flexer">
      <img class="logo" alt="Vue logo" src="../assets/logo.png">
      <h1>Agents of D.E.C.T.I.L.E.</h1>
      <p>Agents of D.E.C.T.I.L.E. is a game about solving mysteries of supernatural origin. Agents employ methods such as remote viewing and other extra-sensory perceptions to gather clues and solve cases that no other agency on Earth can handle. Part metagame, players may be required to resort to methods such as placing phone calls or visiting websites to complete their tasks.</p>
      <p>This is a game that started during Ludum Dare 36, a global weekend game jam. The game started out as a bash script which players accessed through SSH. This was not very user friendly, unless the player was already a developer/techie/nerd, etcetera. While it lacked polish, the game was completely playable and winnable for end of ld36.</p>
      <p>Agents of D.E.C.T.I.L.E. is created by <a href="https://grimtech.net/about">Chris Grimmett</a>. I have made <a href="http://www.teamrpc.info/">several games</a> during Ludum Dare, but this one is my favorite because of it's paranormal atmosphere. After <a href="https://grimtech.net/ludem-dare-code-in-the-dark-aftermath">LD45</a>, I decided to upgrade this game to something more accessible for a general audience.</p>
      <p>I hope you enjoy this game as much as I enjoyed making it.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
.logo {
  width: 10vw;
  height: 10vw;
}
.main {
  display: flex;
  flex-direction: column;
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
