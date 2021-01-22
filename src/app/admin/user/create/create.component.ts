import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	configBodyHeader: any;

	hide: boolean = true;

	createForm = new FormGroup({
		name: new FormControl('',[Validators.required]),
		mail: new FormControl('',[Validators.required,Validators.email]),
		type: new FormControl('',[Validators.required]),
		dni: new FormControl('',[Validators.required]),
		password: new FormControl('',[Validators.required]),
		phone: new FormControl('',[Validators.required])
	});

	constructor() { 
		this.configBodyHeader = {
			"title": "Nuevo usuario",
			"subtitle": {
				"show": false
			},
			"button": {
				"show": true,
				"matIcon": "arrow_back",
				"routerLink": "/admin/users",
				"tooltip": "Regresar a usuarios"
			}
		};
	}

	ngOnInit(): void {
	}

}
