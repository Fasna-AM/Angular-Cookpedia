import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  allUssers:any = []

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllUsers()
  }

  getAllUsers(){
    this.api.allUsersAPI().subscribe((res:any)=>{
      this.allUssers =res
      console.log(this.allUssers);
      
    })
  }

}
