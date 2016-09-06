import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import AboutViewControl from '../viewcontrols/about/about.vc';
import BaseViewControl from '../viewcontrols/base/base.vc';
import ContactViewControl from '../viewcontrols/contact/contact.vc';
import BlogViewControl from '../viewcontrols/blog/blog.vc'


export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'about', view: AboutViewControl},
            { pattern: 'base', view: BaseViewControl},
            { pattern: 'contact', view: ContactViewControl},
            { pattern: 'blog', view: BlogViewControl}
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
