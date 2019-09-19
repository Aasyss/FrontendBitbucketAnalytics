import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RepositoryService} from '../../shared/services';
import {Repository} from '../../Repository';
import {DatePipe, formatDate} from '@angular/common';
import {pipe} from 'rxjs';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  repository = new Repository();
  slug:string;
  repo:any;
  constructor(private userRepo:RepositoryService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    //getting the slug from the url params
    this.slug= this.router.snapshot.params['slug'];
    this.getRepositoryDetail(this.slug);
  }
  /*
  * method to get the single repository details
  * subscribes the getRepository observable by providing slug data to get result(data)
  */
  getRepositoryDetail(slug:string){
    this.userRepo.getRepositoryDetail(slug).subscribe((data)=> {
        this.repo = data;
      }
    );
  }

  //method to import the user selected repository
  repositoryImport(repo:any) {
    this.repository.avatar = repo.links.avatar.href;
    this.repository.created_on = repo.created_on.slice(0, 10);

    this.repository.name = repo.name;
    this.repository.is_private = repo.is_private;
    this.repository.updated_on =  repo.created_on.slice(0, 10);
    this.repository.uuid = repo.uuid;
    this.repository.slug = repo.slug;

    this.userRepo.ImportRepository(this.repository)
      .subscribe(result => {
        console.log("completed");
        // this.router.navigate(['books']);
      }, (err) => {
        console.log(err);
      });
  }

  getCommits(slug:string){
    this.route.navigate(['/dashboard/commits/',slug]);
  }
}
