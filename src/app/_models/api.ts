import { Contact } from '../_models';

export class Api{

    constructor(
        public name: any = '',
        public title: any = '',
        public descripcion: any = '',
        public contact: Contact,
    	public host: any = '',
		public basePath:any = ''
    ){}
}
