import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-recovery-pass',
	templateUrl: './recovery-pass.component.html',
	styleUrls: ['./recovery-pass.component.scss']
})
export class RecoveryPassComponent implements OnInit {


	recoveryPassForm = new FormGroup({
		mail: new FormControl('',[Validators.required,Validators.email])
	});

	constructor() { }

	ngOnInit(): void {
	}

}
