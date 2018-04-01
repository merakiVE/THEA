import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
﻿import { Router } from '@angular/router';

import { Connect } from '../_models/connect';
import { ConnectService } from '../_services/connect.service';
import { CommonDataService } from '../_services/commonData.service';


@Component({
    moduleId: module.id,
    selector: 'app-connect-component',
    templateUrl: './connect.component.html'
})

export class ConnectComponent {
	public title: string;

	dbs = [
	    {name: 'postgresql'},
	    {name: 'Mysql'},
	    {name: 'Sqlite'},
	    {name: 'Oracle'},
	    {name: 'ArangoDB'}
 	];

	constructor(private fb: FormBuilder, 
				private router: Router,
				private connectService: ConnectService,
				private commonDataService: CommonDataService) {
        this.title = 'Connection bd';
    }

    connect: FormGroup;

    ngOnInit() {
    	this.connect = this.fb.group({
			host: ['', [Validators.required]],
			type: ['', [Validators.required]],
			port: [''],
			name: ['', [Validators.required]],
			user: ['', [Validators.required]],
			password: ['', [Validators.required]]
    	});
    }

    initBuild({ value, valid }: { value: Connect, valid: boolean }) {
    	
    	this.getTables(value);
    	this.connect.reset();
        this.router.navigate(['/build', ]);
	}

	getTables(connect: Connect){

		this.connectService.getTables(connect).subscribe(
			response => {
				this.commonDataService.setData(response);
			},
			error => {
				console.log(error);
			}
		);
	}

}
