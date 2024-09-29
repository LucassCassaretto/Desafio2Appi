import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-meal-details',
  standalone: true,
  imports: [NgFor],
  providers: [UserService],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.css'
})
export class MealDetailsComponent {
    dataList: any[] = [];
    data: any;

    constructor(private userService: UserService){}

    getMeal(){
      this.userService.getData().subscribe(
        (data:any)=>{
          this.dataList.push(data.meals[0]);
          console.log(data);
        },
        (error)=>{
          console.log(error)
        }        
      )
    }


}