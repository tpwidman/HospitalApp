import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class BlogViewControl extends BaseViewControl {
    templateString: string = require('./blog.vc.html');

    context: any = {};
}

register.viewControl('blog-vc', BlogViewControl);
