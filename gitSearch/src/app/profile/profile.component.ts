import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { User } from 'src/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  repo: any;
  user:User;

  constructor(private GitService: GitService) {
    
    this.GitService.mygitUser();
    this.user = this.GitService.users;

    this.GitService.myGitRepos();
    this.repo = this.GitService.repoArray;
}
  ngOnInit(): void {
  }

}
