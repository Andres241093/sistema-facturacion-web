import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide: boolean = true;

	loginForm = new FormGroup({
		mail: new FormControl('',[Validators.required,Validators.email]),
		password: new FormControl('',[Validators.required]),
	});

	constructor() { }

	ngOnInit(): void {
	}

}
