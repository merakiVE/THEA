import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-component',
    templateUrl: './nav.component.html'
})

export class NavComponent{
  
	public title:string;

    constructor() {
        this.title = 'Menu navigation';
    }

    onBuildTramite(){
    	window.open("http://localhost:9013", "_blank");
	}

}
