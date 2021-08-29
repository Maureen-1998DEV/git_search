import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../gitSearch-service/git-search.service';
import  { User} from 'src/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[GitSearchService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  repos: any[];
  user: User;

constructor(private userService:GitSearchService) {
    this.userService.updateProfile();
    this.user = this.userService.user;

    this.userService.updateSearchTerm();
    this.repos = this.userService.reposArray;
}

ngOnInit() {
}

}

  


