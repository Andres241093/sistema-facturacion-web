import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-body-header',
	templateUrl: './body-header.component.html',
	styleUrls: ['./body-header.component.scss']
})
export class BodyHeaderComponent implements OnInit {
	
	@Input() config: any;

	constructor() { }

	ngOnInit(): void {
	}

}
