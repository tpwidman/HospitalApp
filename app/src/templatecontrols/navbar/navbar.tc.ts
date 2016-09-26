import {controls, events, register, ui, web} from 'platypus';
import BaseViewControl from '../../viewcontrols/base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import BlogViewControl from '../../viewcontrols/blog/blog.vc';
import ModalTemplateControl from '../../templatecontrols/modal/modal.tc';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');

    context: any = {
        showNavbar: true,
        homeView: HomeViewControl,
        aboutView: AboutViewControl,
        contactView: ContactViewControl,
        blogView: BlogViewControl
    };
    toggleModal(): void {
        this.context.mobileModal = !this.context.mobileModal;
    };
}

register.control('navbar', NavbarTemplateControl);
