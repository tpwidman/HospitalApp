import {controls, events, register, ui, web} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        carouselItems: [
            { text: 'carousel thing 1', bg: 'rgba(192,192,192,0.4)'},
            { text: 'carousel thing 2', bg: 'rgba(143,222,177,0.4)' },
            { text: 'carousel thing 3', bg: 'rgba(118,182,246,0.4)' }
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
