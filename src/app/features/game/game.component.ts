import { Component } from '@angular/core';
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  create() {
    console.log('create method');
    this.add.text(180,250, "A long time ago in a galaxy far, far away....");
  }
  preload() {
    console.log('preload method');
  }
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  phaserGame: Phaser.Game | undefined;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ MainScene ],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 100,y: 100 }
        }
      }
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
