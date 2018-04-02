import { Api } from '../_models/api';
import { Resource } from '../_models/resource';

export class Template {

    constructor(
        public api: Api,
        public resources: Resource[]
    ){}
}