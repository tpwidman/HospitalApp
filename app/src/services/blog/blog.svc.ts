import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogService extends BaseService {

}

register.injectable('blog-svc', BlogService);
