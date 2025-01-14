import { Scene, Label, TextAlign, Color, Vector, Keys, Font } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';
import { Background } from './backgrounds.js';

export class IntroSceneThree extends Scene {
    constructor(game) {
        super();
        this.game = game;
        this.z = 0;
    }

    onInitialize() {
        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                this.game.goToFourIntro();
            }
        });

        const backgroundThree = new Background(Resources.IntroThreeBackground, 640, 360)
        this.add(backgroundThree)

        const name = new Label({
            text: '',

            font: new Font({
                size: 60, 
                family: 'VT323',
            }),
            textAlign: TextAlign.Center,
            pos: new Vector((this.game.drawWidth / 2) - 600 , this.game.drawHeight / 2 - 350) ,
            color: Color.fromHex('#ffd88a'),
        });
        this.add(name);
        
    }
}
