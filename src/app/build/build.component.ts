import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CommonDataService } from '../_services/commonData.service';
import { BuildService } from '../_services/build.service';
import { Api } from '../_models/api';
import { Resource } from '../_models/resource';
import { Template } from '../_models/template';

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
    public enableApi: boolean = true;
    public enableResource: boolean = false;
    public enablePayload: boolean = false;
    public enableResponse: boolean = false;

    public resource: Resource;
    public resources: Resource[]= [];
    public template: Template;

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
        this.resource = new Resource();
    }

    api: FormGroup;
    resourceForm: FormGroup;




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

        this.resourceForm = this.fb.group({

            namegroup: ['', [Validators.required]],
            basePath:['', [Validators.required]],
            action: this.fb.group({
                name: ['', [Validators.required]],
                method: ['', [Validators.required]],
                route: ['', [Validators.required]],
                description: ['', [Validators.required]],
                payload: ['']
            }),
            param: this.fb.group({
                name: ['', [Validators.required]],
                type: ['', [Validators.required]],
                description: ['', [Validators.required]],
            }),
            response: this.fb.group({
                name: ['', [Validators.required]]
            })
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

        this.template.api = value;

        this.buildService.buildApi(value).subscribe(
            response => {
                this.api.reset();
            },
            error => {
                console.log(error);
            }
        );

        this.toastr.success('Guardada exitosamente', 'Data');
  	}

    saveResource({ value, valid }: { value: any, valid: boolean }) {

        this.resource.namegroup = value.namegroup;
        this.resource.basepath = value.basepath;
        
        this.template.resources.push(this.resource);

        this.toastr.success('Guardado exitosamente', 'Recurso');

    }

    enableBuilds(modulo) {

        switch (modulo) {                
            case "Resource":
                this.enableApi = false;
                this.enableResource = true;
                this.enablePayload = false;
                this.enableResponse = false;
                break;

            case "Payload":
                this.enableApi = false;
                this.enableResource = false;
                this.enablePayload = true;
                this.enableResponse = false;
                break;

            case "Response":
                this.enableApi = false;
                this.enableResource = false;
                this.enablePayload = false;
                this.enableResponse = true;
                break;

            default:
                this.enableApi = true;
                this.enableResource = false;
                this.enablePayload = false;
                this.enableResponse = false;
                break;
        }

    }
 
}
