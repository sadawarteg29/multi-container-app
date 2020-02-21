import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.css'],
	providers: [UserService]
})
export class AddUserComponent implements OnInit {
	reqData
	constructor(private UserService: UserService,private router: Router,) { }

	ngOnInit() {
		this.reqData = {}
	}
	addUser(){
		this.UserService.addUser(this.reqData).subscribe((data)=>{
			console.log(data)
			this.router.navigate(['/user-list']);
		},err=>{
			console.log(err)
		})
	}

}
