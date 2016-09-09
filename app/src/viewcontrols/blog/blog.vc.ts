import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class BlogViewControl extends BaseViewControl {
    templateString: string = require('./blog.vc.html');

    context: any = {
        posts: [
            {
                title:'First post', content:'first content', author:'john'
            },
            {
                title:'Second post', content:'second content', author:'jane'
            },
            {
                title:'Third post', content:'third content', author:'jim'
            }
        ]
    };
}

register.viewControl('blog-vc', BlogViewControl);
