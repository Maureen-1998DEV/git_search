import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { GitService } from '../git.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  repos: any[];
  username: string;
  user: User;

  constructor(private GitService:GitService) {

  }

    findUser(){
        this.GitService.AccessProfile(this.username);
        this.GitService.getUser();
        this.user = this.GitService.users;

        this.GitService.getRepos();
          this.repos = this.GitService.repoArray;
    }


  ngOnInit() {
  }

}



