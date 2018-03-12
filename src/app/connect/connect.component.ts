import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
﻿import { Router } from '@angular/router';

import { Connect } from '../_models/index';


@Component({
    moduleId: module.id,
    selector: 'app-connect-component',
    templateUrl: './connect.component.html'
})

export class ConnectComponent {
	public title: string;

	dbs = [
	    {name: 'Postgres'},
	    {name: 'Mysql'},
	    {name: 'Sqlite'},
	    {name: 'Oracle'},
	    {name: 'ArangoDB'}
 	];

	constructor(private fb: FormBuilder, private router: Router) {
        this.title = 'Connection bd';
    }

    connect: FormGroup;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
    	this.connect = this.fb.group({
			host: ['', [Validators.required]],
			db: ['', [Validators.required]],
			port: [''],
			name: ['', [Validators.required]],
			user: ['', [Validators.required]],
			password: ['', [Validators.required]]
    	});
    }

    initBuild({ value, valid }: { value: Connect, valid: boolean }) {
    	this.connect.reset();
        this.router.navigate(['/build', value.name]);
	}
}
