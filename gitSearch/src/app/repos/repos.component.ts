import { Component, OnInit } from '@angular/core';
import {  GitSearchService} from '../gitSearch-service/git-search.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  providers:[GitSearchService],
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repo!: any[];
    search!: string;

    constructor(private searchApi:GitSearchService) { }

    findRepos () {
        this.searchApi.updateSearchTerm(this.search);
        this.searchApi.searchRepos();
        this.repo = this.searchApi.reposArray;
    }
  ngOnInit() {
  }

}
