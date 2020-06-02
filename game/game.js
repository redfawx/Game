import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import PlayScene from './scenes/PlayScene'

function launch(containerId) {
  const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [BootScene, PlayScene]
  }

  return new Phaser.Game(config)
}

export default launch
export { launch }
