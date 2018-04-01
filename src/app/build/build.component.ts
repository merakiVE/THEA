import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CommonDataService } from '../_services/commonData.service';
import { BuildService } from '../_services/build.service';
import { Api } from '../_models/api';
import { Resource } from '../_models/resource';


@Component({
    moduleId: module.id,
    selector: 'build-component',
    templateUrl: './build.component.html'
})

export class BuildComponent{
  
	public title:string;
	public actRouter: any;
    public dataBase = {
        data: {},
        errors: '',
        message: ''
    };

	constructor(
		private fb: FormBuilder, 
		private router: Router,
        private actiRouter: ActivatedRoute,
        private toastr: ToastrService,
        private commonDataService: CommonDataService,
        private buildService: BuildService
    ) {
        this.title = 'buildion bd';
        this.actRouter = actiRouter;
    }

    api: FormGroup;

    ngOnInit(){

    	this.api = this.fb.group({

			name: ['', [Validators.required]],
			title: ['', [Validators.required]],
			description: ['', [Validators.required]],
			contact: this.fb.group({
				name: [''],
				email: ['']
			}),
			host: ['', [Validators.required]],
			port: ['', [Validators.required]],
			basePath:['', [Validators.required]]
    	});

        this.commonDataService.getData$.subscribe(
            response => {
                this.dataBase = response;
            },
            error => {
                this.router.navigate(['/connect']);
            }
        );
    }

    saveGeneralData({ value, valid }: { value: Api, valid: boolean }) {

        this.buildService.buildApi(value).subscribe(
            response => {
                this.api.reset();
            },
            error => {
                console.log(error);
            }
        );

        this.toastr.success('Guardada exitosamente', 'Información');
  	}
 
}
