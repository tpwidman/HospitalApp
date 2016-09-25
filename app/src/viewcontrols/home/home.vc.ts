import {controls, events, register, ui, web} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        carouselItems: [
            { text: 'Find the Best Hospital for your Needs', 
              image: '../assets/images/jp_1_edit.jpg'
            },
            { text: 'Sometimes the Fastest Answer is not the Best',
              image: '../assets/images/jp_2_edit.jpg'
            },
            { text: 'Where is your loved one really?',
              image: '../assets/images/jp_4_edit.jpg'
            }
            ],
        parts: [
            { id: 0, text:'Lungs and Respitory System' },
            { id: 1, text:'Heart and Circulatory System' },
            { id: 2, text:'Stomach and Digestive System' },
            { id: 3, text:'Brain and Nervous System' },
            { id: 4, text:'Joints and Bones' }
            ],
        results: false
    };
    toggleResults(): void {
        this.context.results = !this.context.results;
    };
}

register.viewControl('home-vc', HomeViewControl);
