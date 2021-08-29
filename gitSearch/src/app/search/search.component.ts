import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../gitSearch-service/git-search.service';
import {User} from 'src/user'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  repos!: any[];
  username!: string;
  user!: User;

  constructor(private userService:GitSearchService) {

        this.userService.updateProfile();
        this.user = this.userService.user;


  }
  updateprofile(){

  }
  ngOnInit() {
  }
}
