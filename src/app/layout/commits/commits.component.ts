import { Component, OnInit } from '@angular/core';
import {Commit} from '../../shared/commit';
import {ActivatedRoute, Router} from '@angular/router';
import {CommitsService} from '../../shared/services/commits.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {
  slug:string;
  commits: Array<Commit>;
  constructor(private commitsService:CommitsService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this.slug= localStorage.getItem('slug');
    this.getRepositoryCommits(this.slug);
  }

  private getRepositoryCommits(slug: string) {
    this.commitsService.getAllCommits(slug).subscribe((data)=> {
        this.commits = data;
        console.log(this.commits)
      }
    );
  }
}
