import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserDeleteModalComponent} from '../user-delete-modal/user-delete-modal.component';

@Component({
	selector: 'app-user-show-modal',
	templateUrl: './user-show-modal.component.html',
	styleUrls: ['./user-show-modal.component.scss']
})
export class UserShowModalComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	openDeleteDialog() {
		this.dialog.open(UserDeleteModalComponent);
	}

	ngOnInit(): void {
	}

}
