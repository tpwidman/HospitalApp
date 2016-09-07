import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class HospitalService extends BaseService {

}

register.injectable('hospital-svc', HospitalService);
