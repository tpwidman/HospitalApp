import {controls, events, register, ui, web} from 'platypus';
import BaseViewControl from '../../viewcontrols/base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import BlogViewControl from '../../viewcontrols/blog/blog.vc';

export default class ModalTemplateControl extends ui.TemplateControl {
    templateString: string = require('./modal.tc.html');
    context: any = {
        homeView: HomeViewControl,
        aboutView: AboutViewControl,
        contactView: ContactViewControl,
        blogView: BlogViewControl
    };
}

register.control('mobileModal', ModalTemplateControl);
