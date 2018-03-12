import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Api } from '../_models/index';


@Component({
    moduleId: module.id,
    selector: 'build-component',
    templateUrl: './build.component.html'
})

export class BuildComponent{
  
	public title:string;
	public actRouter: any;

	constructor(
		private fb: FormBuilder, 
		private router: Router,
        private actiRouter: ActivatedRoute
    ) {
        this.title = 'buildion bd';
        this.actRouter = actiRouter;
    }

    api: FormGroup;

    ngOnInit(){

    	this.api = this.fb.group({

			name: ['', [Validators.required]],
			title: ['', [Validators.required]],
			descripcion: ['', [Validators.required]],
			contact: this.fb.group({
				name: ['', Validators.required],
				email: ['', Validators.required]
			}),
			host: ['', [Validators.required]],
			port: ['', [Validators.required]],
			basePath:['', [Validators.required]]
    	});
    }

    initBuild({ value, valid }: { value: Api, valid: boolean }) {
    	this.api.reset();
  	}
 
}
