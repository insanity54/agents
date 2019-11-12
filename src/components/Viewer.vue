<template>
  <div class="viewer-section">
    <div class="viewer-background"></div>
    <div class="viewer-inner">
      <h2>Viewer</h2>
      <div id="viewscreen-header" v-html=""></div>
      <div id="viewscreen" v-html="view"></div>
    </div>
  </div>
</template>

<script>
  import messageOne from '../assets/messages/CASE-001.md';
  import x3842 from '../assets/xdb/3842.md';
  import marc10 from '../assets/marc/x000p_01.00.10.md';
  import marc77 from '../assets/marc/x001p_01.88.77.md';
  import marc48 from '../assets/marc/x111p_32.64.48.md';
  import marc82 from '../assets/marc/x222p_11.23.82.md';
  import marc09 from '../assets/marc/x328p_83.11.09.md';
  import marc55 from '../assets/marc/x342p_89.12.55.md';
  import marc21 from '../assets/marc/x448p_21.21.21.md';
  import marc66 from '../assets/marc/x666p_66.66.66.md';
  import marc53 from '../assets/marc/x812p_88.98.53.md';
  import marc12 from '../assets/marc/x843p_33.32.12.md';
  import marc52 from '../assets/marc/x903p_48.83.52.md';

  export default {
    name: 'Viewer',
    data: function () {
      return {
        view: ''
      }
    },
    props: {

    },
    computed: {
      viewContent: function () {
        if (this.view === 'msg1') {
          return messageOne;
        }
      }
    },
    mounted() {
      this.$root.$on('viewer', data => {
        let mediaType = data.mediaType;
        let index = data.index;
        if (mediaType === 'msg') {
          if (index === 1) {
            this.view = messageOne;
          }
        }
        if (mediaType === 'xdb') {
          if (index === 3842) {
            this.view = x3842;
          }
        }
        if (mediaType === 'carve') {
          if (index === 3842) {
            // @TODO show cool transition to CARVE system
          }
        }
        if (mediaType === 'marc') {
          if (index === 10) return this.view = marc10;
          if (index === 77) return this.view = marc77;
          if (index === 48) return this.view = marc48;
          if (index === 82) return this.view = marc82;
          if (index === 9) return this.view = marc09;
          if (index === 55) return this.view = marc55;
          if (index === 21) return this.view = marc21;
          if (index === 66) return this.view = marc66;
          if (index === 53) return this.view = marc53;
          if (index === 12) return this.view = marc12;
          if (index === 52) return this.view = marc52;
        }
      })
    }
  }
</script>

<style>
  .viewer-section {
    width: 60vw;
    height: 50vh;
  }
  .viewer-background {
    top: 0;
    left: 40vw;
    display: block;
    position: absolute;
    width: 60vw;
    height: 50vh;
    background-image: url("../assets/gutsy.jpg");
    z-index: -1;
  }
  .viewer-inner {
    padding: 10px;
    height: 100%;
    overflow: scroll;
    text-align: left;
    display: block;
    background-color: black;
    /* transform: rotateY(90deg); */
  }
</style>
