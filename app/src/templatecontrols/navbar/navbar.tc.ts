import {register, ui} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import BlogViewControl from '../../viewcontrols/blog/blog.vc';

export default class NavbarTemplateControl extends ui.TemplateControl {
        title = 'Main';
        templateUrl = 'viewcontrols/navbar/navbar.viewcontrol.html';

        protected navbar: platui.Navbar = plat.acquire(platui.Navbar);

        initialize() {
            this.initNavbar();
        }
        initNavbar() {
            this.navbar.setLeft([{
               content: '<span class="icon-arrow-left"></span><span>Back</span>',
               action: () => {
                   alert('back');
               }
            }]);

            this.navbar.setCenter({
               content: 'PlatypusUI'
            });

            this.navbar.setRight({
               content: '<span>some icon</span>',
               action: () => {
                   alert('icon action');
               }
            });
        }
