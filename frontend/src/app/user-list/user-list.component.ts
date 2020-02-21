import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	listArray
  constructor(private UserService: UserService) { }

  ngOnInit() {
  	this.listArray = []
  	this.UserService.getAllUser().subscribe((data)=>{
			console.log(data)
			this.listArray = data.data
			

		},err=>{
			console.log(err)
		})
  }

}
