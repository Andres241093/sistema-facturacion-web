import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

	@Input() config: any;
	filter: any;

	searchForm = new FormGroup({
		search: new FormControl('')
	});

	constructor() { }

	search(e: any)
	{
		let query = this.config.url+'?';
		for(let filter of this.config.filters)
		{
			query += filter === this.config.filters[this.config.filters.length-1] ? filter+'='+this.searchForm.value.search : filter+'='+this.searchForm.value.search+'&';
		}
		console.log(query);
	}

	ngOnInit(): void {
	}

}
