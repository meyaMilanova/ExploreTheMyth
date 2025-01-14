import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


import { IntroScene } from './intro1.js';
import { IntroSceneTwo } from './intro2.js'
import { IntroSceneThree } from './intro3.js'
import { IntroSceneFour } from './intro4.js'
import { LevelOneScene } from './levelOne.js'
import { LevelTwoScene } from './levelTwo.js'
import { LevelThreeScene } from './levelThree.js'
import { LevelFourScene } from './levelFour.js'
import { OutroWon } from './outroWon.js';
import { OutroLost } from './outroLost.js';

export class Game extends Engine {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            displayMode: DisplayMode.FitScreen,
            antialiasing: false,
            pixelArt: true
        });

        this.start(ResourceLoader).then(() => this.onInitialize());
    }

    onInitialize() {
        // Pre-add all scenes during game initialization
        this.addScene('introOne', new IntroScene(this));
        this.addScene('introTwo', new IntroSceneTwo(this));
        this.addScene('introThree', new IntroSceneThree(this));
        this.addScene('introFour', new IntroSceneFour(this));
        this.addScene('onelevelOneL', new LevelOneScene(this));
        this.addScene('onelevelTwoL', new LevelTwoScene(this));
        this.addScene('onelevelThreeL', new LevelThreeScene(this));
        this.addScene('onelevelFourL', new LevelFourScene(this));
        this.addScene('outroWon', new OutroWon(this));
        this.addScene('outroLost', new OutroLost(this));

        // Start with the first intro scene
        this.goToScene('introOne');
    }

    goToFirstIntro() {
        this.goToScene('introOne');
    }

    goToSecondIntro() {
        this.goToScene('introTwo');
    }

    goToThirdIntro() {
        this.goToScene('introThree');
    }

    goToFourIntro() {
        this.goToScene('introFour');
    }

    goToLevelOne() {
        this.goToScene('onelevelOneL');
    }

    goToLevelTwo() {
        this.goToScene('onelevelTwoL');
    }

    goToLevelThree() {
        this.goToScene('onelevelThreeL');
    }

    goToLevelFour() {
        this.goToScene('onelevelFourL');
    }

    goToOutroWon() {
        this.goToScene('outroWon');
    }

    goToOutroLost() {
        this.goToScene('outroLost');
    }
}

new Game();

