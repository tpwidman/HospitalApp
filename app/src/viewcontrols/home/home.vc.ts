import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        carouselItems: [{ text: 'test0', bg: 'rgba(255,0,0,0.4)' }, { text: 'test1', bg: 'rgba(0,255,0,0.4)' }, { text: 'test2', bg: 'rgba(0,0,255,0.4)' }],
    }
}

register.viewControl('home-vc', HomeViewControl);
