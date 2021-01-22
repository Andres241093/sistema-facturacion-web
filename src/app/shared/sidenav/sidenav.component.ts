import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	header: any;

	ADMIN_SIDENAV = [
		{
			'name': 'Usuarios',
			'matIcon': 'supervised_user_circle'
		},
		{
			'name': 'Clientes',
			'matIcon': 'contacts'
		},
		{
			'name': 'Categorias',
			'matIcon': 'list'
		},
		{
			'name': 'Productos',
			'matIcon': 'view_module'
		},
		{
			'name': 'Facturas',
			'matIcon': 'monetization_on'
		}	
	];

  constructor() { 
  	this.header = {
  		'iconPath': 'assets/user_male.svg',
  		'mail': 'andresucero241093@gmail.com',
  		'role': 'Administrador'
  	};
  }

  ngOnInit(): void {
  }

}
