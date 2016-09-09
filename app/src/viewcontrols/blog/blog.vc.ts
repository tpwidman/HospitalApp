import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class BlogViewControl extends BaseViewControl {
    templateString: string = require('./blog.vc.html');

    context: any = {
        posts: [
            {
                title:'First post', content:'first content', author:'John Smith'
            },
            {
                title:'Second post', content:'second content', author:'Jane Smith'
            },
            {
                title:'Third post', content:'third content', author:'Jim Smith'
            }
        ]
    };
}

register.viewControl('blog-vc', BlogViewControl);
