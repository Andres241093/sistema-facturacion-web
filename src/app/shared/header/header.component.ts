import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() sidenav: any;

	constructor(private router: Router) { }

	checkLoginRoute()
	{
		return this.router.url === '/auth/login' ? true : false;
	}

	ngOnInit(): void {
	}

}
