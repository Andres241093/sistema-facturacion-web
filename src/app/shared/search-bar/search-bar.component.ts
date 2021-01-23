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

	onSelectFilter(filter: string)
	{
		this.filter = filter;
		for(let i of this.config.filters)
		{
			i.selected = false;
			if(i.name === this.filter)
			{
				i.selected = true;
			}
		} 
	}

	search(e: any)
	{
		let query = {
			"value": this.searchForm.value.search,
			"filter": this.filter
		};
		console.log(query);
	}

	ngOnInit(): void {
	}

}
