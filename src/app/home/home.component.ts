import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent {
	public title: string;

	constructor() {
        this.title = 'Home';
    }

}
