import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { IUser } from '../user';


@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.css']
})
export class UserDeatilsComponent implements OnInit {
  rows: IUser[] = [];
  constructor(private service: UserService) { }
  users : any;
  ngOnInit(): void {
    this.service.getUsers().subscribe(data => this.users=data  
     );
  }

}
