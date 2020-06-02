<template>
  <div><Game id="phaser-app" /></div>
</template>

<script>
import Game from '~/components/Game.vue'

export default {
  components: { Game }
}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
  background-color: black;
}

#phaser-app {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
