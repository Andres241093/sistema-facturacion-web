import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	hide: boolean = true;
	configBodyHeader: any;
	searchBarConfig: any;
	array: Array<any> = [1,2,3,4,5,6,7,8,9];

	constructor() { 
		this.configBodyHeader = {
			"title": "Usuarios",
			"subtitle": {
				"show": true,
				"larger": "- Todos los usuarios",
				"small": "Todos los usuarios"
			},
			"button": {
				"show": true,
				"matIcon": "person_add",
				"routerLink": "/admin/users/create",
				"tooltip": "Nuevo usuario"
			}
		};

		this.searchBarConfig = {
			"filters": [
			{
				'name': 'Nombre',
				'selected': true
			},
			{
				'name': 'Cédula',
				'selected': false
			}
			]
		};
	}

	ngOnInit(): void {
	}

}
