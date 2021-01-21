import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-reset-pass',
	templateUrl: './reset-pass.component.html',
	styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

	hide: boolean = true;

	resetPassForm = new FormGroup({
		password: new FormControl('',[Validators.required])
	});

	constructor() { }

	ngOnInit(): void {
	}

}
