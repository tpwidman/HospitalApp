import {controls, events, register, ui, web} from 'platypus';

export default class FooterTemplateControl extends ui.TemplateControl {
    templateString: string = require('./footer.tc.html');
    context: any ={
        modal1: false
    };
    toggleModal(): void {
        this.context.modal1 = !this.context.modal1;
    }

}

register.control('footer', FooterTemplateControl);
