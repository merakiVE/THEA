import { Action } from '../_models/action';

export class Resource{

    constructor(
        public namegroup: any = '',
        public basepath: any = '',
        public actions: Action[] = []
    ){}
}
