import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import MyFirstGameScene from './scenes/MyFirstGameScene'
import CatchFruitGame from './scenes/CatchFruitGame'
import ShootingGame from './scenes/ShootingGame'
import CookingGame from './scenes/CookingGame'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: true,
		}
	},
	scene: [CookingGame,ShootingGame,CatchFruitGame, MyFirstGameScene,HelloWorldScene]
}

export default new Phaser.Game(config)
