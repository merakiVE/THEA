import { Param } from '../_models/param';
import { Response } from '../_models/response';
import { Payload } from '../_models/payload';

export class Action{

    constructor(
    	public name: any = '',
	    public description: any = '', 
	    public method: any = '', 
	    public route: any = '', 
	    public params: Param[] = [],
	    public responses: Response,
	    public payload: Payload
    ){}
}
