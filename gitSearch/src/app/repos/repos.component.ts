import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any[];
    gitUser:string;

    constructor(private searchApi:GitService) { }

    findRepos () {
        this.searchApi.SearchAccess(this.gitUser);
        this.searchApi.repoSearch();
        this.repos = this.searchApi.repoArray;
    }

  ngOnInit() {
  }

}
