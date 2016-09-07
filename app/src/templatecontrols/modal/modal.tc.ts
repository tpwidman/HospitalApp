import {register, ui} from 'platypus';

export default class ModalTemplateControl extends ui.TemplateControl {
    templateString: string = require('./modal.tc.html');
}

register.control('modal', ModalTemplateControl);
