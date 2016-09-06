import {register, ui} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import BlogViewControl from '../../viewcontrols/blog/blog.vc';




export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');

    context: any = {
        showNavbar: true,
        homeView: HomeViewControl,
        aboutView: AboutViewControl,
        contactView: ContactViewControl,
        blogView: BlogViewControl
    }
}

register.control('navbar', NavbarTemplateControl);
