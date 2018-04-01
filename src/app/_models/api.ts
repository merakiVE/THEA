import { Contact } from '../_models/contact';

export class Api {

    constructor(
        public name: any = '',
        public title: any = '',
        public description: any = '',
        public contact: Contact,
    	public host: any = '',
		public basePath:any = ''
    ){}
}
