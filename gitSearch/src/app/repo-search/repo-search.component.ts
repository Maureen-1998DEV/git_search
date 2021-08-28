import { Component, OnInit } from '@angular/core';

import { GitSearchService } from '../gitSearch-service/git-search.service';


@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  providers: [GitSearchService],
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {

    repos!:any[];
    searchTerm!:string;

    constructor(private searchApi:GitSearchService) { }

    findRepos () {
        this.searchApi.updateSearchTerm(this.searchTerm);
        this.searchApi.searchRepos();
        this.repos = this.searchApi.reposArray;
    }

  ngOnInit() {
  }

}


