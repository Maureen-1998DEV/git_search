import { Component, OnInit } from '@angular/core';
import {  GitSearchService} from '../gitSearch-service/git-search.service';
import { User} from 'src/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [GitSearchService],
  styleUrls: ['./search.component.css']
})
export class GitSearchComponent implements OnInit {
    repos!: any[];
    username!: string;
    user!: User;

    constructor(private userService:GitSearchService) {}

    
  
      searchUser(){
          this.userService.updateProfile(this.username);
          this.userService.getUser();
          this.user = this.userService.user;



      }
           
  
  ngOnInit() {
  }
}

