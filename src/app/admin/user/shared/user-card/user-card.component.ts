import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserShowModalComponent } from '../user-show-modal/user-show-modal.component';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	openDialog() {
		this.dialog.open(UserShowModalComponent);
	}

	ngOnInit(): void {
	}

}
