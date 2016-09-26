import {controls, events, register, ui, web} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import BlogViewControl from '../../viewcontrols/blog/blog.vc';

export default class FooterTemplateControl extends ui.TemplateControl {
    templateString: string = require('./footer.tc.html');
    context: any ={
        modal1: false,
        homeView: HomeViewControl,
        aboutView: AboutViewControl,
        contactView: ContactViewControl,
        blogView: BlogViewControl
    };
    toggleModal(): void {
        this.context.contactModal = !this.context.contactModal;
    };

}

register.control('footer', FooterTemplateControl);
