import { Attribute } from '../_models/attribute';


export class Payload{

    constructor(
    	public name: any = '',
	    public attributes: Attribute[] = []
    ){}
}
