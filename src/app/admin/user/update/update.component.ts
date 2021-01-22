import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

	configBodyHeader: any;

	hide: boolean = true;

	updateForm = new FormGroup({
		name: new FormControl('',[Validators.required]),
		mail: new FormControl('',[Validators.required,Validators.email]),
		type: new FormControl('',[Validators.required]),
		dni: new FormControl('',[Validators.required]),
		password: new FormControl('',[Validators.required]),
		phone: new FormControl('',[Validators.required])
	});

	constructor() { 
		this.configBodyHeader = {
			"title": "Editar usuario",
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
